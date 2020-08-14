import Vue from 'vue'
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const requireComponent = require.context('.', false, /\.vue$/)
requireComponent.keys().forEach((fileName) => {
  const config = requireComponent(fileName)
  new RegExp(/\.\/(.*)\.vue$/g).test(fileName)
  // 将组件转成驼峰
  const componentName = changeStr(RegExp.$1)
  Vue.component(componentName, config.default || config)
})
