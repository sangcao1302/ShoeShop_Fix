import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileApi, updateProfileApi } from '../Redux/reducers/ProfileReducer'

export default function Profile() {
    let{profile,postProfile}=useSelector(state=>state.ProfileReducer)
 
    console.log(postProfile)
    const[updateProfile,setUpdateProfile]=useState({})
    const [display,setDisplay]=useState(0)
    console.log(profile)
   
    const dispatch=useDispatch()
    const getApiProfile=()=>{
        const action=getProfileApi()
        dispatch(action)
    }
    const handleChange=(e)=>{
        let{id,value}=e.target
        updateProfile["email"]=profile.email
        updateProfile["name"]=profile.name
        updateProfile["phone"]=profile.phone
        updateProfile[id]=value  
        console.log(updateProfile)

    }
    const alert=()=>{
        setDisplay(1)
          setTimeout(()=>{
            setDisplay(display-1)
          },4000)
    }
    const handleClick=async()=>{
        const action=updateProfileApi(updateProfile)
        dispatch(action)
        alert()
        
    }
    useEffect(()=>{
        getApiProfile()
    },[])
  return (
    <div className='container' style={{marginTop:"5%"}} >
        <div className="img" style={{backgroundImage:"url(/assets/image/sub_image.jpg)",backgroundSize:"cover",height:"200px",backgroundPosition:"center"}}>
            <h1 className='text-center text-white' style={{lineHeight:"220px",marginRight:"7%"}}>Profile</h1>
        </div>
        <div className='row'>
          <div className='position-alert d-flex justify-content-end mb-5' style={{opacity:`${display}`}}>
            <div className="success-msg text-success text-end rounded-3 p-2 d-flex align-items-center" style={{backgroundColor:"#DFF2BF"}} >
              <span className='text-white bg-success rounded-circle  d-flex justify-content-center align-items-center' style={{width:"30px",height:"30px"}}><i className="fa fa-check"></i></span>
              <span className='mx-2'>Thành công!</span>
            </div>
          </div>
            <div className='col-12 col-sm-12 col-md-12 '>
                <div className='border w-100 mx-auto rounded-5'>
                    <div className='mx-auto'>
                        <div className='row  mt-5 px-5'>
                            <div className='col-12 col-sm-6 col-md-6 mt-5'>
                                <div className='email'>
                                    <span>Email</span>
                                    <input type="email" id='email' className='w-100' disabled defaultValue={profile.email} onChange={(e)=>handleChange(e)} />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-6 mt-5'>
                                <div className='name'>
                                <span className='text-start'>Name</span>
                                    <input type="text" id='name' className='w-100' defaultValue={profile.name} onChange={(e)=>handleChange(e)} />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-sm-6 mt-5'>
                                <div className='phone'>
                                    <span>Phone</span>
                                    <input type="email" id='phone' className='w-100' defaultValue={profile.phone} onChange={(e)=>handleChange(e)} />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-sm-6 mt-5'>
                                <div className='password'>
                                    <label htmlFor="password" className='mx-2'>Password</label><br />
                                    <input type="password" id='password' className='w-100' onChange={(e)=>handleChange(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btn-submit d-flex justify-content-center mt-5 mb-5'>
                        <button className='bg-danger border-0 p-2 rounded-3 text-white' onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
