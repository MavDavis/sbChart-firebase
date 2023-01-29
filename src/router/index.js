import { createRouter, createWebHistory } from 'vue-router'

import User from '../views/User.vue'

import Login from '../views/Login.vue'
import ForgotPassword from '../views/forgotPassword.vue'
import Register from '../views/SignUp.vue'
import AdminSignup from '../views/AdminSignUp.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }, 
  
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },   {
    path: '/adminSignup',
    name: 'adminSignup',
    component: AdminSignup
  }, 
  {
    path: '/register',
    name: 'Register',
    component: Register
  }, 
   ,  {
    path: '/user',
    name: 'User',
    component: User
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from){
    return{top:0, behavior:'smooth'}
  }
})

export default router
