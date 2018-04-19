import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Manage from '@/components/manage'
import Number from '@/components/number'
import Creative from '@/components/creative'
import Login from '@/components/login'
import Guanggao from "@/components/guanggao"
import Wrapguang from "@/components/wrapguang"
import Plan from "@/components/plan"
import Creatives from "@/components/creatives"
import Unitone from "@/components/unitone"

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    
    {
      path:"/home",
      name:"home",
      component:Home
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/manage",
      name:"manage",
      component:Manage
    },
    {
      path:"/number",
      name:"number",
      component:Number
    },
    {
      path:"/creative",
      name:"creative",
      component:Creative
    },
    {
      path:"/guanggao",
      name:"guanggao",
      component:Guanggao
    },
    {
      path:"/wrapguang",
      name:"wrapguang",
      component:Wrapguang
    },
    {
      path:"/plan",
      name:"plan",
      component:Plan
    },
    {
      path:"/creatives",
      name:"creatives",
      component:Creatives
    },
    {
      path:"/unitone",
      name:"unitone",
      component:Unitone
    }
  ]
})
router.beforeEach((to,from,next)=>{
  let isLogin= checkLoginStatus()
  if(to.name=='login'){
      next()
  }else{
        if(!isLogin){
            next('/login')
        }else{
            next()
        }
  }
})

function checkLoginStatus(){
  let tk = localStorage.getItem('token');
  
  return !!tk
}
export default router