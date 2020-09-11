#!/usr/bin/env node

const program = require("commander")
const symbols = require("log-symbols")
const chalk = require("chalk")
// console.log(process.argv)
program.action(() => {
  console.log("refresh .... ")
})
program.parse(process.argv)

const fs = require("fs")
const handlebars = require("handlebars")

const list = fs
  .readdirSync("./src/views")
  .filter((v) => v !== "Home.vue")
  .map((v) => ({
    name: v.replace(".vue", "").toLowerCase(),
    file: v
  }))
compile(
  {
    list
  },
  "./src/router.js",
  "./template/router.js.hbs"
)

compile(
  {
    list
  },
  "./src/App.vue",
  "./template/App.vue.hbs"
)

function compile(mata, filePath, templatePath) {
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath).toString()
    const result = handlebars.compile(content)(mata)
    fs.writeFileSync(filePath, result)
  }
  console.log(symbols.success, chalk.green(`🚀${filePath} 创建成功`))
}
