import {reqDetailInfo} from '@/api'
const state={
        detailInfo:{}
}
const mutations={
     RECIVE_DETAILINFO=(state,detailInfo)=>{
        state.detailInfo=detailInfo
     }
}
const actions={
      async  getDetailInfo({commit}){
       let result   reqDetailInfo()
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