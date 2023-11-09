import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import DetailReducer from "./reducers/DetailReducer";
import CartReducer from "./reducers/CartReducer";
import LoginReducer from "./reducers/LoginReducer";
import ProductReducer from "./reducers/ProductReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import RegisterReducer from "./reducers/RegisterReducer";
export const store = configureStore({
  reducer: {
    HomeReducer: HomeReducer,
    DetailReducer:DetailReducer,
    CartReducer:CartReducer,
    LoginReducer:LoginReducer,
    ProductReducer:ProductReducer,
    ProfileReducer:ProfileReducer,
    RegisterReducer:RegisterReducer
  },
});
