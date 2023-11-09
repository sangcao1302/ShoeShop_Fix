import  axios  from 'axios'
import {history} from "../index"
export const DOMAIN = "https://shop.cyberlearn.vn"
export const USER_LOGIN='userLogin'
export const TOKEN='accessToken'
export const TOKEN_CYBERSOFT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjI0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMDc4NDAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNzAwOTMxNjAwfQ.CnONd8cRnUWM4v5GIMD0mazwJUj4QugQ31-2UBFPlsw'


export const http=axios.create({
    baseURL:DOMAIN,
    timeout:30000
})
export const{saveStorageJson,getStorageJson,clearStorgaeJson}={
    saveStorageJson:(name,data)=>{
        const string=JSON.stringify(data);
        localStorage.setItem(name,string)
    },
    getStorageJson:(name)=>{
        if(localStorage.getItem(name)){
            const data=JSON.parse(localStorage.getItem(name));
            return data
        }
        return []
    },
    clearStorgaeJson:(name)=>{
        localStorage.removeItem(name)
    }
}
http.interceptors.request.use((config)=>{
    config.headers={...config.headers}
    let token=getStorageJson(USER_LOGIN)?.accessToken;
    config.headers.Authorization=`Bearer ${token}`;
    config.headers.Authentication=TOKEN_CYBERSOFT;
    return config
},(err)=>{
    return Promise.reject(err)
})
http.interceptors.response.use((res)=>{
    return res
},(err)=>{
    if(err.response?.status===401){
        alert('Đăng nhập để vào trang này !');
        history.push("/login")
    }
    return Promise.reject(err)
})