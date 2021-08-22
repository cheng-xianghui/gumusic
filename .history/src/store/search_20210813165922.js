import {reqSearchInfo} from '@/api'

const state={
  searchInfo:{}
}
const mutations={
   RECIVE_SEARCHLIST(state,searchInfo){
    state.searchInfo=searchInfo
   }
}
const actions={
    // searchParams这个参数，是用户请求的时候，也就是dispatch的时候给我们传递的对象，这个参数在actions中只能放在commit后面
       async getSearchInfo({commit},searchParams){
           let result = await reqSearchInfo(searchParams)
           if(result.code===200){
               commit('RECIVE_SEARCHLIST',result.data)
           }
       }
}
const getters={
// 简化数据操作
// 我们获取数据时不方便内部结构比较负杂。使用起来不方便，会出现小问题（假报错）
attR

}

export default{
    state,
    mutations,
    actions,
    getters
}