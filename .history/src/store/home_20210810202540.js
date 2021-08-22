import {reqCategoryList} from '@/api'
const state={
    // 保存数据
    categoryList:[]
}
const mutations={
    // 直接修改数据
    RECEIVE_CATEGORYIST(state,categoryList){
        state.categoryList=categoryList
    }
}
const actions={
    // 与组件当中用户对接，一般是异步发送请求，提交mutations
 async   getcategoryist({commit}){
     let result= await  reqCategoryList()
     if(result.code === 200){
         
     }
    }
    
}
const getters={
    // 化简代码
}
export{
    state,
    mutations,
    actions,
    getters
}