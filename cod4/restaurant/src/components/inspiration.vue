<template>
    
    <div  id="inspiration">
        <div class="dialog" v-bind:class="{'dialog2':show}"><workPublishing></workPublishing></div>
                <mt-popup class="pop" v-model="popupVisible" position="left" popup-transition="popup-slide-left">
                <div @click="close()">
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
                        <li style="margin-top:140%;" class="icon4"><img src="../assets/icon04.png"><div>退出登录</div></li>
                        </router-link>
                    </ul>
                </div>
                </mt-popup>

<div class="select">
        <select v-model="selected"  @change="selectedType()" >
            <option v-for="option in options" v-bind:value="option.value"  >
                {{option.text}}
            </option>
         </select>
        <img style="position:fixed; z-index:71;width:15px;height:15px;left:58%;margin-top:12px;" src="../assets/select.png">
</div>
        <div>
            <mt-header  class="find" fixed title="">
                <mt-button slot="right" style="font-size:300%; padding-bottom:5%;" @click="showP">+</mt-button>
                <div class="left" slot="left"  @click="popupVisible=true">
                    <slot><img src="../assets/more.png"></slot>
                </div>
            </mt-header>
            <div class="itemsContain">
                <ul>
                    <li v-for="(Contain,index) in Contains" @click="read(index)">
                        <div class="sType">
                            <div class="type1">浏览</div>
                            <div class="type2">18</div>
                        </div>
                        <div class="label">平面</div>
                        <div class="bgGradient">
                            <p>by  {{Contain.username}} 3月8日</p>
                        </div>
                        <div class="cts">
                          <div class="coverPic"><img :src="Contain.img_cover"></div>
                            <div class="title"> {{Contain.p_title}}</div>
                            <div class="subTitle">{{Contain.p_describe}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
    import { Popup } from 'mint-ui';
     import { Toast } from 'mint-ui';
     import axios from 'axios';
     import { mapGetters } from 'vuex'
     import { mapState } from 'vuex'
    // import { mapGetters } from 'vuex'
    // import { mapState } from 'vuex'
    // import { mapMutations } from 'vuex'
    // import { mapActions } from 'vuex'

    export default {
       name: 'page-navbar',
    
        data () {
            return {
                 selected: 'C',
            options: [
                { text: '故事', value: 'A' },
                { text: '推荐', value: 'B' },
                { text: '饭堂', value: 'C' }
            ],
                popupVisible:false,
               Contains:[
                //    {
                //        tab:'建模',
                //        cover_picture:'./src/assets/01.png',
                //        title:'YES WE OOJYDn kdkadYSd',
                //        contain:'hdsnd kdj iwud jahsu wwemc kdp jdj j didj iwud jahdj iidj iwud jwud jahsu wwem ckdp wwem ckdpjs adja dja dok'
                //    },
                //     {
                //         tab:'平面',
                //       cover_picture:'./src/assets/03.png',
                //        title:'YES WE OOJYDn kdkadYSd',
                //        contain:'hdsnd kdj iwud jahsu wwemckdp jdj dijs adjadja dok'
                //    },
                //     {
                //         tab:'原画',
                //       cover_picture:'./src/assets/06.jpg',
                //        title:'YES WE OOJYDn kdkadYSd',
                //        contain:'hdsnd kdj iwud jahsu wwemckdp jdj dijs adjadja dok'
                //    },
                //     {
                //         tab:'摄影',
                //       cover_picture:'./src/assets/04.jpg',
                //        title:'YES WE OOJYDn kdkadYSd',
                //        contain:'hdsnd kdj iwud jahsu wwemckdp jdj dijs adjadja dok'
                //    }
               ]
                
            }
        },
        computed:{
            ...mapState({
                 show: state => state.show
            })
        },
        mounted:function(){
			var _this=this;      
			axios.post("/publish/readAll").then(function(res){
				_this.Contains=res.data;      
				console.log(res.data); 
			});	
		},
  
        methods:{
            selectedType(){
           if(this.selected=="B"){
                 this.$router.push({path:'/subscribe'});
            }else if(this.selected=="C"){
                  this.$router.push({path:'./inspiration'});
            }else{
                this.$router.push({path:'/index'});
            }	
            },
            read(index){
                console.log(index,this.Contains[index]._id);
                this.$router.push({path:'index_contain',query:{p_id:this.Contains[index]._id}})
            },
            showP(){
                this.$store.commit('showDiv');
            },
            close(){
               this.popupVisible=false;
            }   
                
        }

    }
</script>
<style>
    elect::-ms-expand { display: none; }
  #inspiration .find h1{
        font-size: 140%;
    }
    #inspiration .find{
        background: darkorange;
        box-shadow: -3px 3px 20px darkorange;
        z-index: 70;
    }
    #inspiration .left img{
        margin-top: 5%;
        width: 20px;
        height:20px;
    }
     #inspiration .bgGradient{
         background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));
         position: absolute;
         z-index: 55;
         height: 40px;
         top:55%;
         width: 90%;
     }
     #inspiration .bgGradient  p{
         font-weight: lighter;
         font-size: 50%;
         color:#e3e3e3;
         padding-top: 5%;
         padding-left: 3%;
     }
    #inspiration .itemsContain li{
        position: relative;
        padding-left: 5%;
        width: 100%;
        margin-top: 3%;
        
    }
#inspiration .itemsContain ul{
        list-style-type: none;
       padding-top: 10%;
        padding-left:0;
        overflow: hidden
}
    #inspiration .itemsContain .label{
        font-size: 15px;
        top:30px;
        z-index: 50;
        margin-left: -3%;
        width:15%;
        position: absolute;
        background: red;
        padding:1.5% 2% 1.2% 2%;
        color:white;
    }
    #inspiration .itemsContain .sType{
        padding: 0;
        text-align: center;
        right:8%;
        z-index: 50;
        margin-left: -3%;
        width:15%;
        position: absolute;
        color:white;
    }
    #inspiration .type1{
        padding: 3% 1% 3% 1%;
        font-size:110%;
    }
    #inspiration .type2{
        font-size:90%;
        border-radius: 0 0  6px 6px;
    }
    #inspiration .itemsContain .sType div{
        margin-bottom: 2%;
        background: rgba(0,0,0,0.5)
    }
    #inspiration .itemsContain .cts{
        height: 260px;
        width: 95%;
        border:1px solid #c7c7c7;
        position:relative;
        top:8%;
        box-shadow: -3px 3px 20px #bababa
    }
    #inspiration .itemsContain .coverPic{
        width: 100%;
        height: 180px;
        background: yellow;
        overflow: hidden;
    }
    #inspiration .itemsContain .coverPic img{
        width: 100%;
        height:180%;
    }
    #inspiration .itemsContain .title{
        padding: 3% 0  1% 3.5%;
        font-size: 110%;
        font-weight: bold;
        color: #606060
    }
    #inspiration .itemsContain .subTitle{
        height: 12%;
        padding: 0% 5%  0% 3.5%;
        color:#bababa;
        font-size: 90%;
        word-break: break-all;
        overflow: hidden;
    }
    #inspiration .headIcon img{
        width: 65px;
        height: 65px;
        border-radius:50%;
    }
    #inspiration .info{
        padding-left: 5%;
    }
    #inspiration .name{
        
        color: #3287fe;
        font-size: 150%;
        padding-top:2%;
    }
    #inspiration .sInfo{
        color: #606060;
        width: 100%;
        font-size: 90%;
        padding-top: 2%;
    }
    #inspiration .pop{
        
        width: 62%;
        left:3%;
        margin-top: 18%;
        position: fixed;
        background: #e5e6e8;
        height: 750px;  
    }
       
#inspiration .v-modal{
    right: 0px;
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
#inspiration .popIcon {
    width: 100%;
    padding-left: 5%;
    position: absolute;
    margin-top: 15%;
    }
    #inspiration .popIcon li {
        font-weight: lighter;
        width: 100%;
        margin-top: 10%;
    }
    #inspiration .popIcon li div{
        padding-left: 30%;
        padding-top: 3%;
        font-size: 120%;
        color:#9fafbc
    }
     #inspiration .icon4{
         
     }
    #inspiration .pop li img{
        float: left;
        width: 40px;
        height:40px;
    }
    #inspiration .icon2{margin-top:50%;}
    .dialog{
        padding-top: 15%;
        z-index: 1000;
        width: 100%;
        position: fixed;
        background:rgba(0,0,0,0.5);
        top:0px;
        height: 800px;
        filter:alpha(opacity=20);  
    }
    .dialog2{
        display: none; 
    }
  select{
      outline:none;
      color: #e5e6e8;;
      padding-left: 8%;
        position: fixed;
        z-index: 1212131132123;
        margin-left: 35%;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 180%;
        background: rgba(0,0,0,0);
        border:none
    }
    .select option{
        color: gray;
        font-size: 70%;
        outline:none;
        width: 10px;
        padding-left: -50%;
        border:none;
    }
    .option{
                outline:none;

    }
</style>
