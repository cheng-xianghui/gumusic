module.exports={
    lintOnSave:false,//禁用eslint
    // 配置代理
    devServer:{
        proxy: {
            "/api": {
              target: "https://tui.taobao.com",  
              pathRewrite: {"^/api" : ""} //接口文档中有/api就需要此配置
            }
          }
     }
}