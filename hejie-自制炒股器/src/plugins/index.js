const requirePlugin = require.context('./', true, /\.plg\.js$/)
const install = Vue => {
  if (install.installed) return
  install.installed = true
  requirePlugin.keys().map(plg => {
    const plugin = requirePlugin(plg)
    Vue.use(plugin.default || plugin)
  })
}
export default {
  install
}
