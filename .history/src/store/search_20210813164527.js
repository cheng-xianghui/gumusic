import {reqSearchInfo} from '@/api'

const state={
  searchList:[]
}
const mutations={
   RECIVE_SEARCHLIST(state,searchList){
    state.searchList=searchList
   }
}
const actions={
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