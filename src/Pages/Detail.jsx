import React, { useEffect } from 'react'
import {NavLink, useParams} from "react-router-dom"
import { getApiDetailProduct } from '../Redux/reducers/DetailReducer'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { addProduct } from '../Redux/reducers/CartReducer'
export default function Detail() {
    const{detailProduct}=useSelector(state=>state.DetailReducer)
    console.log(detailProduct)
    const param=useParams()
    const dispatch=useDispatch()
    const getDetailProductApi=()=>{
        const action=getApiDetailProduct(param.id)
        dispatch(action)
    }
    const handleClick=()=>{
        const action=addProduct(detailProduct)
        dispatch(action)
     
    
    }
    useEffect(()=>{
        getDetailProductApi()
    },[param.id])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        loop:true,
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12 col-md-12 col-sm-12'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-6'>
                    <div className='img-product w-100'>
                        <img src={detailProduct.image} style={{maxWidth:"100%"}} alt="" />
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-6'>
                    <div className='des-product'>
                        <h3>{detailProduct.name}</h3>
                        <p>{detailProduct.description}</p>
                        <p>{detailProduct.price}$</p>
                      
                            {detailProduct.size?.map((item,index)=>{
                                return(
                                    <button key={index} className='bg-black text-white p-2 border-0' style={{marginRight:"2%"}}>{item}</button>
                                )
                            })}
                        <br />
                        <button className='btn-cart bg-danger border-0 text-white p-2 mt-4' onClick={handleClick}> Add To Cart</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className='relate-product mt-5'>
        <h2 className='px-2 py-2 text-nowrap' style={{maxWidth:"65%"}}>Relate Product</h2>
            <Slider {...settings}>
                {detailProduct.relatedProducts?.map((item,index)=>{
                    return(
                        <div className="card border-0 mt-5" style={{width: '100%'}} key={index}>
                        <div className="img-shoe d-flex justify-content-center ">
                          <img src={item.image} className="card-img-top w-25" alt="..." />
                        </div>
                        <h5 className="card-title text-center">{item.name}</h5>
                          <div className="card-body text-center d-flex justify-content-center">
                            <div className="d-flex align-items-center mt-4 justify-content-center">
                              <NavLink to={`/detail/${item.id}`} className=" bg-danger border-0 py-2 px-2 rounded-2 fs-6 text-white text-decoration-none text-nowrap  mx-2" style={{maxWidth:"120px"}}>Detail</NavLink>
                              <div className="text-center w-50 mx-2 d-flex justify-content-center align-items-center fs-5">
                              {item.price}$
                              </div>
                            </div>
                          </div>
                        </div>
                     
                    )
                })}
            </Slider>
        </div>
    </div>
   
  )
}
