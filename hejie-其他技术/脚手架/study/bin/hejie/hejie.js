#! /usr/bin/env node

const program = require("commander")
const packageConfig = require("../../package.json")
program
  .usage("<command> [options]")
  .version(packageConfig.version, "-v,--version")
  .command("init <name>", "init project")
  .command("test <name>", "test sth")
  .command("refresh", "refresh routers....")
program.parse(process.argv)
