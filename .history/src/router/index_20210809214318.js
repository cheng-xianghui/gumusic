import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'


Vue.use(VueRouter)

// 解决编程式导航路由，由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicate的警告错误
// 2.修改Vue原型上的push和replace方法（优秀）


/**
 * VueRouter 是路由器对象的构造函数
 * this.$router
 *  */ 

const originPush = VueRouter.prototype.push
// 可以大胆的去修改原型的push，让让原型的push指向另一个函数
VueRouter.prototype.push=function(location,onResolved,onRejected){
  // location 就是我们调用this.$router.push，传递过来的对象
//   this.$router.push({
//     name:'search',
//     params:{keyword:this.keyword || undefined}, 
//     query:{keyword1:this.keyword.toUpperCase()}
// })

if(onResolved === undefined && onRejected === undefined){
  // 证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
  return originPush.call(this,location).catch(()=>{})
}else{
  // 证明调用的时候传递了成功或者失败的回调
  return originPush.call(this,location,onResolved,onRejected)
}
}




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
    path: '/search/:keyword?', //?代表我的params参数可传可不传
    name: 'search',
    component: Search,
    // props:在路由组件当中操作params参数和query参数的简化方法
    // props:true,//1.会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
    // props:{username:'赵丽颖'} //2.传递一个对象时，传递的是额外你需要的静态属性
    props:(route)=>{
      return {keyword:route.params.keyword,keyword1:route.query.keyword1}
    }//3.函数写法，简化操作，渲染时更加方便
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
