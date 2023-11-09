import { createSlice } from '@reduxjs/toolkit'
import {http} from "../../Util/config.js"
const initialState = {
    detailProduct:[]
}

const DetailReducer = createSlice({
  name: 'DetailReducer',
  initialState,
  reducers: {
    getDetailProduct:(state,action)=>{
      state.detailProduct=action.payload
    }
  }
});

export const {getDetailProduct} = DetailReducer.actions

export default DetailReducer.reducer

export const getApiDetailProduct=(data)=>{
  return async(dispatch)=>{
    const res=await http.get(`api/Product/getbyid?id=${data}`)
    const action=getDetailProduct(res.data.content)
    dispatch(action)
  }
}