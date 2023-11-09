import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./Redux/configStore.js";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import { createBrowserHistory } from "history";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Product from "./Pages/Product.jsx";
import Profile from "./Pages/Profile.jsx";
import Register from "./Pages/Register.jsx";
export const history = createBrowserHistory({});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeLayout></HomeLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/detail">
            <Route path=":id" element={<Detail></Detail>}></Route>
          </Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
