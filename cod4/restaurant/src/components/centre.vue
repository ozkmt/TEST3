<template>
    <div id="subscibers">
       <mt-header class="head" fixed title="关注">
            <router-link to="/index" slot="left">
               <mt-button class="goback2" ><img src="../assets/goback2.png"></mt-button>
             </router-link>
        </mt-header>
        
        <ul class="subsLIst">
            <li v-for="item in items">
                <router-link to="/personalZoom">
                <el-row>
                    <el-col :span="4" class="headIcon">
                        <div><img src="../assets/headicon.jpg"></div>
                    </el-col>
                    <el-col :span="20"class="info">
                        <div class="name">{{item.nicheng}}</div>
                        <div class="sInfo">
                            <span>{{item.job}}</span>
                            <span>{{item.school}}</span>
                        </div>
                    </el-col>
                </el-row>
                </router-link>
            </li>
        </ul>
        
    </div>
</template>
<script>

    export default {
       name: 'page-navbar',
        data () {
            return {
               
                items:[
                    {
                        picture:'./src/assets/01.png',
                        nicheng:'Wing',
                        job:'学生',
                        school:'广州大学华软软件学院'
                    },
                     {
                        picture:'./src/assets/03.png',
                        nicheng:'songjie',
                        job:'学生',
                        school:'广州大学华软软件学院'
                    },
                    {
                        picture:'./src/assets/02.jpg',
                        nicheng:'gaoweiting',
                        job:'老师',
                        school:'广州大学华软软件学院'
                    },
                    {
                        picture:'./src/assets/06.jpg',
                        nicheng:'Wing',
                        job:'学生',
                        school:'广州大学华软软件学院'
                    }
                ]
               
                
            }
        },
        computed:{
           
        },
      
        methods:{
            
        }

    }
</script>
<style>
    #subscibers ul {
        list-style: none;
        padding-left: 0%;
    }
    #subscibers{
        background: #ffffff
    }
    #subscibers ul {
        padding-top: 2%;
        width: 100%;
    }
    #subscibers li {
        margin: 0;
        padding-bottom: 2%;
        padding-top: 2%;
        padding-left: 4%;
        width: 100%;
        border-bottom: 1px solid #e3e3e3;
    }
#subscibers .head{ 
    background: #8fbfff;
    font-size: 120%;
     box-shadow: -5px 5px 20px #bad6fe
    }
    #subscibers .subsLIst{
        margin-top: 10%;
    }
    #subscibers .subsLIst .el-row{
        text-align: left;
    }
    #subscibers .headIcon img{
        width: 55px;
        height: 55px;
        border-radius:50%;
    }
    #subscibers .subsLIst .el-col div{
        width: 100%;
    }
    #subscibers .name{
        color: #3287fe;
        font-size: 110%;
        padding-top:2%;
    }
    #subscibers .sInfo{
        padding-top: 2%;
    }
    #subscibers .sInfo span{
        font-size: 75%;
        color:#bababa;
        margin-left: 1%;
    }
    #subscibers .goback2 img{
     width: 20px;
     height: 17px;
   }
</style>