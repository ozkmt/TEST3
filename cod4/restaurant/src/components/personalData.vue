<template>
    <div id="personalData">
        <mt-header  class="find" fixed >
             <div class="left" slot="left"   @click="back">
                    <slot><img src="../assets/goback2.png" class=""></slot>
                </div>
        </mt-header>
        <div class="top">
            <!--<mt-cell class="cell_title" title="头像" >
                <span  class="cell_touxiang" style="color: green"><img :src="cell_touxiang"/></span>
        </mt-cell>
        <ul v-for="cell in cells">
            <mt-cell class="cell_title" :title="cell.cell_title" is-link>
                <span style="color:#000">{{cell.cell_contain}}</span>
            </mt-cell>
        </ul>-->
        <el-row class="tItem">
                <el-col :span="4"><div class="l">头像</div></el-col>
                <el-col :span="18" style="text-align:right"><div class="m"><img src="../assets/headicon.jpg"></el-col>
                <el-col :span="2" sty><div class="r">
                >
            </div></el-col>
            </el-row>
        <div class="tItem" v-for="cell in cells">
            <el-row>
                <el-col :span="4"><div class="l">{{cell.cell_title}}</div></el-col>
                <el-col :span="18" style="text-align:right"><div class="m">{{cell.cell_contain}}</el-col>
                <el-col :span="2" sty><div class="r">
                >
            </div></el-col>
            </el-row>
            
<!--            <div class="l">{{cell.cell_title}}</div>
            <div class="m"><img src="../assets/headicon.jpg"></div>
            <div class="r">
                >
            </div>-->
            
        </div>
        <!--<div class="introduction">
            <mt-field label="个性签名" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction" :value="intro"></mt-field>
        </div>-->
        <!--<mt-button type="primary" size="large">提交</mt-button>-->
    </div>
    <div class="btm" style="margin-top:20px;">
                <div style="padding-left:2%;padding-top:2%;color:gray;font-size:120%;border-bottom:1px solid #ccc;line-height:40px;">个性签名</div>
                <div>
                    <textarea style="outline:none; " placeholder="点击编辑"></textarea>
                </div>
            </div>
        </div>
        
</template>
<script>
import { MessageBox } from 'mint-ui';
 import { Toast } from 'mint-ui';
  import{mapState} from'vuex'
    export default {

        data () {
            return {
               intro:'klsld asklxns sjadkjsak asda  asklxns sjadkjs',
               cell_touxiang: './src/assets/03.png',
               cells:[
                   {
                       cell_title:'昵称',
                       cell_contain:'NANA',
                   },
                   
                   {
                       cell_title:'性别',
                       cell_contain:'女',
                   },
                   {
                       cell_title:'生日',
                       cell_contain:'19960203',
                   },
                   {
                       cell_title:'职业',
                       cell_contain:'学生',
                   },
                   {
                       cell_title:'学校',
                       cell_contain:'东京大学',
                   },
               ]            
            }
        },
      computed:{
         
      }, 
      methods:{
          back(){
                 this.$router.push({path:'/index'});
            },
         showDialog(){
              alert("cnm");
            Toast({message: '评论成功',iconClass: 'mintui mintui-success'}); 
          }  
      }    
    }
     

</script>

<style>
    #personalData textarea{
        width: 90%;
         line-height: 30px;
         height: 100px;
         padding-top: 5px;
         margin-left:3%;
         margin-bottom: 2%;
     }
    #personalData .tItem{
        border-bottom: 1px solid #ccc;
        font-size: 120%;
        color:gray

    }
     #personalData .tItem div{
        
     }
     #personalData .tItem .r{
        padding-left: 30%;
     }
     #personalData .tItem .r{
        color:#ccc
     }
     #personalData .tItem .l{
        padding-left: 15%;
     }
     #personalData .tItem .m{
        color:#ccc
     }
    #personalData{
        padding-left: 4%;
        
    }
    #personalData .top{
        margin-top: 15%;
        width: 95%;
        border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -2px 4px 20px #bad6fe
    }
    #personalData .btm{
        margin-top: 15%;
        width: 95%;
        border-radius:10px 10px 10px 10px ;
         -moz-border-radius: 10px 10px 10px 10px ;
         -webkit-border-radius:10px 10px 10px 10px ;
         box-shadow: -2px 4px 20px #bad6fe
    }
    #personalData .top .tItem{
        
        line-height: 45px;
    }
     #personalData .find{
        background-color:#8fbfff;
        box-shadow: -2px 4px 20px #8fbfff
        
    }
#personalData .top img{
        margin-left: 5%;
        width: 30px;
        height:30px;
        border-radius: 50%;   
    }
    #personalData .left img{
        width: 20px;
        height: 20px;;
        border-radius:50%;
    }
#personalData .cell_title{
    text-align: left;
}
#personalData .cell_touxiang{
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
}
#personalData .introduction{
    border-top:1px solid #666;
    margin-bottom: 20px;
}
 #personalData .goback2 img{
     width: 20px;
     height: 17px;
   }

</style>
