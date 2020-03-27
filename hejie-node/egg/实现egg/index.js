// const app = new (require('koa'))
// const { initRouter } = require('./hejie-loader')
// app.use(initRouter().routes())
// app.listen(3000)

const hejie = require('./hejie')
const app = new hejie()
app.start(3000)