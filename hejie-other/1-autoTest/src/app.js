const Koa = require('./hejie')
const Router = require('./router')
const koaStatic = require('./static')

const app = new Koa()

const router = new Router();

app.use(koaStatic('./public'));

router.get('/index', async ctx => {
  ctx.body = 'index page';
});
router.get('/post', async ctx => {
  ctx.body = 'post page';
});
router.get('/list', async ctx => {
  ctx.body = 'list page';
});

router.post('/index', async ctx => {
  ctx.body = 'post page';
});

// 路由实例输出父中间件 router.routes()
app.use(router.routes());


app.listen(9092, () => {
  console.log('server runing on port 9092')
})





// const logger = require('./logger')
// const user = require('./user')


// app.use(logger);
// app.use(user);
// function delay(){
//     return new Promise((reslove,reject)=>{
//       setTimeout(()=>{
//         reslove()
//       },2000)
//     })
//   }

//   app.use(async (ctx,next)=>{
//     ctx.body = '1'
//     await next()
//     ctx.body += '2'
//   })
//   app.use(async (ctx,next)=>{
//     ctx.body += '3'
//     await delay()
//     await next()
//     ctx.body += '4'
//   })
//   app.use(async (ctx,next)=>{
//     ctx.body += '5'
//   })