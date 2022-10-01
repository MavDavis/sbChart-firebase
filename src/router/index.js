import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import User from '../views/User.vue'
import Volunteer from '../views/Volunteer.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/Login.vue'

import ForgotPassword from '../views/forgotPassword.vue'
import Register from '../views/SignUp.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  }, 
  {
    path: '/register',
    name: 'Register',
    component: Register
  }, 
   {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
  },  {
    path: '/user',
    name: 'User',
    component: User
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from){
    return{x:0, y:0, behavior:'smooth'}
  }
})

export default router
