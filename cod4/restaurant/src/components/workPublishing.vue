<template>
    <div id="workPublishing">
        <div class="container">
            <el-row class="titleRow">
                <el-col :span="21" class="title">
                    <p>发布</p>
                </el-col>
                <el-col :span="3" class="close">
                    <img src="../assets/close.png"  @click="showP2()">
                </el-col>
            </el-row>

            <!--<el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>-->
            
        <form>

            <input style="outline:none;" placeholder="先写个标题吧~" class="wTitle" v-model="p_title">


            <div class="coverPic">
                <img src="../assets/coverIcon.png">
                 <input class="upload2" type="file" name="photo" @change="getFile($event)">
                <p>添加封面</p>
            </div>


            <!--<div class="workIntro">
                <textarea class="wIntro"  style="outline:none;" placeholder="点击编辑作品介绍" v-model="p_describe"></textarea>
            </div>-->
            
            <div class="blah">
                <p>你要说些什么呢？</p>
                <ul>
                    <li :is="item.component" v-for="(item,index) in items" v-model="item.text" @transfertype="gettype">
                    </li>
                </ul>
                
            </div>

           
                <i class="el-icon-edit" v-on:click="addp('addPic')"></i>
                
                
            

    </form>
 </div>
 <div class="bbtn">
          <el-row class="BTN">
                <el-col :span="7" class="btnP"><el-button @click="W_publish()">发布</el-button></el-col>
                
            </el-row>
 </div>
            
            
        
    </div>
</template>
<script>
import axios from 'axios';
 import { mapGetters } from 'vuex'
  import { mapState } from 'vuex'
 export default {  
        data () {
            return {
                type:"",
                p_title:'',
                p_describe:'',
                file: '',
                items:[

                ],       
            }
        },
        /*computed:{
           
        },*/
      
       computed:{
            ...mapState({
                 nowuser: state => state.nowuser,
                 p_contain: state => state.p_contain,
                 img_cover: state => state.img_cover,
                 p_contain: state => state.p_contain,
                 show: state => state.show
            })
        },
        methods:{
            showP2(){
                 this.$store.commit('showDiv');
            },
            getFile(event) {
                this.file = event.target.files[0];
                console.log(this.file);
                 event.preventDefault();
                 var formData = new FormData();
                formData.append('upImg',this.file);
                var _this = this;
                axios.post('/publish/uploadImg',formData).then(function (res) {
                   console.log(formData);
                   console.log(res.data);
                   _this.$store.commit('sendCoverImg',res.data); 
                 })
            },
            W_publish(){
                //alert(this.p_title);
                //alert(this.nowuser.nowId);
                //alert(this.nowuser.nowname)

                var formData = {};
                formData.p_title=this.p_title;
                formData.p_describe=this.p_describe;
                formData.img_cover=this.img_cover;
                formData.username=this.nowuser.nowname;
                formData.sid=this.nowuser.nowId;
                formData.p_contain=this.p_contain;
                var _this = this;
                axios.post('/publish/uploadAll',formData).then(function (res) {
                   console.log(formData);
                   console.log(res.data);
                     _this.$store.commit('cleanInfo'); 
                   alert("发布成功");
                   location.reload(true);  //新增刷新页面
                 })

            },
            gettype(msg){
                this.type=msg;
            },
            addt(component) {
                this.items.push({
                    'component': component,
                    'text':""
                }),
                console.log(this.items)
            },
             addp(component) {
                this.items.push({
                    'component' : component,
                    'text':""
                }),
                console.log(this.items)
                }
            /*back(){
                 this.$router.push({path:'/index'})*/
            }
        }
</script>
<style>
    input::-webkit-input-placeholder{ /*WebKit browsers*/
        color: #bababa;
        text-align: center;
        font: 90%;
        }
     textarea::-webkit-input-placeholder{ /*WebKit browsers*/
        color: #bababa;
        font: 90%;
        }
        textarea{
            resize: none;
            border:none;
        }
    #workPublishing{
        text-align: center;
        margin: 0;
        padding: 0
    }
    #workPublishing .container{
        
        overflow-y: scroll;
        background: #f7f7f7;
        width: 90%;
        margin: 0 auto;
        
        height:550px;
        text-align: center
    }
    #workPublishing .title{
        padding-left: 10%;
    }
    #workPublishing .title p{
        padding-top: 5%;
        font-size: 120%;
        color: darkorange;
    }
    #workPublishing .close img{
        margin-top:30%;
        width: 17px;
        height: 17px;
    }
    #workPublishing .wTitle{
        border:none;
        background: #f7f7f7;
        border-bottom: 1px solid darkorange;
        margin-top: 7%;
        width: 70%;
        text-align: center
    }
    #workPublishing .coverPic{
        position: relative;
        width: 60%;
        border:1px darkorange dashed;
        padding-top: 5%;
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
    }
     #workPublishing .coverPic img{
         width: 40px;
         height: 40px;
     }
     #workPublishing .coverPic p{
         color:darkorange;
         font-size: 85%;
         margin-top: 2%;
         margin-bottom: 5%;
         font-weight: lighter;
     }
     #workPublishing .wIntro{
         resize: none;
        border:none;
        background: #f7f7f7;
        border: 1px solid darkorange;
        margin-top: 2%;
        width: 60%;
        height: 50px;
    }
    #workPublishing .blah p{
        font-weight: bold;
        font-family: 黑体;
        font-size: 110%;
        margin-top: 4%;
        margin-left: 5%;
        text-align: left;
        color:#7d7d7d
    }
    #workPublishing .wTextarea{
        resize: none;
        border:none;
        background: #f7f7f7;
        border: 1px solid darkorange;
        margin-top: 2%;
        width: 80%;
        height: 45px;
         margin-left: auto;
        margin-right: auto;
    }
     #workPublishing .addPic{
         position: relative;
        width: 80%;
        height: 55px;
        border:1px darkorange dashed;
        padding-top: 2%;
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 2%;
     }
     #workPublishing .addPic img{
         width: 30px;
         height: 30px;
     }
     #workPublishing .addPic p{
         color:#9dc3ff;
         font-size: 80%;
         margin-top: 0%;
         margin-bottom: 5%;
         font-weight: lighter;
         text-align: center;
     }
     #workPublishing .addIcon{
         margin-top: 3%;
         margin-left: 10%;
     }
     #workPublishing .addIcon img{
         width: 30px;
         height: 27px;
     }
     #workPublishing .addIcon .el-col{  
     }
     #workPublishing .BTN{
         width: 90%;
         background: #f7f7f7;
         padding-left: 38%;
         padding-bottom: 5%;
         margin-left: 5%;
         
     }
     #workPublishing .BTN .el-col{
         padding: 5px 5px 5px 5px;
         text-align: center;
         font-size: 110%;
         
         border-radius:3px 3px 3px 3px ;
         -moz-border-radius:3px 3px 3px 3px ;
         -webkit-border-radius:3px 3px 3px 3px ;
         margin-left: 1%;
         margin-top: 10%;
     }
     #workPublishing .BTN .btnP{
         background:darkorange;
         color: #ffffff;
     }
#workPublishing .BTN .btnRV{
         color: gray;
     }
     #workPublishing .upload{
         top:30%;
         left: 30%;
         position: absolute;
         height: 55px;
         width: 90%;
          outline: none;
          cursor: pointer;
           filter:alpha(opacity=0);
            opacity:0; 
            cursor: pointer 
     }
     #workPublishing .upload2{
         top:30%;
         left: 30%;
         position: absolute;
         height: 55px;
         width: 90%;
          outline: none;
          cursor: pointer;
           filter:alpha(opacity=0);
            opacity:0; 
            cursor: pointer 
     }
     .el-button{
         padding: 0;
         color: white;
         background:darkorange;
         border: none;
     }
</style>
