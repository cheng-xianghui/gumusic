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
    // searchParams这个参数，是用户请求的时候
       async getSearchInfo({commit},searchParams){
           let result = await reqSearchInfo(searchParams)
           if(result.code===200){
               commit('RECIVE_SEARCHLIST',result.data)
           }
       }
}
const getters={

}

export default{
    state,
    mutations,
    actions,
    getters
}