import { createStore } from 'vuex'

export default createStore({
  state: {
    scrolled:false,
    loggedIn:false
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
