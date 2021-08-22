import axios from 'axios'
const servece = axios.create({
    baseURL:"/api",
    timeout:20000,//响应时间限制为20
})