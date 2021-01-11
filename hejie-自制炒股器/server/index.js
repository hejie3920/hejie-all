const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

// const router = {}
// router['/html'] = ctx => {
//     ctx.type = 'text/html;charset=utf-8'
//     ctx.body = `<b>我的名字是:${ctx.body[0].name}</b>`
// }

// app.use((ctx, next) => {
//     // ctx.body && ctx.body.push(
//     //     {
//     //         name:'jerry'
//     //     }
//     // )
//     console.log('url' + ctx.url)
//     router[ctx.url](ctx)
// })
app.use(async (ctx, next) => {
  const start = new Date().getTime()
  console.log(`start: ${ctx.url}`)
  await next()
  const end = new Date().getTime()
  console.log(`请求${ctx.url}, 耗时${parseInt(end - start)}ms`)
})

app.use(require('koa-static')(__dirname + '/'))
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
// let n = 0
// let timer = function() {
//   n++
//   console.warn(`TCL: 第${n}次`, new Date())
//   let dom = document.querySelector(
//     '#ssr-wrapper > div > div.hub-ftt-tw.person-one-h5 > div.hub-ftt-mb-v2 > div > div.hub-ftt-mb-integer.task-shark > div'
//   )
//   if (dom && dom.innerText.includes('领取')) {
//     dom.click()
//     setTimeout(() => {
//       let rewardDom = document.querySelector(
//         'body > div:nth-child(18) > div > div.modal-popup-content.show-act > div > div.hub-ftt-integer-step-one-content > div.hub-ftt-integer-step-one-btn'
//       )
//       rewardDom.click()
//     }, 1000)
//   }
// }
// timer()
// let timerId = setInterval(() => {
//   timer()
// }, 60 * 60 * 1000)
// setInterval(() => {
//   console.warn('测试', timerId)
// }, 60 * 1000)
