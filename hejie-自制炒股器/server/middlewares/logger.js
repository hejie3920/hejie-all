const log4js = require('log4js')
const access = require('./access')
const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark']
const baseInfo = {
  appLogLevel: 'debug',
  dir: 'log',
  env: 'dev',
  projectName: 'koa2',
  serverIp: '0.0.0.0'
}

module.exports = options => {
  const contextLogger = {}
  const appenders = {}
  const opts = Object.assign({}, baseInfo, options || {})
  const { env, appLogLevel, dir, serverIp, projectName } = opts
  const commonInfo = { projectName, serverIp }
  appenders.cheese = {
    type: 'dateFile',
    filename: 'logs/task',
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true
  }
  // 开发的话打印出来
  // if (env === 'dev' || env === 'development') {
  //   appenders.out = {
  //     type: 'console'
  //   }
  // }
  log4js.configure({
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  })
  const logger = log4js.getLogger('cheese')
  return async (ctx, next) => {
    const start = Date.now()
    methods.forEach((method, i) => {
      contextLogger[method] = message => {
        logger[method](access(ctx, message, commonInfo))
      }
    })
    ctx.logger = contextLogger
    await next()
    const end = Date.now()
    const responseTime = end - start
    logger.info(access(ctx, `响应时间${responseTime / 1000}s`, commonInfo))
  }
}
