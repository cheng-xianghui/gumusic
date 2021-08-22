import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 创建一个新的axios，来进行额外配置的书写
const servece = axios.create({
    baseURL:"/api",//基础路径配置
    timeout:20000,//响应时间限制为20秒
})

// 使用请求拦截器和响应拦截器，里面可以写更给事件
// 请求拦截器一般失败的回调不写
servece.interceptors.request.use(
    // config是
    (config)=>{
        Nprogress.start() //开启进度条
        return config
    }
)

servece.interceptors.response.use(
    (respose)=>{
         Nprogress.done() //关闭进度条
        return respose
    },
    (error)=>{
        return new Promise({"失败了"+ error})
    }
)