import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 
Vue.config.productionTip = false
// 多个页面共用的组件，要全局定义

new Vue({
  router,//我们所有的组件内部都可以使用this.$router和$route
  store,
  render: h => h(App)
}).$mount('#app')
