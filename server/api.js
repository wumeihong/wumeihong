const jwt = require('jsonwebtoken')
const http = require('http');
const querystring = require("querystring")
const fs = require('fs')
const _= require('lodash')
const Mock=require("mockjs")
var multer=require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now()+'.'+filename[1])
    }
})
   
var upload = multer({ storage: storage })
function queryApi(url, methods, params) {
    return new Promise((resolve,reject) => {
        let data = "";
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                //console.log(`响应主体: ${chunk}`);
                data += chunk
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if (methods.toLowerCase()=="post") {
            request.write(querystring.stringify(params))
        }
        request.end()
    })

}
module.exports = function (app) {
    //注册接口
         app.post('/user/register', function (req, res) {
            console.log(req.body)
            let user = fs.readFileSync('user.json', {encoding: "utf-8"})
            user = JSON.parse(user);
            user.push(req.body)
            fs.writeFile('user.json', JSON.stringify(user), function () {
                res.end(JSON.stringify({"success": 1, "info": "注册成功"}))
            })

        })

    //登录接口
    app.post('/dsp-admin/user/login', function (req, res) {
        let user = fs.readFileSync(__dirname + '/user.json', {encoding: "utf-8"})
        console.log(user)
        user = JSON.parse(user);
        let login = req.body
        let resInfo = {
           data:"login failed",
           msg:"登录信息有误",
           status:1

        }
        user.forEach(item => {
            if (item.username == login.username && item.password == login.password) {
                resInfo.success = 0;
                resInfo.info = "登录成功";
                resInfo.user={
                    name:user.name,
                    time:new Date().toLocaleTimeString(),
                    nickName:"吴美红"
                }
            }
        });
        if (resInfo.status == 0) {
            resInfo.token = jwt.sign(login, "1511", {expiresIn: 60*60})
        }
        res.end(JSON.stringify(resInfo))
    })

    //请求数据接口
    app.post('/user/list',(req,res)=>{
        let userlist  = fs.readFileSync(__dirname+"/list.json",{encoding: "utf-8"})
        res.json(userlist)
    })
    //请求echarts数据的接口
    app.post('/getAxisData',(req,res)=>{
        console.log(req.body)
        let data=[];
        for(var i=0;i<req.body.len;i++){
            data.push(Mock.Random.natural(1,1500))
        }
        console.log(data)
        res.end(JSON.stringify(data))
    })

     //upload 上传接口
     app.post('/dsp-creative/creative/upload',upload.single('file'),function(req,res){
         console.log(req.file)
        res.send({
            "data": {
                       "size":req.file.size,
                       "value":req.file.path,
                       "key":"2A36B67C6"
                },
            "status":0
          }
        )
    })
    //获取创意广告的内容接口
    app.post("/listdata",function(req,res){
        console.log(req.body)
        let listdata = fs.readFileSync('listdata.json',{encoding:"utf-8"})
        console.log(listdata)
        listdata=JSON.parse(listdata);
        fs.writeFileSync("listdata.json",JSON.stringify(listdata),function(){
            res.end(JSON.stringify({"success:":1,"info":"添加成功"}))
        })
    })
}