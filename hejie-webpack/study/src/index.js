import Vue from 'vue'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import bundleA from './a'
import bundleB from './b'
const css = import('./index.css')
const a = 100
console.log(a, css)

Vue.use(element)
const b = ''
console.log('TCL: ', b?.test?.name)
bundleA()
bundleB()
