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
 import request from './axios'
 export const reqCategoryList=()=>{
     return request({
         url:'/product/getBaseCategoryList',
        method:'get',
     })
 } 

//  调用测试有两种方式
//  方式一：此处调用，在main中引用 import '@/api'
// reqCategoryList()
// 方式二：
