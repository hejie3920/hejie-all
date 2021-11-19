import Vue from "vue"
import { Button } from "mint-ui"
import "mint-ui/lib/style.css"
import App from "./App.vue"
Vue.use(Button)
Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
