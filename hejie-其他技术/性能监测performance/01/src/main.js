import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import dayjs from 'dayjs'
import max from 'lodash/max'
Vue.config.productionTip = false
console.log(dayjs())
console.log(max([5,4,1,6,8]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
