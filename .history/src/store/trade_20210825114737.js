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
    [{"id":null,"orderId":null,"skuId":4,"skuName":"Apple iPhone 11 移动联通电信4G手机 双卡双待","imgUrl":"http://192.168.200.128:8080/RLOAElEmAATrIT-1J9Q110.jpg","orderPrice":5999,"skuNum":4,"hasStock":null}]

}
export default{
    state,
    mutations,
    actions,
    getters
}