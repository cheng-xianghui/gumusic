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
    async getTradeInfo({commit}){
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