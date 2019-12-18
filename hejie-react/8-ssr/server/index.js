//这里的node代码。会用babel处理
import React from 'react';
import { renderToString } from 'react-dom/server'
import {Provider} from 'react-redux'
import express from 'express'
import {StaticRouter, matchPath, Route} from 'react-router-dom'
import routes from '../src/App'
import {getServerStore} from '../src/store/store'
import Header from '../src/component/Header.js';
import axios from 'axios'
const proxy = require('http-proxy-middleware')

const store = getServerStore()
const app = express()
app.use(express.static('public'))

// 第一种：http-proxy-middleware中间件进行请求转发
app.use('/api/*', proxy({ target: 'http://127.0.0.1:9090', changeOrigin: true }));

// 第二种： 直接配置axios
/*
app.get('/api/*', (req, res) => {
  const {method, url , body} = req
  axios.request({
    method,
    baseURL: 'http://localhost:9090',
    url,
    data: body
  }).then(res => {
    res.send(res.data)
  }).catch(e => {
    console.log(e)
  })
})
*/


app.get('*', (req, res) => {
  // 获取相应路由组件并且拿到loadData方法，获取数据
  // 存储网络请求
  const promises = []
  routes.some(route => {
    const match = matchPath(req.path, route)
    if (match) {
      const {loadData} = route.component
      if (loadData) {
        promises.push(loadData(store))
      }
    }
    // return match
  })

  // 等待所有网络请求
  Promise.all(
    promises.map(p => p.catch(e => {
      if(e && e.config) console.error(`请求${e.config.url}出错`);
    }))
  )
  .then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          {routes.map(route => <Route {...route}></Route>)}
          {/* {App} */}
        </StaticRouter>
      </Provider>
    )
    res.send(`
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>服务端渲染</title>
        </head>
        <body>
          <div id="root" style="background:aliceblue;">${content}</div>
          <script>
            window.__context = ${JSON.stringify(store.getState())}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
    
  }).catch(err => {
    res.send('报错页面')
  })
})

app.listen(3370, () => {
  console.log(`server listen on: http://127.0.0.1:3370 `)
})