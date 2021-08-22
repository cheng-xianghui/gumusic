import {reqGetSearchList} from '@/api'

const state={
  searchList:[]
}
const mutations={
   recive_searchlist(state,searchList){
    state.searchList=searchList
   }
}
const actions={
       async getSearchList({commit}){
           let result = await reqGetSearchList()
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