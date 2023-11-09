import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { USER_LOGIN, clearStorgaeJson } from "../Util/config.js";
import { history } from "../index.js";

export default function Header() {
  let { arrCart } = useSelector((state) => state.CartReducer);
  let { login } = useSelector((state) => state.LoginReducer);
  const handleClick = () => {
    clearStorgaeJson(USER_LOGIN);
    clearStorgaeJson("cart");
    history.push(`/login`);
    window.location.reload();
  };

  const mobile = () => {
    if (window.innerWidth < 800) {
      return (
        <div
          className="row bg-white border-top mx-auto"
          style={{
            position: "fixed",
            bottom: "-10px",
            right: "0",
            left: "0",
            zIndex: "100",
            maxWidth: "100%",
          }}
        >
          <div className="col-12">
            <div className="d-flex justify-content-around align-items-center">
              <NavLink
                className=" d-flex text-black text-decoration-none "
                to={`/cart`}
              >
                <button
                  type="button"
                  className="btn position-relative    border-0 "
                >
                  <i className="fa fa-shopping-cart"></i>
                  <span
                    className="position-absolute d-flex align-items-center translate-middle badge bg-danger border border-light rounded-circle justify-content-center"
                    style={{
                      top: "5px",
                      right: "-11.5px",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    <span>{arrCart.length}</span>
                  </span>
                </button>
              </NavLink>
              <div className="dropdown text-end">
                <NavLink
                  className="dropdown-item bg-white"
                  style={{
                    color: "black",
                    display: `${login.length !== 0 ? "none" : ""}`,
                  }}
                  to={`/login`}
                >
                  <i className="fa fa-user"></i>
                </NavLink>
                <button
                  className="btn-drop border p-2 rounded-2 bg-white"
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{ display: `${login.length !== 0 ? "" : "none"}` }}
                >
                  <i class="fa fa-align-justify"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink
                      className="dropdown-item bg-white"
                      style={{ color: "black" }}
                      to={`/login`}
                      onClick={handleClick}
                    >
                      <i className="fa fa-sign-out-alt mx-2"></i>
                      <span className="mx-2">Sign out</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white"
                      style={{ color: "black" }}
                      to={`/profile`}
                    >
                      <i className="fa fa-info mx-2"></i>
                      <span className="mx-3">Profile</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  const desktop = () => {
    if (window.innerWidth > 800) {
      return (
        <>
          <NavLink
            className="postion-relative d-flex text-black text-decoration-none "
            to={`/cart`}
          >
            <button
              type="button"
              className="btn position-relative  mx-4  border-0 "
            >
              <i className="fa fa-shopping-cart"></i>
              <span
                className="position-absolute d-flex align-items-center translate-middle badge bg-danger border border-light rounded-circle justify-content-center"
                style={{
                  top: "5px",
                  right: "-11.5px",
                  width: "20px",
                  height: "20px",
                }}
              >
                <span>{arrCart.length}</span>
              </span>
            </button>
          </NavLink>
          <div className="dropdown text-end">
            <NavLink
              className="dropdown-item bg-white"
              style={{
                color: "black",
                display: `${login.length !== 0 ? "none" : ""}`,
              }}
              to={`/login`}
            >
              <i className="fa fa-user"></i>
            </NavLink>
            <button
              className="btn-drop border p-2 rounded-2 bg-white"
              type="button"
              data-bs-toggle="dropdown"
              style={{ display: `${login.length !== 0 ? "" : "none"}` }}
            >
              <i class="fa fa-align-justify"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <NavLink
                  className="dropdown-item bg-white"
                  style={{ color: "black" }}
                  to={`/login`}
                  onClick={handleClick}
                >
                  <i className="fa fa-sign-out-alt mx-2"></i>
                  <span className="mx-2">Sign out</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item bg-white"
                  style={{ color: "black" }}
                  to={`/profile`}
                >
                  <i className="fa fa-info mx-2"></i>
                  <span className="mx-3">Profile</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      );
    }
  };
 
  return (
    <div
      className="container bg-white"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1",
        maxHeight: "65px",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container">
          <NavLink to={"/home"}>
            <img src="./assets/image/Logo.png" className={window.innerWidth < 800 ? "w-75" : "w-100"} alt=""  style={{ objectFit: "contain" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCenteredExample"
            aria-controls="#navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center bg-white w-100 p-3"
            id="navbarCenteredExample"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 fs-5 fw-bold ">
              <li className="nav-item mx-4">
                <NavLink
                  to={`/home`}
                  className="text-decoration-none text-black mt-5"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink
                  to={`/product`}
                  className="text-decoration-none text-black mt-5"
                >
                  All-Product
                </NavLink>
              </li>
              <li className="nav-item mx-4 ">
                <NavLink
                  to={`/cart`}
                  className="text-decoration-none text-black mt-5"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          {desktop()}
        </div>
      </nav>
      {mobile()}
    </div>
  );
}
