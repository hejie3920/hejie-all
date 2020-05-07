const loaderUtils = require("loader-utils")
const schemaValidata = require("schema-utils")

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string"
    }
  }
}

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  schemaValidata(schema, options)
  return source.replace(/World/g, options.name)
}
