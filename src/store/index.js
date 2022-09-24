import { createStore } from 'vuex'

export default createStore({
  state: {
    scrolled:false,
    loggedIn:false,
    showOptions:false

  },
  getters: {
 
  },
  mutations: {
    changedScrolledTotrue(state){
      state.scrolled = true
    },
    changeStateshowOptions(state){
      state.showOptions = ! state.showOptions 
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
