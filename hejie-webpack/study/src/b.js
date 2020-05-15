import Vue from "vue"
import test from "./components/test.vue"

export default () => {
  const createTip = function () {
    const el = document.createElement("div")
    el.id = "component-tip"
    const Tip = Vue.extend(test)
    const instance = new Tip({ el })
    document.body.appendChild(instance.$el)
    return instance
  }
  createTip()
  console.log("TCL: ", "bundleB")
}
