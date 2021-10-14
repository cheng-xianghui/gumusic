import {getUserTempId} from '@/utils/userabout'
import {reqRegister,reqLogin,reqgetUserInfo} from '@/api'
const state={
    // getUserTempId():这个函数专门用来生成用户的临时标识
      userTempId:getUserTempId(),
      token:'',
      userInfo:{}
}
const mutations={
        RECIVE_REQLOGIN(state,token){
            state.token=token
        }  ,
        RECIVE_USERINFO(state,userInfo){
            state.userInfo=userInfo
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
            let  result= reqgetUserInfo()
            if(result.code===200){
                commit('RECIVE_USERINFO',result.data)
            }
        }
}
const getters={

}
export default {
    state,
    mutations,
    actions,
    getters
}