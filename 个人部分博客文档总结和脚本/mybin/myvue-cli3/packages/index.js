const requireComponent = require.context("./", true, /\.vue$/);
const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  requireComponent.keys().map(component => {
    const config = requireComponent(component);
    new RegExp(/\.\/(.*)\.vue$/g).test(component);
    const componentName = RegExp.$1;
    Vue.component(componentName, config.default || config);
  });
};
export default {
  install
};
