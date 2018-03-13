<template>
    <div id="personalZoom">
        <mt-header  class="find" fixed >
             <div class="left" slot="left"  @click="popupVisible=true">
                    <slot><router-link to="/index"><img src="../assets/goback2.png"></router-link></slot>
                </div>
        </mt-header>
        <div class="topBG"></div>
        <div class="bottomBG"></div>
        <div class="info">
            <img class="headIcon" src="../assets/headicon.jpg">
            <div class="nickName">
                <span class="name">NANA</span><span class="sex"><img src="../assets/female.jpg" class="sex"></span>
                <p class="intro">这个家伙懒死了，什么都没写。</p>
       </div>
            <div class="wsf">
                <div><p class="T">369</p><p class="data">作品</p></div>
                <div><p class="T">233</p><p class="data">关注</p></div>
                <div><p class="T">666</p><p class="data">粉丝</p></div>
            </div>
        </div>


        <div class="info2">
            <div>
                <img src="../assets/ocp.png" class="ocp"><br>
                <img src="../assets/loc.png" class="loc">
            </div>
            <div><p>学生</p><p>东京</p></div>
            <div class="btn">关注</div>
        </div>


        <div class="works">
            <el-row >
                <el-col :span="16"><div class="worksL">文章</div></el-col>
                <el-col :span="8"><div class="worksR">>></div></el-col>
           </el-row>
           <el-row  class="worksLine1">
                 <el-col :span="8">
                     <img class="cover"  src="../assets/work1.jpg">
                     <p>this is a title!!</p>
                     <el-row class="icon">
                         <el-col :span="12"><img  src="../assets/like.png">233</el-col>
                         <el-col :span="12"><img  src="../assets/message.png">369</el-col>
                     </el-row>
                 </el-col>
                 <el-col :span="8">
                     <img class="cover" src="../assets/work2.jpg">
                     <p>this is a title!!</p>
                     <el-row class="icon">
                         <el-col :span="12"><img  src="../assets/like.png">233</el-col>
                         <el-col :span="12"><img  src="../assets/message.png">369</el-col>
                     </el-row>
                 </el-col>
                 <el-col :span="8">
                     <img  class="cover" src="../assets/work3.jpg">
                     <p>this is a title!!</p>
                     <el-row class="icon">
                         <el-col :span="12"><img  src="../assets/like.png">233</el-col>
                         <el-col :span="12"><img  src="../assets/message.png">369</el-col>
                     </el-row>
                 </el-col>
           </el-row>
           <el-row  class="worksLine2">
                 <el-col :span="8">
                     <img class="cover" src="../assets/work1.jpg">
                     <p>this is a title!!</p>
                     <el-row class="icon">
                         <el-col :span="12"><img  src="../assets/like.png">233</el-col>
                         <el-col :span="12"><img  src="../assets/message.png">369</el-col>
                     </el-row>
                 </el-col>
                 <el-col :span="8">
                     <img class="cover" src="../assets/work2.jpg">
                     <p>this is a title!!</p>
                     <el-row class="icon">
                         <el-col :span="12"><img  src="../assets/like.png">233</el-col>
                         <el-col :span="12"><img  src="../assets/message.png">369</el-col>
                     </el-row>
                 </el-col>
                 <el-col :span="8">
                     <img class="cover" src="../assets/work3.jpg">
                     <p>this is a title!!</p>
                     <el-row class="icon">
                         <el-col :span="12"><img  src="../assets/like.png">233</el-col>
                         <el-col :span="12"><img  src="../assets/message.png">369</el-col>
                     </el-row>
                 </el-col>
           </el-row>
        </div>
<!--
        
        <div class="collections">
            <el-row >
                <el-col :span="16"><div class="worksL">收藏</div></el-col>
                <el-col :span="8"><div class="worksR">>></div></el-col>
           </el-row>
           <el-row class="folder">
                <el-col :span="8"><div>1</div></el-col>
                <el-col :span="8"><div>2</div></el-col>
                <el-col :span="8"><div>3</div></el-col>
           </el-row>
           
        </div>-->
    </div>
</template>
<script>
 export default {
        data () {
            return {     


            }
        },
        computed:{
           
        },
      
        methods:{
            back(){
                 this.$router.push({path:'/index'})
            }
        }

    }
</script>
<style>
    #personalZoom .left img{
        margin-left: 5%;
        margin-top: 5%;
        width: 20px;
        height:20px;
    }
    #personalZoom .find{
        background-color:  rgba(0, 0, 0, 0.0);
        z-index:15;
    }
    #personalZoom{
        
    }
    #personalZoom .topBG{
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 20%;
        background: darkorange;
        top:0
    }
    #personalZoom .bottomBG{
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #edf4ff;

    }
     #personalZoom .info{
         height: 177px;
         position: absolute;
         z-index: 3;
         width: 95%;
         background: white;
         margin-left: 50%;
         left: -47.5%;
         top:95px;
          border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -5px 5px 20px #bad6fe
     }
     #personalZoom .info2{
         position: absolute;
         z-index: 3;
         width: 95%;
         height: 85px;
         background: white;
         margin-left: 50%;
         left: -47.5%;
         top:290px;
          border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -5px 5px 15px darkorange
     }
     #personalZoom .works{
         position: absolute;
         z-index: 3;
         width: 95%;
         height: 295px;
         background: white;
         margin-left: 50%;
         left: -47.5%;
         top:390px;
          border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -5px 5px 15px darkorange
     }
     #personalZoom .collections{
         position: absolute;
         z-index: 3;
         width: 95%;
         height: 30%;
         background: white;
         margin-left: 50%;
         left: -47.5%;
         top:99%;
          border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -5px 5px 15px darkorange
     }
     #personalZoom .headIcon{
         position: absolute;
         z-index: 4;
         width: 80px;
         height: 80px;
         margin-left: 50%;
         left: -35px;
         top:-20%;
         border-radius:50%;
         -moz-border-radius: 50%;
         -webkit-border-radius: 50%;
         border:white 4px solid;
     }
     #personalZoom .nickName{
         padding-top: 45px;
         text-align: center;
         height: 100px;
     }
     #personalZoom .nickName .name{ 
         font-size: 150%;
         color: darkorange;
         
     }
     #personalZoom .nickName .intro{
         padding-top: 1%;
         font-size: 110%;
         color: #bababa;
         font-weight:lighter;
     }
     #personalZoom .nickName .sex{
         width: 15px;
         height: 20px;
         margin-left: 5px;
     }
     #personalZoom .wsf{
     }
     #personalZoom .wsf div{
         width: 30%;
         float: left;
         margin-left: 2.3%;
         text-align: center;
         padding-top:10px;
     }
     #personalZoom .wsf div .T{
         font-size: 150%;
     }
     #personalZoom .wsf div .data{
         font-size: 90%;
         color: #bababa
     }
     #personalZoom .info2{
         padding-left: 5%;
         padding-top: 10px;
     }
     #personalZoom .ocp{
         width: 30px;
         height: 20px;
     }
     #personalZoom .loc{
         width: 30px;
         height: 30px;
     }
      #personalZoom .info2 div{
         float: left;
     } 
     #personalZoom .info2 img{
         margin-top: 20%;
     } 
      #personalZoom .info2 div p{
          padding-left: 10%;
          padding-top: 0%;
          width: 150%;
          font-size: 90%;
          color: #bababa;
          line-height: 250%;
          
      }
      #personalZoom .info2  .btn{
          text-align: center;
          line-height: 15px;
          color:#ffffff;
          position: absolute;
          background: darkorange;
          right: 5%;
          width: 60px;
          height: 25px;
          border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -3px 3px 15px darkorange
      }
      #personalZoom .worksL{
          border-left: 2px solid darkorange;
          margin-top: 5%;
          margin-left: 5%;
          padding-left: 3%;
          text-align: left;
          color:darkorange;
          font-size: 110%;
      }
      #personalZoom .worksR{
          margin-top: 5%;
          padding-right: 20%;
          text-align: right;
          color:darkorange;
          font-size: 110%;
      }
      #personalZoom .worksLine1 .el-col{
          margin-top:0%;

          padding-top: 2%;
          padding-left: 2%;
          padding-right: 2%;
      }
       #personalZoom .worksLine2 .el-col{
          margin-top:0%;
          padding-top: 1%;
          padding-left: 2%;
      }
      #personalZoom .worksLine1{
          padding-right: 2%;
      }
      #personalZoom .worksLine2{
          padding-right: 2%;
      }
      #personalZoom .worksLine1 .cover{
          width: 100%;
          height: 80px; 
          border-radius:8px 8px 8px 8px ;
         -moz-border-radius: 8px 8px 8px 8px ;
         -webkit-border-radius:8px 8px 8px 8px ;
      }
    
      #personalZoom .worksLine2 .cover{
          width: 100%;
          height: 80px; 
          border-radius:8px 8px 8px 8px ;
         -moz-border-radius: 8px 8px 8px 8px ;
         -webkit-border-radius:8px 8px 8px 8px ;
      }
       #personalZoom .worksLine1 p{
           font-size: 65%;
           text-align: left;
           color:darkorange;
       }
       #personalZoom .worksLine2 p{
           font-size: 65%;
           text-align: left;
           color:darkorange;
       }
      #personalZoom .icon img{
          margin-right: 10%;
           height:12px;
           width: 18px;
       }
       #personalZoom .icon{
           font-size: 10%;
           color:#bababa
       }
       #personalZoom .folder .el-col{
           background: red;
           
       }

</style>