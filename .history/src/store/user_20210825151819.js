import {getUserTempId} from '@/utils/userabout'
import {reqRegister,reqLogin,reqgetUserInfo,reqUserAddresList} from '@/api'
const state={
    // getUserTempId():这个函数专门用来生成用户的临时标识
      userTempId:getUserTempId(),
    //   token:'',//初始化token
        token:localStorage.getItem('TOKEN_KEY'),
      userInfo:{},
      userAddresList:{}
}
const mutations={
        RECIVE_REQLOGIN(state,token){
            state.token=token
        }  ,
        RECIVE_USERINFO(state,userInfo){
            state.userInfo=userInfo
        },
        RESET_TOKEN(state){
            state.token=''    
        },
        RECIVE_USERADDRESLIST(state,userAddresList){
            state.userAddresList=userAddresList
        }

}
const actions={
  async getUserRegister({commit},userInfo){
      const result = await reqRegister(userInfo)
      if(result.code===200){
          return 'ok'
      }else{
          return Promise.reject(new Error('failed'))
      }

  },
//   请求登录
  async getUserLoginToken({commit},userInfo){
      let result = await reqLogin(userInfo)
      if(result.code===200){
          commit('RECIVE_REQLOGIN',result.data.data.token)
          return 'ok'
      }else{
          return Promise.reject(new Error('failed'))
      }
  },
//   请求获取用户信息
async   getUserInfo({commit}){
            let  result= await reqgetUserInfo()
            if(result.code===200){
                commit('RECIVE_USERINFO',result.data)
                localStorage.setItem('TOKEN_KEY',result.data)
            }
        },
        // 清除token
 async clearToken({commit}){
           
          commit(' RESET_TOKEN')
        },
    async getUserAddresList({commit}){
        let result = await reqUserAddresList()
        if(result.code===200){
            commit('RECIVE_USERADDRESLIST',result.data)
        }
    }
}
const getters={
    userAddressList2(state){
        return state.userAddresList.data.userAddressList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}