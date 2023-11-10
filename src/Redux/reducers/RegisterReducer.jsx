import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../Util/config';

const initialState = {
    register:"",

}

const RegisterReducer = createSlice({
  name: "RegisterReducer",
  initialState,
  reducers: {
    postRegister:(state,action)=>{
        state.register=action.payload
    },
  
  }
});

export const {postRegister} = RegisterReducer.actions

export default RegisterReducer.reducer

export const postRegisterApi=(data)=>{
    return async(dispatch)=>{
      try{
        const res=await http.post(`/api/Users/signup`,data)
        const action=postRegister(res.data.message)
        dispatch(action)
      }
      catch(err){
        const action=postRegister(err.response.data.message)
        dispatch(action)
      }
    }
}