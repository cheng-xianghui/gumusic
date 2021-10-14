// 这个文件是和用户相关的工具函数
// 专门用来生成用户的临时标识
// ，一般用户的临时表示是唯一的，一旦生成不会改变
export function getUserTempId(){
    // 先从localstorage当中获取用户的临时标识
    // localstorage获取不到数据返回的是null
    let userTempId= localStorage.getItem('u')
}