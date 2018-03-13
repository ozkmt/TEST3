var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require('body-parser')
var db = require('../models/db.js')
var md5 = require('../models/md5.js')
var User = require('../models/user.js')
const crypto = require('crypto');


//注册
exports.doRegister=function (req, res) {
     var user = new User({
        username:req.body.username,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        school:req.body.school,
        major:req.body.major
    });

console.log("1111111");
    // var md5 = crypto.createHash('md5');
    // req.body.password = md5.update(req.body['password']).digest('base64');  //加密后的值
    user.save(function (err) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            req.session.login = "1";//1代表这个人是注册成功的
            req.session.username = req.body.username;
            req.session.sid = req.body.phone;
            res.json(req.body);
        }
    });
};

//登录
exports.dologin=function (req, res) {

    User.find({phone: req.body.phone}, function (err, result) {
        if (err)
            console.log(err);       
       // var md5 = crypto.createHash('md5');
        // var originpassword = md5.update(req.body.password).digest('base64')
        if (result.length == 0) {
            res.json({"result": 0}); 
            return
        }
         console.log(req.body);
        if (result[0].password == req.body.password) {
               
                var username = result[0].username
                var phone = result[0].phone
            req.session.username = username;
            req.session.sid = phone;
            req.session.login = "1";
            res.json({"result": 1,'username':username,'sid':phone});
             console.log("aqqqqq"+username+"asd");
            //console.log(req.session);
        } else {
            res.json({"result": 2});
        }
    })
};

//返回用户Id与Name
app.post("/users/users", sess);
function sess(req, res, next) {
    if (req.session.login == "1") {
        //console.log('进来了显示页面');
        var username = req.session.username;
        var login = req.session.login;
        var sid = req.session.sid;
        res.send({"result": 1,'username': username, 'sid': sid});
    } else {
        res.json({"result": 0});
    }
}