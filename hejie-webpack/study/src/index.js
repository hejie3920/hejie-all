const css = import("./index.css")
const a = 100
console.log(a, css)
import Vue from "vue"
import element from "element-ui"
import "./a"
import "./b"

Vue.use(element)
let b = {
  test: {
    name: "和杰"
  }
}
console.log("TCL: ", b?.test?.name)
