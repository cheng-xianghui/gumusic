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
       let result = await   reqDetailInfo()
       if()
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