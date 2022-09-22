import { createStore } from 'vuex'

export default createStore({
  state: {
    scrolled:false,
  },
  getters: {
 
  },
  mutations: {
    changedScrolledTotrue(state){
      state.scrolled = true
    },
    changedScrolledTofalse(state){
      state.scrolled = false

    }
  },
  actions: {
  },
  modules: {
  }
})
