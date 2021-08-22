import {reqDetailInfo} from '@/api'
const state={
        detailInfo:{}
}
const mutations={
     RECIVE_DETAILINFO=(){
        this.detailInfo=detailInfo
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