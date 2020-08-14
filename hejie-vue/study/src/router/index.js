import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Test from '../pages/Test.vue'
// import login from '../router/login.routes'
Vue.use(Router)
const routerList = []
function importAll(r) {
  console.log('importAll -> r', r.keys())
  r.keys().forEach((key) => routerList.push(r(key).default))
}
importAll(require.context('.', true, /\.routes\.js/))
console.log('routerList', routerList)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    ...routerList
  ]
})
