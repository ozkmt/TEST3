<template>
    <div id="public">
        <mt-header  class="find" fixed >
             <div class="left" slot="left"   @click="back">
                    <slot><img src="../assets/goback2.png"></slot>
                </div>
        </mt-header>
        <div class="public_top">
            <div class="cover"> 
                <img :src="cover_picture">
            </div>  
            
            <div class="asd"></div> 
            <div class="head"><img src="../assets/headicon.jpg"></div>
            <div class="author">{{author}} | {{time}}</div>      
        </div>
        <p class="public_title" ><h3>{{title}}</h3></p>
        <div class="public_describe">{{describe}}</div>

            <div v-for="public in Publics" class="public_contain">
                <div class="contain_img"> 
                    <img :src="public.p_img">
                </div>
                <div class="contain_text">{{public.p_text}}</div>
            </div>

             <ul class="subsLIst">
            <li v-for="item in commentItems">
                <router-link to="/personalZoom">
                <el-row>
                    <el-col :span="3" class="headIcon">
                        <div><img src="../assets/headicon.jpg"></div>
                    </el-col>
                    <el-col :span="20"class="info">
                        <div class="name">{{item.c_username}}</div>
                        <div class="sInfo">
                            <span>{{time}}</span>
                        </div>
                    </el-col>
                </el-row>
                </router-link>
                <div class="cText">{{item.comment_contain}}</div>
            </li>
        </ul>
         <mt-popup class="popup" v-model="popupVisible" position="bottom" popup-transition="popup-fade">
            <div class="width:100%;">
                <textarea style="outline:none; float:left" placeholder="编辑评论" v-model="p_comment"></textarea>
                <div class="sendC" @click="sendComment()">发表</div>
            </div>
        </mt-popup>
        <footer class="operation">
            <div class="like" @click="countZan()"><i class="el-icon-star-on"></i><span>{{p_zan}}</span></div>
            <div class="remark" @click="addComment(p_id)"><i class="el-icon-edit"></i><span></span></div>
            <div class="collect"><i class="el-icon-share"></i></div>
        </footer>
    </div>
</template>
<script>
import axios from 'axios';
 import { mapGetters } from 'vuex'
 import { mapState } from 'vuex'
 export default {
        data () {
            return {
                popupVisible:false,
                 commentItems:[],
                 time:'',
                cover_picture:'',
                title:'',
                author:'',

                describe:'',
                p_zan:0,
                addzan:0,
                isZan:false,
                p_comment:'',
                p_id:'',
                Publics:[]
                
            }
        },
         computed:{
            ...mapState({
                 nowuser: state => state.nowuser
            })
        },
        mounted:function(){
			this.readContain();
		},
      
        methods:{
            back(){
                 this.$router.push({path:'/index'});    
            },
            readContain(){
                var _this=this;      
			axios.post("/publish/readAll").then(function(res){
			var Contain=res.data; 
           //* alert(res.data.username)     
                 _this.p_id=_this.$route.query.p_id;
                console.log(_this.p_id);
				console.log(Contain); 
                for(var i=0;i<Contain.length;i++){
                    if(Contain[i]._id==_this.p_id){
                       _this.cover_picture=Contain[i].img_cover;
                       _this.title=Contain[i].p_title;
                       _this.author=Contain[i].username;
                       _this.describe=Contain[i].p_describe;
                       _this.Publics=Contain[i].p_contain;  
                       _this.p_zan=Contain[i].p_zan;
                       _this.commentItems=Contain[i].p_comment.reverse(); ;
                       console.log("________", _this.Publics);
                                    
                    }
                }
			});			
            },
            countZan(){
                this.isZan=!this.isZan;
                if(this.isZan==true){
                   this.addzan=1;
                }else{
                   this.addzan=-1;
                };   
                var zanData={};
                zanData.p_id=this.p_id; 
                zanData.p_zan=this.addzan; 
                console.log(zanData);
                var _this=this; 
			axios.post("/publish/countZan",zanData).then(function(res){       
                _this.p_zan=res.data;
			});			
            },
            addComment(p_id){
                this.popupVisible=true;
            },
            sendComment(){
                this.popupVisible=false;
                 var commentData={};
                commentData.p_comment=this.p_comment;
                commentData.p_id=this.p_id;
                commentData.c_sid=this.nowuser.nowId;
                commentData.c_username=this.nowuser.nowname;
                console.log(commentData);
                 var _this = this;
                axios.post('/publish/countComment',commentData).then(function (res) {
                   console.log(commentData);
                   console.log(res.data);
                   alert("评论成功");
                   //_this.commentItems=res.data;
                   _this.readContain();
                });
              
            }
        }

    }
</script>
<style>
    #public .mint-popup{
        padding-top: 1.5%;
        width: 100%;
    }
    #public  input::-webkit-input-placeholder{ /*WebKit browsers*/
        color: #bababa;
        font: 90%;
        }
        #public  input{
        width: 85%;
        border: none;
        font-size: 100%;
        background: #e2e2ec;
        border-radius:8px 8px 8px 8px ;
        -moz-border-radius: 8px 8px 8px 8px ;
        -webkit-border-radius:8px 8px 8px 8px;
        margin-top: 5%;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 4%;
    }
     #public textarea{
         line-height: 12px;
         height: 35px;
         padding-top: 5px;
         border-radius: 10px 10px 10px 10px;
         margin-left:3%;
         width: 80%;
         border:1px #ccc solid;
         margin-bottom: 2%;
     }
    #public ul {
        list-style: none;
        padding-left: 0%;
        padding-top: 2%;
        width: 100%;
    }
    #public li {
        margin: 0;
        padding-bottom: 2%;
        padding-top: 2%;
        padding-left: 4%;
        width: 100%;
        border-bottom: 1px solid #e3e3e3;
    }
    
    #public .subsLIst{
        margin-top: 10%;
    }
    #public .subsLIst .el-row{
        text-align: left;
    }
    #public .headIcon {
        margin: 0;
        padding: 0;
    }
    #public .headIcon img{
        width: 40px;
        height: 40px;
        border-radius:50%;
    }
    #public .subsLIst .el-col div{
        width: 100%;
    }
    #public .name{
        color: darkorange;
        font-size: 110%;
        padding-top:1%;
        padding-left:2%;
    }
    #public .sInfo{
        padding-left:2%;
        padding-top: 1%;
        font-size: 90%;
    }
    #public .sInfo span{
        font-size: 75%;
        color:#bababa;
        margin-left: 1%;
    }
    #public .goback2 img{
     width: 20px;
     height: 17px;
   }
#public {
    top:0%;
    margin-bottom: 30px;
    background: white;
}
  #public  .public_title{
      width: 60%;
      left:20%;
       top:100px;
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        position: absolute;
        z-index: 9;
    }
   #public .back{
        position: absolute;
        z-index: 10;
        width: 20px;
        top:20px;
        left: 10px;
        color: white;
        font-size: 20px;
    }
  #public  .author{
        font-size: 13px;
        position:absolute;
        top: 200px;
        z-index: 10;
        color: white;
        text-align: left;
        margin-left:3%;
    }
     #public  .head{

         padding-left: 3%;
        font-size: 13px;
        position:absolute;
        top: 160px;
        z-index: 10;
        text-align: left;
    }
    #public  .asd{
        background-color: wheat;
        height: 100px;
        width: 100%;
        font-size: 13px;
        position:absolute;
        top: 125px;
        z-index: 10;
        color: white;
        text-align: left;
        background: linear-gradient(rgba(0,0,0,0.0),rgba(61,61,61,61.8));
    }
    #public  .head img{
        z-index: 1000;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
  #public  .public_describe{
      padding: 0;
        margin:40px 5px 20px 15px;
        text-align: left;
        height: 1px;
        overflow: hidden;
    }
 #public  .public_top{
       width: 100%;
       box-shadow: -0px 10px 25px #bababa
    }
  #public  .cover{
        width: 100%;
        height: 225px;
        overflow: hidden;
    }
      #public  .cover img{
        width: 100%;
      }
  #public  .contain_text{
        width: 100%;
        font-size: 14px;
        margin-top:5px;
        margin-bottom:5px;
    }
  #public  .public_contain{
        width: 95%;
        padding-left:5%;
    }
  #public  .contain_img{
        width: 100%;
        height: 250px;
        overflow: hidden;
    }
    #public  .contain_img img{ 
        width: 100%;
    }
  #public  .operation{
        background: white;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        box-shadow: -0px -5px 50px black
    }
    #public  .operation div {
        float: left;
        margin-top: 10px;
    }
    #public .remark{
        margin-left: 5%;
    }
     #public  .operation div span{
         color:gray;
         padding-left: 5px;
     }
    #public  .operation img{
        width: 35px;
        height: 35px;
    }
    #public .collect{
        position: absolute;
        right: 5%;
    } 
     #public .collect img{
     }
    #public .left img{
        margin-left: 5%;
        margin-top: 5%;
        width: 20px;
        height:20px;
    }
    #public .find{
        background-color:  rgba(0, 0, 0, 0.0)
    }
    #public .cText{
        font-size: 120%;
        color:gray;
        width: 80%;
        margin-left: 50px;
        margin-bottom: 20px;
    }
    #public .sendC{
        text-align: center;
        line-height: 30px;
        position: absolute;
        background: darkorange;
        color: white;
        font-size: 110%;
        width:50px;
        right: 2%;
        top:15%;
        height: 30px;
         border-radius: 5px 5px 5px 5px;
    }
</style>