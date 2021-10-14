import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'
import addcartsuccess from './addcartsuccess'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {
     home,
     search,
     detail
  }
})
