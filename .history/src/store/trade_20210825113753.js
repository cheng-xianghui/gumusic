import {reqtradeInfo} from '@/api'
const state={
    tradeInfo:{}
}
const mutations={
    RECIVE_TRADEINFO(state,tradeInfo){
        state.tradeInfo=tradeInfo
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