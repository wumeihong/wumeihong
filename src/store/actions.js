import {login} from '../utils/request'
let actions = {
    getToken({commit},{data,notify,router}){
        console.log(data)
        login(data).then((res)=>{
            if(res.success == 0){
                commit('saveToken',res.token);
                commit('saveUser',res.user.name)
                localStorage.setItem('token',res.token)
                notify({
                    title:"登录成功",
                    message:"跳转首页",
                    type:"success"
                })
                setTimeout(()=>{
                    router.push({
                        path:"/home"
                    })
                },1000)
            }else{
                notify({
                    title:"登录出错",
                    message:"用户名和密码出错",
                    type:"error"
                })
            }
            

        })

    }
}

export default actions