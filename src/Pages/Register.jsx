import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import {  postRegisterApi } from '../Redux/reducers/RegisterReducer'
import { history } from '../index.js'

export default function Register() {
    const{register}=useSelector(state=>state.RegisterReducer)    
    const [error,setError]=useState({email:"",name:"",phone:"",password:"",passwordCheck:""})
    const [info,setInfo]=useState({email:"",name:"",phone:"",password:"",passwordCheck:""})
    const [loadingSuccess,setLoadingSucess]=useState("none")
    const [loadingError,setLoadingError]=useState("none")
    const [inputValue, setInputValue] = useState("");  
    const dispatch=useDispatch()
    const handleChange=(e)=>{
       
        const regetPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
        const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
        let {id,value}=e.target
        info[id]=value
        if(info[id]==="")
        {
            setError({
                ...error,
                [id]:"Required"
            })
           return
        }
        
        if(id==="password")
        {
            if(!value.match(regetPassword))
            {
                setError({
                    ...error,
                    [id]:"Valid Password"
                })
            }
            else
            {
                setError({    
                   [id]:""
                })
            }  
            return
        }
        if(id==="email")
        {
            if(!value.match(regexEmail))
            {   
                
                setError({
                    ...error,
                    [id]:"Valid Email"
                })
            }
            else{
                setError({  
                    ...error,
                    [id]:""
                })
            }
            return
        }
        if(id==="passwordCheck"){
            if(value!==info["password"]){
                setError({
                    ...error,
                    [id]:"Password not match"
                })
            }
            else{
                setError({
                    ...error,
                    [id]:""
                })
            }
        }
    } 
    const form=()=>{
        return(
            <>
                     <div className='email mt-2'>
                                <label htmlFor="name" className='fw-bold'>Email</label>
                                <input type="email" id='email' className='w-100' onChange={e=>handleChange(e)} />
                                <span className='text-danger'>{error.email}</span>
                           </div> 
                           <div className='name mt-2'>
                                <label htmlFor="name" className='fw-bold'>Name</label>
                                <input type="text" id='name' className='w-100' onChange={e=>handleChange(e)}/>
                                <span className='text-danger'>{error.name}</span>
                           </div> 
                           <div className='phone mt-2'>
                                <label htmlFor="phone" className='fw-bold'>Phone</label>
                                <input type="text" id='phone' className='w-100' onChange={e=>handleChange(e)} />
                                <span className='text-danger'>{error.phone}</span>
                           </div> 
                           <div className='password mt-2'>
                                <label htmlFor="password" className='fw-bold'>Password</label>
                                <input type="password" id='password' className='w-100' onChange={e=>handleChange(e)}/>
                                <span className='text-danger'>{error.password}</span>
                           </div> 
                           <div className='repeat-pass mt-2 mb-4'>
                                <label htmlFor="password-check" className='fw-bold'>Repeat your password</label>
                                <input type="password" id='passwordCheck' className='w-100' onChange={e=>handleChange(e)} />
                                <span className='text-danger'>{error.passwordCheck}</span>
                           </div> 
                           <div className='btn-submit p-0 border-0'>
                                <button type="btn" className='w-100 bg-danger text-white p-1 fs-5 fw-bold rounded-3'>Register</button>
                            </div>              
            </>
        )      
    }

    const getApiRegistePost=()=>{
        const action=postRegisterApi(info)
        dispatch(action)
       
    }

    const handleSubmit=async(e)=>{
      e.preventDefault()
      const checkEmty = Object.values(info).every(value => {
        if (value==="") {
          history.push('/register')
          return false
        }
        return true;
      })
      const checkEmtyError=Object.values(error).every(value => {
        if (value!=="") {
          return false;
        }
        return true;
      })
      if(checkEmty && checkEmtyError){
         getApiRegistePost()     
      }         
    }
    useEffect(()=>{
        if(register==="Email đã được sử dụng!"){
            setLoadingError("")
            setTimeout(()=>{
                setLoadingError("none")
            },2000)
        }
        if(register==="Đăng ký tài khoản thành công!"){
            setLoadingSucess("")
            setTimeout(()=>{
                setLoadingSucess("none")
                history.push("/login")
                window.location.reload()
            },2000)
        }
    },[register])
   
   
  return (
    <div className='container' style={{marginTop:"6%"}} >
            <div className='d-flex justify-content-end' >
                <div className='rounded-2 p-2' style={{backgroundColor:"#DFF2BF",display:loadingSuccess}}>
                    <span className='text-white bg-success rounded-circle  px-2 py-1' style={{width:"25px",height:"25px"}}><i className="fa fa-check fs-6"></i></span>  
                    <span className='mx-2'>Success</span>
                </div> 
                <div className='rounded-2 p-2' style={{backgroundColor:"#F8D7DA",display:loadingError}}>
                    <span className='text-white bg-danger rounded-circle  px-2 py-1' style={{width:"25px",height:"25px"}}>X</span>  
                    <span className='mx-2 text-danger'>Fail Register</span>
                </div>       
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-sm-12 col-md-12'>
                    <form className='w-75 mx-auto border-2 border p-4 my-auto rounded-4' onSubmit={handleSubmit} >
                        <div className='img-logo text-center'>
                            <img src="../assets/image/Logo.png" className='w-25' alt="" />
                        </div>
                            <h3 className='text-center mt-4'>CREATE AN ACCOUNT</h3>
                            {form()}
                           
                    </form>
                </div>
            </div>
    </div>
  )
}
