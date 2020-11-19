import {Settings as MySettings} from '@ant-design/pro-layout'

export default {
  navTheme: 'light',
  primaryColor: 'blue',
  layout:'sidemenu',
  // layout: 'mix',
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale:true
  },
  title: '和杰哈哈哈',
  pwa: false,
  iconfontUrl:''
} as MySettings & {
  pwa:boolean
};


// import { Settings as LayoutSettings } from '@ant-design/pro-layout';

// export default {
//   navTheme: 'light',
//   // 拂晓蓝
//   primaryColor: '#1890ff',
//   layout: 'mix',
//   contentWidth: 'Fluid',
//   fixedHeader: false,
//   fixSiderbar: true,
//   colorWeak: false,
//   menu: {
//     locale: true,
//   },
//   title: 'Ant Design Pro',
//   pwa: false,
//   iconfontUrl: '',
// } as LayoutSettings & {
//   pwa: boolean;
// };
