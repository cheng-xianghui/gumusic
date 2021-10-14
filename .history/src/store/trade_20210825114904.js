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
    detailArrayList(state){
        return state.tradeInfo.data.detailArrayList || []

    }

}
export default{
    state,
    mutations,
    actions,
    getters
}