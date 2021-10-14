// https://tui.taobao.com/recommend?appid=24127&_ksTS=1628602004658_222&callback=jsonp223



import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import SlideLoop from '@/components/slideLoop'
import PageNation from '@/components/pageNation'
import '@/api'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import { Button,Message,MessageBox } from 'element-ui';
// import {reqCategoryList} from '@/api'
 import '../src/utils/validate' //校验规则引入

// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})



Vue.use(Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

// 多个页面共用的组件，要全局定义
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.component('PageNation',PageNation)

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    // 注册全局事件总线
    Vue.prototype.$bus=this
    Vue.prototype.$API=API

  },
  router,//我们所有的组件内部都可以使用this.$router和$route
  store,
  render: h => h(App)
}).$mount('#app')
