let config = {
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
export default config