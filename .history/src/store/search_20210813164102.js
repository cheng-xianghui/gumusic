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
       async getSearch({commit}){
           let result = await reqSearchInfo()
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