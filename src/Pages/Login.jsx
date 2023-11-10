import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { loginApi } from '../Redux/reducers/LoginReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const {login}=useSelector(state=>state.LoginReducer)
    const{register}=useSelector(state=>state.RegisterReducer)
    console.log(login)
    const[display,setDisplay]=useState("0")
    const dispatch=useDispatch()
    const [info,setInfo] = useState({
        email:"",
        password: ""
      });
      
   
    const handleChange=(e)=>{
        let{value,id}=e.target
        info[id]=value
    }
    const apiLogin=()=>{
        const action=loginApi(info)
        dispatch(action)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        apiLogin() 
    }
    useEffect(()=>{
     
    },[])
  return (
    <div className='container' style={{minHeight:"58.8vh",marginTop:"7%"}}>
        <div className='row g-0' >
            <div className='col-12 col-sm-5 col-md-5 text-end'>
                    <img src="../assets/login/login-image.jpg" className='rounded-start-2 w-100 h-100' style={{objectFit:"cover"}}  alt="" />
            </div>
            <div className='bg-white rounded-end-2 border col-12 col-sm-7 col-md-7'>
                <form className='p-5' onSubmit={(e)=>handleSubmit(e)}>
                    <h3>Login</h3>
                    <div className="mt-5">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control w-100" id="email" onChange={(e)=>handleChange(e)}/>
                        <span className='text-danger mt-2'>{login.message}</span>
                    </div>
                    <div className=" mt-5">    
                        <label htmlFor="password" className="form-label ">Password</label>
                        <input type="password" id="password" className="form-control w-100" aria-describedby="passwordHelpBlock" onChange={(e)=>handleChange(e)}/>  
                    </div>
                    <div className='footer-form mt-5 text-center'>
                        <button type="submit" className="btn btn-dark w-100">Login</button>
                        <div className='mt-2'>
                            <p className='text-nowrap'>Not have an account ? <NavLink className="text-decoration-none tex-wrap " to={`/register`}>Register now</NavLink></p>
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
