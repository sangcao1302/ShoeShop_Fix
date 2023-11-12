import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiProductAll } from '../Redux/reducers/ProductReducer'
import { NavLink } from 'react-router-dom'

export default function Product() {
  let{ productAll}=useSelector(state=>state.ProductReducer)
  const dispatch=useDispatch()
  const getApi=()=>{
    const action=getApiProductAll()
    dispatch(action)
  }
  useEffect(()=>{
    getApi()
  },[])
  return (
    <div className='container' style={{marginTop:"7%"}}>
      <div className="img" style={{backgroundImage:"url(/assets/image/sub_image.jpg)",backgroundSize:"cover",height:"200px",backgroundPosition:"center"}}>
       <h1 className='text-center text-white' style={{lineHeight:"220px"}}>Product</h1>
      </div>
        <div className="row">
        {productAll?.map((item,index)=>{
                  return (
                      <div className="col-12 col-md-4 col-sm-4 g-3" key={index}>
                        <div className="card" style={{width: '100%'}}>
                        <div className="img-shoe d-flex justify-content-center ">
                          <img src={item.image} className="card-img-top w-25" alt="..." />

                        </div>
                          <div className="card-body text-center">
                            <h5 className="card-title">{item.name}</h5>
                            
                            <div className="d-flex justify-content-around mt-4">
                              <NavLink to={`/detail/${item.id}`} className=" bg-dark border-0 py-0  px-4 rounded-2 fs-6 text-white text-decoration-none w-50" style={{maxWidth:"100px",lineHeight:"50px"}}>Detail</NavLink>
                              <div className=" w-50 d-flex justify-content-end fs-5 mt-2">
                                  <p>{item.price}$</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  )
                })}   
        </div>         
    </div>
  )
}
