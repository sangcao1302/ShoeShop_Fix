import { createSlice } from '@reduxjs/toolkit'
import {getStorageJson, http, saveStorageJson} from "../../Util/config.js"
import { history } from '../../index.js';
import { USER_LOGIN } from '../../Util/config.js';
const initialState = {
    login:getStorageJson("userLogin")
}

const LoginReducer = createSlice({
  name: "LoginReducer",
  initialState,
  reducers: {
    loginForm:(state,action)=>{
        state.login=action.payload
    }
  }
});

export const {loginForm} = LoginReducer.actions

export default LoginReducer.reducer

export const loginApi=(data)=>{
  return async(dispatch)=>{
    try{
      const res=await http.post(`/api/Users/signin`,data)
      const action=loginForm(res.data.message)
      dispatch(action)
      saveStorageJson(USER_LOGIN,res.data.content)
      history.push('/home');
    }catch(err){
    
      const action=loginForm(err.response?.data)
      dispatch(action)
    }
    
  }
}
    
   
