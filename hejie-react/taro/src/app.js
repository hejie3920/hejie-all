import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import {Provider} from '@tarojs/mobx'
import todoStore from './store/todo'

import './app.styl'
import 'taro-ui/dist/style/index.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = {
  todoStore
}
// wx.cloud.init()
class App extends Component {

  config = {
    pages: [
      'pages/book/book',
      "pages/index/index"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      "list": [{
        "pagePath": "pages/book/book",
        "text": "图书"
      }, {
        "pagePath": "pages/index/index",
        "text": "首页"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'))
