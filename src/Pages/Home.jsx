import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductApi} from "../Redux/reducers/HomeReducer.js"
import { NavLink } from "react-router-dom";
export default function Home() {
  const {product} = useSelector((state)=>state.HomeReducer)
  const[brand,setBrand]=useState("nike")
  const dispatch=useDispatch()
  const handleClick=(e)=>{
    let {id}=e.target
    setBrand(id)
  }
  const getApiProduct=()=>{
    const action=getProductApi(brand)
    dispatch(action)
  }
  useEffect(()=>{
    getApiProduct()
  },[brand])
  return (
  
      <div className="container" style={{marginTop:"12%"}}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active w-100">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <img
                    src="./assets/carousel/adidas.png"
                    style={{ maxWidth: "100%" }}
                    alt="..."
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="text-carousel">
                    <h3>Adidas Super Start</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores minus sunt et, exercitationem, labore repudiandae
                      incidunt ratione fugit suscipit neque corrupti unde hic
                      amet voluptatibus deleniti molestiae, architecto culpa.
                      Voluptatum.
                    </p>
                    <button className="bg-danger text-white py-2 px-4 border-0 rounded-3">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-100">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <img
                    src="./assets/carousel/nike.png"
                    style={{ maxWidth: "100%",maxHeight:"335px" }}
                    alt="..."
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="text-carousel">
                    <h3>Nike Air Force 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores minus sunt et, exercitationem, labore repudiandae
                      incidunt ratione fugit suscipit neque corrupti unde hic
                      amet voluptatibus deleniti molestiae, architecto culpa.
                      Voluptatum.
                    </p>
                    <button className="bg-danger text-white py-2 px-4 border-0">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-product mt-5">
            <ul className="nav nav-pills mb-3 w-100  d-flex justify-content-around align-items-center py-3 bg-black"  id="pills-tab" role="tablist">
              <li className="nav-item d-block" role="presentation">
                <button className="nav-link active text-white bg-transparent" id="nike" data-bs-toggle="pill" data-bs-target="#Nike" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e)=>handleClick(e)}>Nike</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-white bg-transparent" id="adidas" data-bs-toggle="pill" data-bs-target="#Adidas" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e)=>handleClick(e)}>Adidas</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-white bg-transparent" id="converse" data-bs-toggle="pill" data-bs-target="#Converse" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e)=>handleClick(e)}>Converse</button>
              </li>
              
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div className="tab-pane fade show active" id="Nike" role="tabpanel" aria-labelledby="nike">
                <div className="row">
                {product?.map((item,index)=>{
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
              <div className="tab-pane fade" id="Adidas" role="tabpanel" aria-labelledby="adidas">
              <div className="row">
                {product?.map((item,index)=>{
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
              <div className="tab-pane fade" id="Converse" role="tabpanel" aria-labelledby="converse">
              <div className="row">
                {product?.map((item,index)=>{
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
            </div>
        </div>
      </div>

  );
}
