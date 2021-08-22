import {reqAddUpdateShopCart} from '@/api'
const state={

}
const mutations={

}
const actions={
   async getAddshop({commit},{skuId,skuNum){
        let result = await reqAddUpdateShopCart(skuId,skuNum)
        if(result.code===200){

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