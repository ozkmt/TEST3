<template>
  <div id="register">
     <div class="login_form">
       <div class="goback">
         <router-link to="/"><img src="../assets/goback.png"></router-link>
       </div>
        <p class="login_title">注册</p>
        <div class="input_form">
            <input style="outline:none;" placeholder="你的昵称" v-model="username">
            <input style="outline:none;" placeholder="你的手机号码" v-model="phone">
          
            <input style="outline:none;"  placeholder="你的密码" v-model="password">
            <input style="outline:none;" placeholder="请确认你的密码" v-model="repassword">
      
            <mt-button class="login_btn" size="large" @click="toregister">注册</mt-button>
        </div>
        <div class="login_tip">
        </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
          data () {
              return {
                  username:'',
                  phone:'',
                 // email:'',
                  password:'',
                  repassword:'',
                  //school:'',
                 // major:''
              }
          },
          methods:{
            toregister: function(){
              if(this.username==""||this.phone==""||this.email==""||this.password==""||this.repassword==""){
                alert("请完整填写表单");
              }else{
                if(this.repassword!==this.password){
                  alert("请重新确认密码");
                }else{
                  var personInfo = {};
              for(var name in this._data){
                personInfo[name]=this._data[name];
              }
              var _this=this;
              axios.post('/users/register',personInfo).then(function (res) {
                 if(res.data){
									    console.log(res.data);
									  // _this.$router.push({path:'/',query:{username:res.data.username}})
								//	_this.changeBtn();
								      alert("注册成功"); 
                      _this.$router.push({path:'/index'});       
                      }
                    }).catch(function (err) {
                    console.log(err);
                  });
                }
              }
              
            },

            openToastWithIcon() {
               if(this.username!==''){
                Toast({message: '提交成功',iconClass: 'mintui mintui-success'});
                this.$store.commit("index",this.username);
               }
            }

          }
  }


</script>

<style>
  #register {
    text-align: center
  }
 #register input::-webkit-input-placeholder{ /*WebKit browsers*/
        color: #bababa;
        font: 90%;
        }
  #register .goback {
    position: absolute;
    padding-top: 4%;
    padding-left: 4%;
  }
   #register .goback img{
     width: 20px;
     height: 17px;
   }
#register .login_form{
  width: 80%;
  height: 500px;
  margin-left: 10%;
  margin-top: 15%;
  background: orange;
  border-radius:8px 8px 8px 8px ;
  -moz-border-radius: 8px 8px 8px 8px ;
  -webkit-border-radius:8px 8px 8px 8px ;
}
 #register .login_form input{
  width: 85%;
  border: none;
  font-size: 100%;
  background: snow;
  border-radius:8px 8px 8px 8px ;
  -moz-border-radius: 8px 8px 8px 8px ;
  -webkit-border-radius:8px 8px 8px 8px;
  margin-top: 3%;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 4%;
}
#register .input_form{
  margin-top:10%;
}
#register .login_title{
  color: #555962;
  padding-top:3%;
  text-align: center;
  font-size: 130%;
  font-weight:bold;
}
#register .login_btn{
  margin-top: 10%;
  background: green;
  width: 90%;
  margin-left: 5%;
  color: #ffffff;
  font-size: 130%;
  font-weight: normal;
  border-radius:8px 8px 8px 8px ;
  -moz-border-radius: 8px 8px 8px 8px ;
  -webkit-border-radius:8px 8px 8px 8px;
}
#register .login_tip{
 margin-top: 60px;
}
#register .register_tip{
  font-size: 20px;
 color: cadetblue;
 font-weight: bold;
}


</style>
