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
          reqDetailInfo()
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