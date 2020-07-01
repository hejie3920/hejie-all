const rewireTypescript = require('react-app-rewire-typescript')
module.exports = (config, env) => {
  config = rewireTypescript(config, env)
  return config
}
