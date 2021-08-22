// 此文件用于配置代理
 import request from './axios'

 devServer:{
    proxy: {
        "/api": {
          target: "http://localhost:3000",
          pathRewrite: {"^/api" : ""}
        }
      }
 }