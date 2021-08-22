module.exports={
    lintOnSave:false,//禁用eslint
    devServer:{
        proxy: {
            "/api": {
              target: "http://localhost:3000",
              pathRewrite: {"^/api" : ""}
            }
          }
     }
}