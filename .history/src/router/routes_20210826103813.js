import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import shopCart from '@/pages/ShopCart'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Trade from '@/pages/Trade'
impo

export default [
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: PaySuccess
  },
  {
    path: '/trade',
    name: 'Trade',
    component: Trade
  },
  
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
      path:'/detail/:goodsId?',
      name:'Detail',
      component:Detail
    },
    {
      path:'/addcartsuccess',
      component:AddCartSuccess
    },
    {
      path:'/shopcart',
      component:shopCart
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