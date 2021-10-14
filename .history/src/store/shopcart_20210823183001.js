import {reqAddUpdateShopCart} from '@/api'
const state={
      shopCartList:[]
}
const mutations={
     RECIVE_SHOPCARTLIST(state,shopCartList){
         state.shopCartList=shopCartList
     }
}
const actions={
   async getAddshop({commit},{skuId,skuNum}){
        const result = await reqAddUpdateShopCart(skuId,skuNum)
        // 方式一
        // if(result.code===200){
        //      return "ok"
        // }else{
        //     return "failed"
        // }
        // 方式二
        if(result.code===200){
            return "ok"
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async getShopCartList({commit}){
        const result= await reqAddUpdateShopCart()
        if(result.code===200){
            commit('RECIVE_SHOPCARTLIST',result.data)
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