import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from "vue-router"
//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);

Vue.use(ElementUI);
Vue.use(MintUI)

import login from './components/login.vue'
import personalZoom from './components/personalZoom.vue'
import register from './components/register.vue'
import index from './components/index.vue'
import centre from './components/centre.vue'
import index_contain from './components/index_contain.vue'
import personalData from './components/personalData.vue'
import subscribe from './components/subscribe.vue'
import store from './vuex/store'
import workPublishing from './components/workPublishing.vue'
import addPic from './components/addPic.vue'
import addText from './components/addText.vue'
import inspiration from './components/inspiration.vue'
import tabbar from './components/tabbar.vue'

Vue.component('addPic',addPic)
Vue.component('addText',addText)
Vue.component('workPublishing',workPublishing)

// 创建一个路由器实例并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
      {
          path: '/',
          component:login
      },
      {
          path: '/register',
          component:register
      },
      {
          path: '/index',
          component:index
      },
      {
          path: '/centre',
          component:centre
      },
      {
          path: '/inspiration',
          component:inspiration
      },
      {
           path: '/index_contain',
          component:index_contain
      },
      {
           path: '/personalData',
          component:personalData
      },
      {
           path: '/personalZoom',
          component:personalZoom
      },
      {
           path: '/subscribe',
          component:subscribe
      },
      {
          path:'/workPublishing',
          component:workPublishing
      },
      {
          path:'/addPic',
          component:addPic
      },
      {
          path:'/addText',
          component:addText
      },
       {
          path:'/tabbar',
          component:tabbar
      },
 




  ]
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
      router: router,
      store,
      render: h => h(App)
}).$mount('#app')

