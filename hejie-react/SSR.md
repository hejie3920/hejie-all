# 总结掘金好文

[总结分析 react 系所有的 ssr](https://juejin.im/post/5d9b57e35188252af43b7a4a)

# 纯 SSR

[从 0 到 1 实现 react ssr](https://juejin.im/post/5d7deef6e51d453bb13b66cd)

# Egg + React + SSR 服务端渲染

[Egg + React + SSR 服务端渲染](http://ykfe.net/guide/ts.html)

# Next

- 内置组件，Head, Link,
- 类似微服务的 zone
- [demo](https://segmentfault.com/a/1190000015578803)
- next 官网比较简洁，其实没什么特别好记录的，和各种技术的配合项目直接看它的开源项目 demo 踩坑食用即可
  [所有技术配合合集](https://github.com/zeit/next.js/tree/7.0.0-canary.8/examples/with-redux)
- withRedux [配合 redux](https://github.com/zeit/next.js/tree/7.0.0-canary.8/examples/with-redux)

- head 组件自定义 tdt
- getInitialProps 服务端获取数据
- Link href 跳转，Router.push()跳转，prefetch 预加载 <Link href={{ pathname: '/about', query: { name: 'Zeit' }}}> scroll={false}防止滚动
- 拦截器

```
import Router from 'next/router'

Router.beforePopState(({ url, as, options }) => {
  // I only want to allow these two routes!
  if (as !== "/" || as !== "/other") {
    // Have SSR render bad routes as a 404.
    window.location.href = as
    return false
  }

  return true
});

```

## ./pages/

- \_app.js getInitialProps 这里是全局文件，抽离出一个 layout 组件，然后可以用来包裹 redux
- \_document.js
  import Document, { Head, Main, NextScript } from 'next/document'
- \_error.js 内置错误页面 import Error from 'next/error'

## next.config.js

- 自定义配置 [https://github.com/zeit/](https://github.com/zeit/)

# Umi
