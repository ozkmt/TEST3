var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require('body-parser')
var db = require('../models/db.js')
var Publish = require('../models/publish.js')
const crypto = require('crypto');
var path=require('path');
var router = express.Router();
var formidable = require('formidable');
var  fs = require('fs'),
     AVATAR_UPLOAD_FOLDER = './upload/',
    domain="http://localhost:8080",
    TITLE="uploadImg";

//上传图片
exports.uploadImg=function (req, res){
   
var form = new formidable.IncomingForm(); //创建上传表单 
form.encoding = 'utf-8'; //设置编辑  
form.uploadDir = './upload/'; //设置上传目录  
form.keepExtensions = false; //保留后缀  
 console.log("222222222222");
form.parse(req,function(err, fields, files){  
    if(err) {  
        res.send(err);  
        return;  
    }  
    console.log(fields,"-------------",files); 
    var extName = '';  //后缀名
    switch (files.upImg.type) {
      case 'image/pjpeg':
        extName = 'jpg';
        break;
      case 'image/jpeg':
        extName = 'jpg';
        break;
      case 'image/png':
        extName = 'png';
        break;
      case 'image/x-png':
        extName = 'png';
        break;
    }
     if(extName.length == 0){
      res.locals.error = '只支持png和jpg格式图片';
    //   res.render('index', { title: TITLE });
    console.log('只支持png和jpg格式图片',files);
      return;
    }
    var avatarName = Math.random() + '.' + extName;
    var newPath = form.uploadDir + avatarName; //图片写入地址；
    fs.renameSync(files.upImg.path, newPath);  //重命名
   var showPath="/../server/upload/"+avatarName;
   res.send(showPath);
 })
},
//发布表单
exports.uploadAll=function (req, res) {

    var publish=new Publish({
    p_zan:0,
    username:req.body.username,
    sid:req.body.sid,
    p_title:req.body.p_title,
    img_cover:req.body.img_cover,
    p_describe:req.body.p_describe,
    p_contain:req.body.p_contain
   })
   
   
 publish.save(function (err) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            // res.send(fields.p_contain);
            res.json(req.body);
           
        }
    });
}

//读取作品
exports.readAll=function (req, res) {
    Publish.find(function(err,result){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            
            res.json(result);
        }
    })
}
//点赞
exports.countZan=function (req, res) {

    Publish.find({_id:req.body.p_id},function(err,result){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            result[0].p_zan+=req.body.p_zan;
            update={$set:{p_zan:result[0].p_zan}};
            Publish.update({_id:req.body.p_id},update,{},function(err,docs){
                if (err) {
                    console.log("Error:" + err);
                }else{
                    console.log(result[0].p_zan);
                     res.json(result[0].p_zan);
                }
            });
            
            //res.json(result);
        }
    })
}
//评论
exports.countComment=function(req,res){
     Publish.find({_id:req.body.p_id},function(err,result){
        if (err) {
            console.log("Error:" + err);
        }else{
            var commentInfo={};
            commentInfo.c_sid=req.body.c_sid;
            commentInfo.c_username=req.body.c_username;
            commentInfo.comment_contain=req.body.p_comment;
            console.log(commentInfo);
            var p_comment=result[0].p_comment;
            update={$push:{p_comment:commentInfo}};
             Publish.update({_id:req.body.p_id},update,{},function(err,docs){
                if (err) {
                    console.log("Error:" + err);
                }else{
                    console.log(result[0].p_comment);
                     res.json(p_comment);
                }
            });
        }
     });
}