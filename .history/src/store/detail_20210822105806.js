import {reqDetailInfo} from '@/api'
const state={
        detailInfo:{}
}
const mutations={
     RECIVE_DETAILINFO(state,detailInfo){
        state.detailInfo=detailInfo
     }
}
const actions={
      async  getDetailInfo({commit},skuId){
       let result = await   reqDetailInfo(skuId)
       if(result.code==200){
           commit('RECIVE_DETAILINFO',result.data)
       }
        }
}
const getters={
    categoryView(state){
        return state.detailInfo.
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}