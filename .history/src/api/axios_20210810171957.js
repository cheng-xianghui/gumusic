import axios from 'axios'
const servece = axios.create({
    baseURL:"/api",//基础路径
    timeout:20000,//响应时间限制为20秒
})