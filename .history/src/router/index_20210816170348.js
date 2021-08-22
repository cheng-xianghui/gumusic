import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 解决编程式导航路由，由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicate的警告错误
// 2.修改Vue原型上的push和replace方法（优秀）


/**
 * VueRouter 是路由器对象的构造函数
 * this.$router.push 调用的是路由器对象的方法。这个方法并不是路由器实例化对象的方法，而是这个对象原形的方法
 * 这个实例化对象是VueRouter的实例化对象
 *  */ 

const originPush = VueRouter.prototype.push
const originreplace=VueRouter.prototype.replace
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

VueRouter.prototype.replace=function(location,onResolved,onRejected){
  // location 就是我们调用this.$router.push，传递过来的对象
//   this.$router.push({
//     name:'search',
//     params:{keyword:this.keyword || undefined}, 
//     query:{keyword1:this.keyword.toUpperCase()}
// })

if(onResolved === undefined && onRejected === undefined){
  // 证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
  return originreplace.call(this,location).catch(()=>{})
}else{
  // 证明调用的时候传递了成功或者失败的回调
  return originreplace.call(this,location,onResolved,onRejected)
}
}





const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  // 配置滚动行为
  scrollBehavior(to,from,savePosition)
})

export default router
