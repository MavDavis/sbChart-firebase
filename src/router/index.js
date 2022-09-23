import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import User from '../views/User.vue'
import Volunteer from '../views/Volunteer.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/Login.vue'
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
  routes
})

export default router
