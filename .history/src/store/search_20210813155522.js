import {reqGetSearchList} from '@/api'

const state={
  searchList:[]
}
const mutations={
   recive_searchlist(state,searchList){
    searchList:state.searchList
   }
}
const actions={

}
const getters={

}

export default{
    state,
    mutations,
    actions,
    getters
}