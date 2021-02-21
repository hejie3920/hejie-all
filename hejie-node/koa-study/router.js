const router = require('koa-router')()
const qs = require('querystring')
const home = require('./controller/home')

module.exports = app => {
  router.all('/', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next()
  })
  let postMap = {
    profile: 'post',
    login: 'post'
  }
  for (let i in home) {
    router[postMap[i] || 'get'](`/${i}`, home[i])
  }
  // 匹配参数
  router.get('/category/:title', (ctx, next) => {
    // qs.escape('id=1') unescape
    // qs.stringify({name:'hejie'}) qs.parse()
    //   ctx.body = ctx.params
    console.warn('TCL: query', ctx.request.query)
    console.warn('TCL: querystring', ctx.request.querystring)
    console.warn('TCL: params', ctx.params)
    ctx.body = ctx.request.querystring
  })
  // .use(router.allowedMethods()
  app.use(router.routes())
}
