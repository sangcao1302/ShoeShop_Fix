import { createSlice } from '@reduxjs/toolkit'
import { getStorageJson, http, saveStorageJson } from '../../Util/config';
const initialState = {
    arrCart:getStorageJson("cart"),
    cartPost:{}
}

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    addProduct:(state,action)=>{
      const newItem=action.payload
   
      const FindProd=state.arrCart?.find((item)=>item.id===newItem.id)
      if(!FindProd){
        state.arrCart?.push({
          id:newItem.id,
          name:newItem.name,
          image:newItem.image,
          price:newItem.price,
          quantity:1
        })
        saveStorageJson("cart",state.arrCart)
      }
      
      else{
        FindProd.quantity++
      }
    },
    quantityUp:(state,action)=>{
      const id=action.payload
      const FindProduct=state.arrCart?.find((item)=>item.id===id)
      if(FindProduct){
        FindProduct.quantity++
      }
      saveStorageJson("cart",state.arrCart)

    },
    quantityDown:(state,action)=>{
      const id=action.payload
      const FindProduct=state.arrCart?.find((item)=>item.id===id)
      if(FindProduct){
        FindProduct.quantity--
      }
      if(FindProduct.quantity<1){
        FindProduct.quantity=1
      }
      saveStorageJson("cart",state.arrCart)

    },

    postCart:(state,action)=>{
      state.cartPost=action.payload
    },
    removeCart:(state,action)=>{
      let id=action.payload
      const findIndex=state.arrCart?.findIndex(item=>item.id===id)
      state.arrCart.splice(findIndex,1) 
      saveStorageJson("cart",state.arrCart)
    }
  }
});

export const {addProduct,quantityUp,quantityDown,postCart,removeCart} = CartReducer.actions

export default CartReducer.reducer


export const postCartApi=(data)=>{
  return async(dispatch)=>{
    const res=await http.post(`/api/Users/order`,data)
    const action=postCart(res.data.content)
    dispatch(action)
  }
}
