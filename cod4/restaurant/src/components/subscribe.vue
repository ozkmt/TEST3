<template>
    <div id="subscribe">
        <mt-popup class="pop" v-model="popupVisible" position="left" popup-transition="popup-slide-left">
                <div style="z-index:545466545" @click="close()">
                <el-row>
                        <el-col :span="7" class="headIcon">
                                <div><img src="../assets/headicon.jpg"></div>
                            </el-col>
                            <el-col :span="15"class="info">
                                <div class="name">Wing</div>
                                <div class="sInfo">
                                    广州大学华软软件学院
                                </div>
                            </el-col>
                    </el-row>
                    <ul class="popIcon">
                        <router-link to="/personalZoom">
                        <li class="icon1"><img src="../assets/icon01.png"><div>个人中心</div></li>
                        </router-link>
                        <router-link to="/centre">
                        <li class="icon2"><img src="../assets/icon02.png"><div>我关注的</div></li>
                        </router-link>
                        <router-link to="/personalData">
                        <li class="icon3"><img src="../assets/icon03.png"><div>修改资料</div></li>
                        </router-link>
                        <router-link to="/">
                        <li style="margin-top:125%;" class="icon4"><img src="../assets/icon04.png"><div>退出登录</div></li>
                        </router-link>
                    </ul>
                </div>
                </mt-popup>
        <mt-header  class="find" fixed title="">
                <mt-button slot="right" style="font-size:300%; padding-bottom:5%;" @click="showP">+</mt-button>
                <div class="left" slot="left"  @click="popupVisible=true">
                    <slot><img src="../assets/more.png"></slot>
                </div>
        </mt-header>
        <img style="position:fixed; z-index:71;width:15px;height:15px;left:58%;margin-top:12px;" src="../assets/select.png">
 
<tabbar></tabbar>
            <div class="content">
                <div class="leftBG">
                </div>
                <div class="item" v-for="todo in todos" >
                    <div class="date">
                        今天
                    </div>
                        <div class="itemInfo">
                            <div class="authorInfo">
                               <div class="headIcon">
                                   <img :src="todo.pic">
                               </div>
                               <div class="name">
                                    <p class="nickName">{{todo.name}}</p>
                                    <p class="shcool">广州中山路</p>
                              </div>
                            </div>
                            <div class="itemPic">
                                <img :src="todo.cover">
                            </div>
                            <div class="title">this is a title of my work!!</div>
                            <div class="icons">
                                <img src="../assets/contain/like.png"><span>369</span>
                                <img src="../assets/contain/message.png"><span>233</span>
                            </div>
                            <div class="dividerLine"></div>
                        </div>
                </div>
                
            </div>
    </div>
</template>
<script>
 import tabbar from './tabbar.vue'
 export default {
     components:{tabbar},
        data () {
            return {
                 popupVisible:false,
                 selected: 'B',
            options: [
                { text: '故事', value: 'A' },
                { text: '推荐', value: 'B' },
                { text: '饭堂', value: 'C' }
            ],
                todos:[
                    {
                        pic:"./src/assets/headicon.jpg",
                        name:"NANA",
                        title:"",
                        cover:"./src/assets/cs11.jpg"
                    },
                    {
                        pic:"./src/assets/h07.jpg",
                        name:"lym",
                        title:"",
                        cover:"./src/assets/cs11.jpg"
                    },
                 
                ]
            }
        },
        computed:{
           
        },
      
        methods:{
            showP(){
                this.$store.commit('showDiv');
            },
            close(){
               this.popupVisible=false;
            },
            selectedType(){
           if(this.selected=="B"){
                 this.$router.push({path:'/subscribe'});
            }else if(this.selected=="C"){
                  this.$router.push({path:'./inspiration'});
            }else{
                this.$router.push({path:'/index'});
            }	
            },
            back(){
                 this.$router.push({path:'/index'})
            }
        }

    }
</script>
<style>
    #subscribe .find h1{
        font-size: 140%;
    }
    #subscribe .find{
        background: darkorange;
        box-shadow: -3px 3px 20px darkorange;
        z-index: 70;
    }
    #subscribe .left img{
        margin-top: 5%;
        width: 20px;
        height:20px;
    }
            #subscribe{
                margin: 0;
                padding: 0
            }
            #subscribe .content{
                background: #fafbfd;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 1000px;
                z-index: -988
            }
            #subscribe .content .leftBG{
                background: #e0e7f1;
                position: absolute;
                left: 0;
                top:0;
                width: 16%;
                height: 1260px;
               
            }
            #subscribe .content .item{
                margin-top:15%; 
                position: relative;
                left: 0;
                z-index: 999;
                width: 100%;
                margin-left: 0%;
            }
            #subscribe .date{
                font-weight: bold;
                font-family: 黑体;
                float: left;
                margin-left: 2%;
                width: 30px;
            }
            #subscribe .itemInfo{
                width: 100%;
                float: left;
                
            }
            #subscribe .itemInfo .headIcon{
                margin-left: 10%;
                float: left;
                width: 50px;
                height: 50px;

                border-radius:50%;
                -moz-border-radius: 50%;
                -webkit-border-radius: 50%;
                overflow: hidden;   
            }
            #subscribe .itemInfo .headIcon img{
                width: 50px;
                height: 50px;
            }
            #subscribe .itemInfo .name{
                padding-left: 24%;
                margin-top: 0%;
                width: 100%;
            }
            #subscribe .itemInfo .itemPic{
                background: yellow;
                margin-left: 18%;
                margin-top: 5%;
                width: 70%;
                height: 150px;
                overflow: hidden
            }
             #subscribe .itemInfo .itemPic img{
                 width: 100%;
                 height: 150px;
             }
            #subscribe .itemInfo .name .nickName{
                color: darkorange;
                font-size: 120%;
            }
            #subscribe .itemInfo .name .shcool{
                color: #8b8b8b;
                font-size: 90%;
            }
            #subscribe .itemInfo .title{
                color: #8b8b8b;
                font-size: 85%;
                margin-top: 2%;
                margin-bottom: 1%;
                padding-left: 25%;
            }
            #subscribe .itemInfo .icons{
                color: #8b8b8b;
                padding-left: 25%;
                font-size: 85%;
                
            }
            #subscribe .itemInfo .icons img{
               
                width: 20px;
                height: 20px;
            }
            #subscribe .itemInfo .icons span{
               font-size: 50%;
            }
            #subscribe .itemInfo .dividerLine{
               width: 86%;
               border-bottom:1px solid #dadada;
               padding-left: 16%;
               margin-top: 2%;
            }
            #subscribe .pop{
        width: 62%;
        left:6%;
        top:10%;
        position: absolute;
        background: #e5e6e8;
    }
       #subscribe .info{
        padding-left: 5%;
    }
    #subscribe .name{
        
        color: darkorange;
        font-size: 150%;
        padding-top:2%;
    }
    #subscribe .sInfo{
        color: #606060;
        width: 100%;
        font-size: 90%;
        padding-top: 2%;
    }
#subscribe .pop{
        
        width: 62%;
        left:3%;
        margin-top: 340px;
        position: fixed;
        background: #e5e6e8;
        height: 750px;   
    }
       
#subscribe .v-modal{
    overflow: hidden;
    top: 0%;
    height: 740px;
    position: fixed;
    filter:alpha(opacity=100);  
     -moz-opacity:1;  
    -khtml-opacity: 1;  
    opacity: 1;
    background: #e5e6e8;
    width: 70%;
    z-index: 5454546
}
#subscribe .popIcon li {
        font-weight: lighter;
        width: 100%;
        margin-top: 10%;
    }
    #subscribe .popIcon {
    width: 100%;
    padding-left: 5%;
    position: absolute;
    margin-top: 15%;
    }
    #subscribe .popIcon li div{
        padding-left: 30%;
        padding-top: 3%;
        font-size: 120%;
        color:#9fafbc
    }
     #subscribe .icon4{
        
     }
    #subscribe .pop li img{
        float: left;
        width: 40px;
        height:40px;
    }
    #subscribe .headIcon img{
        width: 65px;
        height: 65px;
        border-radius:50%;
    }
</style>