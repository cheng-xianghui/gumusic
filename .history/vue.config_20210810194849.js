module.exports={
    lintOnSave:false,//禁用eslint
    // peiz
    devServer:{
        proxy: {
            "/api": {
              target: "http://localhost:3000",
              pathRewrite: {"^/api" : ""}
            }
          }
     }
}