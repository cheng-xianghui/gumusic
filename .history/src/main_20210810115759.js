import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TypeNav from '@/components/TypeNav'
import vueConfig from 'vue.config'
// 多个页面共用的组件，要全局定义
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false

new Vue({
  router,//我们所有的组件内部都可以使用this.$router和$route
  store,
  render: h => h(App)
}).$mount('#app')
