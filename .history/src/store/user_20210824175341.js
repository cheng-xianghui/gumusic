import {getUserTempId,reqRegister} from '@/utils/userabout'
const state={
    // getUserTempId():这个函数专门用来生成用户的临时标识
      userTempId:getUserTempId()
}
const mutations={
          
}
const actions={
  async getUserRegister({commit},userInfo){
      const result = await reqRegister(userInfo)
      if(result.code===200){}

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