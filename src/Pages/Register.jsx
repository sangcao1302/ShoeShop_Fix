import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { postRegisterApi } from '../Redux/reducers/RegisterReducer'

export default function Register() {
    const{register}=useSelector(state=>state.RegisterReducer)
    console.log(register)
    const [error,setError]=useState({})
    const [info,setInfo]=useState({})
    const [loading,setLoading]=useState(false)
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
                                <button  type="submit" className='w-100 bg-black text-white p-1 fs-5 fw-bold rounded-3'>Register</button>
                            </div>              
            </>
        )      
    }

    const getApiRegistePost=()=>{
        const action=postRegisterApi(info)
        dispatch(action)
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      getApiRegistePost()
    }
    
  return (
    <div className='container mt-3' >
       
            <div className='row mt-5'>
                <div className='col-12 col-sm-12 col-md-12'>
                    <form className='w-50 mx-auto border-2 border p-4 my-auto rounded-4' onSubmit={handleSubmit} >
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
