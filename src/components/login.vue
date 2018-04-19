<template>
  <div class="Login" ref="Login">
       <h1>欢迎登录</h1>
      <el-row type="flex" justify="center">
          <el-col :span="12">
              <el-form  :model="formData" ref="loginBox">
                     <el-form-item label="用户名" prop="username" :rules="userRules">
                        <el-input type="text" v-model="formData.username"></el-input>
                    </el-form-item>
                        <el-form-item label="密码" prop="password" :rules="passRules">
                        <el-input type="password" v-model="formData.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                         <el-button type="primary" @click="login">登录</el-button>       
                    </el-form-item>     
              </el-form>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import {login} from "./../utils/request"
export default {
  name:"login",
  data(){
      return {
          formData:{
               username:"",
               password:""
          },
          userRules:[
              {
                required:true,
                message:"用户名不可以省略"
              },{
                  type:"email",
                  message:"请输入正确的email格式"
              }
          ],
          passRules:[
              {
                  required:true,
                  message:"密码不能为空"
              }
          ]
         
      }
  },
  methods:{
      login(){
          this.$refs.loginBox.validate((isValid,options)=>{
              if(isValid){
                  this.$store.dispatch('getToken',{
                      data:this.formData,
                      notify:this.$notify,
                      router:this.$router
                  })
                //    login(this.username,this.password,"1221345").then(res=>{
                //         if(res.success==1){
                //             localStorage.setItem('token',res.token)
                //             this.$router.push('/home')
                //         }
                //     })
              }else{
                  this.$notify({
                      title:"错误",
                      message:"请填写正确的用户名和密码",
                      type:"warning"
                  })
              }
              
          })
         
      }
  }
}
</script>
<style  lang="less" scoped>
   .Login{
       background: skyblue;
       h1{
           height: 50px;
           line-height:50px;
           text-align: center;
           color: #fff;
       }
   }
</style>


