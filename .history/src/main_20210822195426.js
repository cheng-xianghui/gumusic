// https://tui.taobao.com/recommend?appid=24127&_ksTS=1628602004658_222&callback=jsonp223



import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import SlideLoop from '@/components/slideLoop'
import PageNation from '@/components/pageNation'
import shopCart from '@/pages/'
import '@/api'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
// import {reqCategoryList} from '@/api'




// 多个页面共用的组件，要全局定义
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.component('PageNation',PageNation)

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    // 注册全局事件总线
    Vue.prototype.$bus=this
  },
  router,//我们所有的组件内部都可以使用this.$router和$route
  store,
  render: h => h(App)
}).$mount('#app')
