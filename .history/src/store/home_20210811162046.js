import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'
const state={
    // 保存数据
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations={
    // 直接修改数据
    RECEIVE_CATEGORYIST(state,categoryList){
        state.categoryList=categoryList
    },
    RECEIVE_BANNERLIST(state,bannerList){
         state.bannerList=bannerList
    }
}
const actions={
    // 与组件当中用户对接，一般是异步发送请求，提交mutations
 async getCategoryList({commit}){
    //  发请求拿数据，提交给mutations，存储到state
    // await和async作用：可以同步代码实现异步效果，可读性强
    // .then.catch不是说不能用，而是可读性不强，里面还是有异步代码（异步回调函数）
     let result= await  reqCategoryList()
     if(result.code === 200){
         commit('RECEIVE_CATEGORYIST',result.data)
     }
    },

    async getbannerList({commit}){
        let result=await reqBannerList()
        if(result.code===200){
            commit('RECEIVE_BANNERLIST',result.data)
        }
    },
    async getFloorList

    
}
export default {
    state,
    mutations,
    actions
}
