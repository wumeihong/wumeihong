 const express = require('express')
 const bodyParser = require("body-parser")
 const app =express()
 const api = require('./api')
 express.static('./')
 app.use(bodyParser.json())//在这里挂一下 接收前端返回的数据
//设置跨域
 app.all('*',function(req,res,next){
     res.header('Access-Control-Allow-Origin','*')
     res.header('Access-Control-Allow-Headers',"content-type,Token,plantform")
     res.header('Content-Type',"application/json;charset=utf-8")
     
     next()
 })
//启动接口
 api(app)

 app.listen(9000,function(){
     console.log('server listen 9000')
 })