/**
 * 1.这个文档写的都是函数，我们叫做接口请求函数，我们每个接口都对应一个函数，以后要那接口数据，就调用函数
 * 2.axios请求有两种写法：对象写法，函数写法
 *    axios.get() //对象写法
 *    axios({})//函数写法
 * 
 *  axios请求有三种参数：params参数，query参数，请求体参数
 *    params参数：是在url当中携带的,属于路径一部分
 *    query参数：可以在url当中携带 ？分割，后面就是query参数
              // 也可以在配置对象当中配置，配置的属性名叫params
 *    请求体参数：在配置对象当中data里面配置，只有put和post请求才有请求体参数
 *  axios({
//   url:'localhost:8080/userinfo/1?name=zhaoliying',
//   method:,
//   params:{
//     //代表的是query参数
//     name:'zhaoliying'
//   },
//   data:{
//     //配的是请求体参数
//   }
// })
 * 
 */
import axios from 'axios'
 import request from './axios'
 import mockRequest from './mockAxios'
//  export const reqCategoryList=()=>{
//      return request({
//          url:'/product/getBaseCategoryList',
//         method:'get',
//      })
//  } 


//  模拟函数的请求接口函数
export const reqBannerList=()=>{
    return mockRequest({
        url:'/banner',
        method:"get"
    })
}

export const reqFloorList=()=>{
    return mockRequest({
        url:'/floor',
        methods:"get"
    })
}

export const reqCategoryList=()=>{
    return mockRequest({
        url:'/categoryList',
        methods:'get'
    })
}

//  调用测试有两种方式
//  方式一：此处调用，在main中引用 import '@/api'
// reqCategoryList()

// 方式二：在main中引用import {reqCategoryList} from '@/api'


// search页面，请求接口函数

//  "category1Id":"11",
// "category2Id":"22",
// "category3Id":"61",
// "keyword":"小米",
// "order":"1:desc",
// "pageNo":1,
// "pageSize":10,
// "props":["1:1700-2799:价格","2:6.65-6.67英寸:屏幕尺寸"],
// "trademark":"4:小米"

// 这个searchParams参数必须是一个对象，可以是空对象但必须传；其实用户发请求时，这个参数给一个空对象，也可以获取到数据，是默认数据
export const reqSearchInfo=(searchParams)=>{
    return mockRequest({
        url:'/searchList',
        methods:'post',
        data:searchParams //searchParams是用户搜索的参数，这个参数使用户在发送请求的时候给传递的
    })
}

// 获取详情页信息
export const reqDetailInfo=(skuId)=>{
          return mockRequest({
              url:'/detail',
              method:'get',
              data:skuId 
          })
}
// 添加购物车

export const reqAddUpdateShopCart=(skuId,skuNum)=>{
    return mockRequest({
        url:`/detail/addcartsuccess/${skuId}/${skuNum}`,
        method:'post',
        data:{skuId,skuNum}
        
    })
}

// reqSearchInfo({})