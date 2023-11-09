import { createSlice } from '@reduxjs/toolkit'
import {http} from "../../Util/config.js"
const initialState = {
    product:[]
}

const HomeReducer = createSlice({
  name: "HomeReducer",
  initialState,
  reducers: {
   getProduct:(state,action)=>{
    state.product=action.payload
   }
  }
});

export const {getProduct} = HomeReducer.actions

export default HomeReducer.reducer

export const getProductApi=(data)=>{
    return async(dispatch)=>{
        const res=await http.get(`/api/Product?keyword=${data}`)
        const action=getProduct(res.data.content)
        dispatch(action)
    }
}