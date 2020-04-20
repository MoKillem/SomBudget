import Vue from 'vue'
import Vuex from 'vuex'
import revexp from './modules/revexp'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    revexp
  }
})
