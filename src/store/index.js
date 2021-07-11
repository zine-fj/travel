import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters: { // 类似于组件中 computed 作用
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

export default store
