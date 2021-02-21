const fundService = require('../service/fund')
const upload = require('koa-multer')({
  dest: '../uploads/'
})

module.exports = {
  index: async (ctx, next) => {
    ctx.body = '首页'
  },
  about: async (ctx, next) => {
    ctx.body = '关于页'
  },
  views: async (ctx, next) => {
    ctx.body = ctx.state.views
  },
  userList: async (ctx, next) => {
    const users = await fundService.userList()
    ctx.type = 'jsonMIME'
    ctx.body = {
      status: 0,
      data: users
    }
  },
  addUser: async (ctx, next) => {
    const { name, age, sex } = ctx.query
    const users = await fundService.addUser({ name, age, sex })
    ctx.body = {
      status: 0,
      data: users
    }
  },
  upload: async (ctx, next) => {
    ctx.body = `
    <form action="/profile" enctype="multipart/form-data" method='post'>
      选择图片：<input type="file" name="avatar" id="upfile" />
      <button type="submit">提交</button>
    </form>`
  },
  profile: upload.single('avatar'),
  user: async (ctx, next) => {
    ctx.body = `<form action="/login" method="POST">
      用户：
      <input type="text" name="name" />
      密码：
      <input type="password" name="password" />
      <button type="submit">提交</button>
    </form>`
  },
  login: async (ctx, next) => {
    const { name, password } = ctx.request.body
    let data = await fundService.login(name, password)
    ctx.body = data
  }
}
