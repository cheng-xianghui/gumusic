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
        let result = await reqtradeInfo()
        if(result.code===200){
            commit('RECIVE_TRADEINFO',result.data)
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