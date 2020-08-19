// 1. 自动化引入
// function changeStr(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }
// const requireComponent = require.context('.', false, /\.vue$/)
// requireComponent.keys().forEach((fileName) => {
//   const config = requireComponent(fileName)
//   new RegExp(/\.\/(.*)\.vue$/g).test(fileName)
//   // 将组件转成驼峰
//   const componentName = changeStr(RegExp.$1)
//   Vue.component(componentName, config.default || config)
// })

// 2. 封装成npm包
const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  requireComponent.keys().map((component) => {
    const config = requireComponent(component)
    new RegExp(/\.\/(.*)\.vue$/g).test(component)
    const componentName = RegExp.$1
    Vue.component(componentName, config.default || config)
  })
}
export default {
  install
}
