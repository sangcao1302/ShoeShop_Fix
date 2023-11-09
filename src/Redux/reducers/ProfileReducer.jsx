import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../Util/config';

const initialState = {
    profile:{},
    postProfile:{}
}

const ProfileReducer = createSlice({
  name: "ProfileReducer",
  initialState,
  reducers: {
    getProfile:(state,action)=>{
        state.profile=action.payload
    },
    updateProfile:(state,action)=>{
        state.postProfile=action.payload
    }
  }
});

export const {getProfile,updateProfile} = ProfileReducer.actions

export default ProfileReducer.reducer
export const getProfileApi=()=>{
    return async(dispatch)=>{
        const res = await http.post(`/api/Users/getProfile`)
        const action=getProfile(res.data.content)
        dispatch(action)
    }
}

export const updateProfileApi=(data)=>{
    return async(dispatch)=>{
        const res = await http.post(`/api/Users/updateProfile`,data)
        const action=updateProfile(res.data.content)
        dispatch(action)
    }
}
