import Vue from "vue"
import App from "./App"
// import element from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false
// Vue.use(element)

App.mpType = "app"

const app = new Vue({
  ...App
})
app.$mount()
