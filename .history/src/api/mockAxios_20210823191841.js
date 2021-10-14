// 发送axios请求文件
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
// 以后只要是对axios二次封装，不会直接在axios身上直接封装，而是创建一个新的axios实例进行封装，来进行额外配置的书写
const service = axios.create({
    baseURL:"/mock",//设置，当前项目中所有接口路径的公共部分，基础路径配置
    timeout:20000,//axios请求响应时间限制为20秒，超过会报错
})

// 使用请求拦截器和响应拦截器，里面可以写更给事件
// 请求拦截器一般失败的回调不写
service.interceptors.request.use(
    // config是我们的报文，这个报文一定要要返回出去，因为还要继续往下走
    (config)=>{
        Nprogress.start() //开启进度条
        // 请求头内部需要添加临时标识，后期每个请求都会带上临时标识
        let userTempId=
        config.headers.userTempId
        return config
    }
)

service.interceptors.response.use(
    (respose)=>{
         Nprogress.done() //关闭进度条
        return respose.data //返回的响应数据不再需要从data属性中拿数据，而是响应就是我们要的数据
    },
    (error)=>{
        Nprogress.done()
        // 可以统一处理错误
        alert('发送的axios请求失败'+error.message || '未知错误')
        // return  Promise.reject(new Error('发送axios请求失败')) //后面想继续处理这个错误，返回失败的promise

        return new Promise(()=>{}) //返回的是pending状态的promise，代表中断promise链
    }
)

export default service //把封装好的axios实例，把暴露出去，后面去用