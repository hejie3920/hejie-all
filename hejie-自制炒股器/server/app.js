const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const middlewares = require('./middlewares')

middlewares(app)
router(app)
app.on('error', (err, ctx) => {
  if (ctx && !ctx.headerSent && ctx.status < 500) {
    ctx.status = 500
  }
  if (ctx && ctx.logger && ctx.logger.error) {
    if (!ctx.state.logged) {
      ctx.logger.warn(err.stack)
    }
  }
})
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
