
//这个文件就是专门来模拟mock数据接口的
import Mock from 'mockjs'
import banner from './banner.json'
import floor from '@/mock/floor'
import categoryList from './categoryList'
import searchList from './searchList'
import detail from '@/mock/detail'
import addcartsuccess from '@/mock/addcartsuccess'
import shopCartList from '@/mock/shopCartList'
import updatechecked from '@/mock/updatechecked'
import register from '@/mock/register'
import login from '@/mock/login'
import userinfo from '@/mock/userinfo'
import tradeInfo from '@/mock/tradeInfo'
import userAddressList from '@/mock/userAddressList'
import submitOrder from '@/mock/submitOrder'
import paymony from '@/mock/paymony'
import payStatus from '@/mock/payStatus'
//这两行就是在模拟数据接口
Mock.mock('/mock/banner',{code:200,data:banner}) //第一个参数，代表我们以后请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/floor',{code:200,data:floor}) //第一个参数，代表我们以后请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/categoryList',{code:200,data:categoryList})
Mock.mock('/mock/searchList',{code:200,data:searchList})
Mock.mock('/mock/detail',{code:200,data:detail})
Mock.mock('/mock/addcartsuccess',{code:200,data:addcartsuccess})
Mock.mock('/mock/shopcart',{code:200,data:shopCartList})
Mock.mock('/mock/updatechecked',{code:200,data:updatechecked})
Mock.mock('/mock/register',{code:200,data:register})
Mock.mock('/mock/login',{code:200,data:login})
Mock.mock('/mock/userinfo',{code:200,data:userinfo})
Mock.mock('/mock/userAddressList',{code:200,data:userAddressList})
Mock.mock('/mock/submitOrder',{code:200,data:submitOrder})
Mock.mock('/mock/tradeInfo',{code:200,data:tradeInfo})
Mock.mock('/mock/paymony',{code:200,data:paymony})
Mock.mock('/mock/payStatus',{code:200,data:paymony})






