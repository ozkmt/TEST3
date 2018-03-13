<template>
  <div id="login">
     <div class="login_form">
        <p class="login_title">登录</p>
        <div class="input_form">
            <input  style="outline:none;"  placeholder="你的账号" v-model="phone">
            <input  style="outline:none;"  placeholder="你的密码" v-model="password">
        </div>
            <mt-button class="login_btn" size="large" @click="tologin()">登录</mt-button>
        
        <div class="login_tip">
          <p class="account_tip">还没有账号?</p>
          <p class="register_tip"><router-link to="/register">注册</router-link></router></p>
        </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
          data () {
              return {
                  title: '登陆',
                  phone:'',
                  password:''
              }
          },
          methods:{
             tologin(){
                var params = new URLSearchParams();
                params.append('phone',this.phone);
                params.append('password',this.password);
                var _this = this
                axios.post('/users/login',params).then(function (res) {
                    if(res.data.result==0) {
                       alert('用户不存在')
                   }else if(res.data.result==1){
                         var userData=res.data;
                         //alert(userData.username)
                         _this.$store.commit('changeId',userData);  
                        alert('登录成功')
                        console.log(res.data);
                        _this.$router.push({path:'/index'})  
                   }else {
                        alert('密码错了')
                   }
                }).catch(function (err) {
                    console.log(err);
                })          

        }
            },

  }


</script>

<style>
  #login{
    text-align: center;
  }
#login  input::-webkit-input-placeholder{ /*WebKit browsers*/
        color: #bababa;
        font: 90%;
        }
body{
  background: papayawhip;
}
#login .login_form{
  width: 80%;
  height: 500px;
  margin-left: 10%;
  margin-top: 15%;
  background:orange;
  border-radius:8px 8px 8px 8px ;
  -moz-border-radius: 8px 8px 8px 8px ;
  -webkit-border-radius:8px 8px 8px 8px ;
}
#login .login_form input{
  width: 85%;
  border: none;
  font-size: 100%;
  background:snow;
  border-radius:8px 8px 8px 8px ;
  -moz-border-radius: 8px 8px 8px 8px ;
  -webkit-border-radius:8px 8px 8px 8px;
  margin-top: 5%;
  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 4%;
}
#login .input_form{
  margin-top:20%;
}
#login .login_title{
  color: papayawhip;
  padding-top:3%;
  text-align: center;
  font-size: 130%;
  font-weight: bold;
}
#login .login_btn{
  margin-top: 20%;;
  background: green;
  width: 90%;
  margin-left: 5%;
  color: papayawhip;
  font-size: 130%;
  font-weight: normal;
}
#login .login_tip{
 margin-top: 25%;
}
#login .login_tip .account_tip{
  color: papayawhip;
  font-size: 95%;
}
#login .register_tip{
  font-size: 120%;
 color: papayawhip;
 font-weight:normal;
 padding-top: 2%;

}
#login .register_tip  a{
  text-decoration: none;
  color:papayawhip;
}

</style>
