import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@/assets/style.css'
import VueApexCharts from "vue3-apexcharts";
AOS.init();
createApp(App)
.use(store)
.use(router)
.use(VueApexCharts)
.mount('#app')
