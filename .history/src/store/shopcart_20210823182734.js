import {reqAddUpdateShopCart} from '@/api'
const state={
      shopCartList:[]
}
const mutations={
     recive_shopcartlist=(state,shopCartList){
         sta
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