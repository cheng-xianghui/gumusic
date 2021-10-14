import {getUserTempId} from '@/utils/userabout'
import {reqRegister,} from '@/api'
const state={
    // getUserTempId():这个函数专门用来生成用户的临时标识
      userTempId:getUserTempId(),
      token:''
}
const mutations={
          
}
const actions={
  async getUserRegister({commit},userInfo){
      const result = await reqRegister(userInfo)
      if(result.code===200){
          return 'ok'
      }else{
          return Promise.reject(new Error('failed'))
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