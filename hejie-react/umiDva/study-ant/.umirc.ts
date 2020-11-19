import { defineConfig } from 'umi';
import mysettings from './mysettings';

export default defineConfig({
  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  hash: true,
  // ssr: {
  //   // devServerRender: true,
  // },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // 动态导入
  dynamicImport: {
    loading: '@cp/loading/index',
  },
  alias: {
    '@cp': '@/components',
  },
  // plugins: [
  //   // npm 依赖
  //   'umi-plugin-hello',
  //   // 相对路径
  //   './plugin',
  //   // 绝对路径
  //   `${__dirname}/plugin.js`,
  // ],
  targets: {
    ie: 11,
  },
  dva: {
    hmr: true,
  },
  theme: {
    'primary-color': mysettings.primaryColor,
  },
  // antDesign
  antd: {},
  layout: {
    name: 'Ant Design Pro',
    locale: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user', component: '@/pages/user' },
  ],
});
