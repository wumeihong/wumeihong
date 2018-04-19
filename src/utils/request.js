import Vue from 'vue'
import axios from 'axios'
//创建一个新的实例
    
axios.defaults.baseURL = "http://localhost:9000"
let instance = axios.create({
    headers:{
        "plantform":"PC"
    }
})
//请求拦截
instance.interceptors.request.use((config)=>{
    //console.log(config)
    return config
},(err)=>{
    return Promise.reject(err)
})
//响应拦截
instance.interceptors.response.use((response)=>{
    if(response.status==200){
        return response.data
        console.log(response.data)
    }else{
        return Promise.reject({
            status:response.status
        })
    }
},(err)=>{
    return Promise.reject(err)
})
Object.defineProperty(Vue.prototype,"$http",{
   value:instance
})
export default instance

export function login(loginInfo){
    return new Promise((resolve,reject)=>{
        instance.post("/dsp-admin/user/login",loginInfo).then(res=>{
            console.log(res)
           resolve(res)
        })
    })
    
}