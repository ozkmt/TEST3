var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require('body-parser')
var db = require('./models/db.js')
var md5 = require('./models/md5.js')
var router = require("./router/router.js");
var p_publish = require("./router/p_publish.js");

const crypto = require('crypto');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret: '1',
    resave: true,
    saveUninitialized: true
}));

//用户创建，登录，登出
app.post("/users/register", router.doRegister)//注册 
app.post("/users/login",router.dologin)//登录
app.post("/publish/uploadImg",p_publish.uploadImg)//上传图片
app.post("/publish/uploadAll",p_publish.uploadAll)//发布
app.post("/publish/readAll",p_publish.readAll)//浏览
app.post("/publish/countZan",p_publish.countZan)//点赞
app.post("/publish/countComment",p_publish.countComment)//评论

// app.post("/users/logout",router.dologout)

app.listen(8090);