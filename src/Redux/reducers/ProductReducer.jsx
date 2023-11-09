import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../Util/config';

const initialState = {
  productAll:[]
}

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    getProductAll:(state,action)=>{
      state.productAll=action.payload
    }
  }
});

export const {getProductAll} = ProductReducer.actions

export default ProductReducer.reducer

export const getApiProductAll=()=>{
  return async(dispatch)=>{
    const res=await http.get(`/api/Product`)
    const action=getProductAll(res.data.content)
    dispatch(action)
  }
}