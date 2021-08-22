import {reqAddUpdateShopCart} from '@/api'
const state={

}
const mutations={

}
const actions={
   async getAddshop({commit},{skuId,skuNum}){
        const result = await reqAddUpdateShopCart(skuId,skuNum)
        // if(result.code===200){
        //      return "ok"
        // }else{
        //     return "failed"
        // }
        if(result.code===200){
            return "ok"
        }else{
            return Promise.reject(new Error)
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