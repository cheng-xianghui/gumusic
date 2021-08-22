import {reqAddUpdateShopCart} from '@/api'
import { IgnorePlugin } from 'webpack'
const state={

}
const mutations={

}
const actions={
    getAddshop({commit},skuId,skuNum){
        let result = reqAddUpdateShopCart()
        IgnorePlugin()
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