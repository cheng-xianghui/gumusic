module.exports={
    lintOnSave:false,//禁用eslint
    // 配置代理
    devServer:{
        proxy: {
            "/": {
              target: "http://localhost:3000",  
              // pathRewrite: {"^/api" : ""} //接口文档中有/api就需要此配置
            }
          }
     }
}