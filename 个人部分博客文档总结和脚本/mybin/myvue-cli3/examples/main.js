import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import hejie from './../packages'

createApp(App)
  .use(hejie)
  .use(router)
  .mount('#app')
