import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    // meta:路由对象中的元配置项，可以配置我们所需要的任何数据
    meta:{
      isHidden:true
    }
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: Search,
    // props:true,//1.会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
    // props:{username:'赵丽颖'} //2.传递一个对象时，传递的是额外你需要的静态属性
    props:(route)=>{
      return {keyword:route.params.keyword,keyword1:route.query.keyword1}
    }//3.函数写法，简化操作，渲染时gengjian
  },
  {
    path: '/login',
    name: 'login',
    component:Login,
    meta:{
      isHidden:true
    }
  },{
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
