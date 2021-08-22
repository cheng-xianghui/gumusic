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
       if(result==200){
           commit
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