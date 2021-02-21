const path = require('path')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')
const koaSession = require('koa-session')
// const redis = require('redis')
// const client = redis.createClient(6379, '127.0.0.1')
// const { promisify } = require('util')
const logger = require('./logger')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = app => {
  // koa-session用来持久化会话，但不同的浏览器请求的会话信息是不一致的，这就导致信息不能再服务端共享
  // 所以一般都是结合redis
  app.keys = ['my secret hurt']
  // const hgetallAsync = promisify(client.hgetall).bind(client)
  // const store = {
  //   get: async (key, maxAge) => {
  //     return await hgetallAsync(key)
  //   },
  //   set: async (key, sess, maxAge) => {
  //     return await client.hmset(key, sess)
  //   },
  //   destroy: key => {
  //     client.hdel(key)
  //   }
  // }
  const sessionConfig = {
    key: 'koa:session',
    maxAge: 60 * 60 * 1000,
    overwrite: true,
    httpOnly: true,
    signed: true
    // 配置 redis
    // store
  }

  app
    .use(logger())
    .use(koaSession(sessionConfig, app))
    .use(static(resolve('../static'), { maxage: 30 * 24 * 60 * 60 * 1000, index: 'index.html' }))
    .use(bodyparser())
}
