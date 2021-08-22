import {reqAddUpdateShopCart} from '@/api'
const state={

}
const mutations={

}
const actions={
    getAddshop({commit},skuId,skuNum){
        let result = reqAddUpdateShopCart()
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