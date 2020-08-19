import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import myplugins from './myplugins/index'
import router from './router/index'

Vue.use(myplugins)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
