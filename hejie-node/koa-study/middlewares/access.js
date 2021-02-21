module.exports = (ctx, message, commonInfo) => {
  const { method, url, host, headers } = ctx.request
  const client = {
    message
    // method,
    // url,
    // host,
    // referer: headers['referer'],
    // userAgent: headers['user-agent']
  }
  return JSON.stringify(Object.assign(commonInfo, client))
}
