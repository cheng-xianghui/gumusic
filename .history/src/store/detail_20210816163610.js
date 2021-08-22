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
        get
}
const getters={

}

export default{
    state,
    mutations,
    actions,
    getters
}