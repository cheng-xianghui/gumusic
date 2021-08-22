import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 多个页面公用的组件
new Vue({
  router,//我们所有的组件内部都可以使用this.$router和$route
  store,
  render: h => h(App)
}).$mount('#app')
