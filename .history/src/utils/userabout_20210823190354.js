// 这个文件是和用户相关的工具函数
// 专门用来生成用户的临时标识
// ，一般用户的临时表示是唯一的，一旦生成不会改变


import { v4 as uuidv4 } from 'uuid';


export function getUserTempId(){
    // 先从localstorage当中获取用户的临时标识
    // localstorage获取不到数据返回的是null
    let userTempId= localStorage.getItem('USERTEMPID_KEY')
    // 如果获取到了直接返回使用
    if(!userTempId){
        // 使用uuid重新创建。并存储到localstorage里面
       userTempId= uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
       localStorage.setItem(''USERTEMPID_KEY')

    }
}