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
       async reqGetSearchList({commit}){
           let result = await 
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