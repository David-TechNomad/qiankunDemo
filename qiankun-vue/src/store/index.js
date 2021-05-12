import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parentActions: {},
  },
  mutations: {
    setParentActions(state, value) {
      state.parentActions = value
    },
  },
  actions: {},
  modules: {},
})
