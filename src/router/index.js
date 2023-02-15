import { createRouter, createWebHistory } from 'vue-router'

const routes = [

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from){
    return{top:0, behavior:'smooth'}
  }
})

export default router
