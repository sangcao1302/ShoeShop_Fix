import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCartApi, quantityDown, quantityUp, removeCart } from '../Redux/reducers/CartReducer'
import { USER_LOGIN, getStorageJson } from '../Util/config'

export default function Cart() {
    let{arrCart,cartPost}=useSelector(state=>state.CartReducer)
    console.log(cartPost)
    let{login}=useSelector(state=>state.LoginReducer)
    let [order,setOrder]=useState({   
        "orderDetail": [],
        "email": ""
    })
    let [display,setDisplay]=useState("0")
    let [error,setError]=useState("0")
    console.log(order)
    const dispatch=useDispatch()
    const handleUp=(id)=>{
      const action=quantityUp(id)
      dispatch(action)
    }
    const handleDown=(id)=>{
      const action=quantityDown(id)
      dispatch(action)
    }
    const result=()=>{
      let total=0
     return arrCart.map((item,index)=>{
        let totalItem=0
       
        totalItem=item.price*item.quantity
        total+=totalItem
        if (arrCart.length - 1 === index)
        {
          return total
        }       
      })
      
    }
    const postCart=()=>{
      let email=getStorageJson(USER_LOGIN)
      arrCart?.map((item)=>{
        return order.orderDetail.push({
          productId:`${item.id}`,
          quantity:item.quantity
        })
      })
    
      order.email=email.email
      const action=postCartApi(order)
      dispatch(action)
    }
    const handleClick=()=>{
      if(login.length===0)
      {
        setError("1")
        setTimeout(()=>{
          setError("0")
        },4000)
      }
      else{
        postCart()
        setDisplay("1")
        setTimeout(()=>{
          setDisplay("0")
        },4000)
      }
    }
    const handleDel=(i)=>{
       const action=removeCart(i)
       dispatch(action)    
    }
  return (
    <div className='container' style={{minHeight:"55vh"}}>
          <div className='d-flex justify-content-end  ' style={{opacity:display,marginTop:"5%"}}>
            <div className="success-msg text-success text-end rounded-3 p-2 d-flex align-items-center" style={{backgroundColor:"#DFF2BF"}} >
              <span className='text-white bg-success rounded-circle  d-flex justify-content-center align-items-center' style={{width:"30px",height:"30px"}}><i className="fa fa-check"></i></span>
              <span className='mx-2'>Success</span>
            </div>
          </div>
          <div className='d-flex justify-content-end ' style={{opacity:error,marginTop:"5%"}}>
            <div className="alert alert-danger text-success text-end rounded-3 p-2 d-flex align-items-center"  >
              <span className='text-white bg-danger rounded-circle  d-flex justify-content-center p-2 badge' style={{width:"30px",height:"30px"}}>x</span>
              <span className='mx-2 text-danger'>Please Login</span>
            </div>
          </div>
        
          {arrCart?.map((item,index)=>{
            return(
              <div className='row text-center border-top' key={index}>
                <div className='col-12 col-sm-2 col-md-2'>  
                  <div className='img-product w-100'>
                    <img src={item.image} style={{maxWidth:"30%"}} alt="" />
                  </div>
                </div>
                <div className='col-12 col-sm-2 col-md-2'>  
                  <div className='total d-flex align-items-center h-75 w-100 justify-content-center'>
                    <span className='fs-5'>{item.name}</span>
                  </div>
                </div>
                <div className='col-12 col-sm-2 col-md-2'>
                  <div className='price d-flex align-items-center h-75 w-100 justify-content-center'>
                    <p className='mb-3 fs-5'>{item.price}$</p>
                  </div>
                </div>
                <div className='col-12 col-sm-2 col-md-2'>
                  <div className='quatity d-flex align-items-center justify-content-center h-75' style={{gap:"12px"}}>
                    <div className='btn-down '>
                      <button className='px-3 py-1 border-0 rounded-3 bg-black text-white' onClick={()=>handleDown(item.id)}>-</button>
                    </div>
                    <div className='count'>         
                      <p className='mt-3'>{item.quantity}</p>
                    </div>
                    <div className='btn-up'>    
                      <button className='px-3 py-1 border-0 rounded-3 bg-black text-white' onClick={()=>handleUp(item.id)}>+</button>
                    </div> 
                  </div>
                </div>
                <div className='col-12 col-sm-2 col-md-2 text-end p-2'>
                    <button className='bg-white border-0' onClick={()=>handleDel(item.id)}><i className="fa fa-trash-alt" /></button>
                </div>
              </div>
            )
          })}
         
        <div className='total d-flex align-items-center mt-2 justify-content-end fw-bold'>
          <p className='fs-3 '>Total:</p>
          <p className='fs-3 mx-2'>{result()}$</p>
        </div>
        <div className='btn-submit mt-2 d-flex justify-content-end mx-2'>
          <button className='btn btn-danger' onClick={handleClick}>Checkout</button>
        </div>
    </div>
  )
}
