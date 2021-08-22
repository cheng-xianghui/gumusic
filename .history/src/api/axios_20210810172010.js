import axios from 'axios'
// chuan
const servece = axios.create({
    baseURL:"/api",//基础路径配置
    timeout:20000,//响应时间限制为20秒
})

// 