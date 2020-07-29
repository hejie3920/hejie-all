#! /usr/bin/env node

const program = require("commander")
program.action(async (name) => {
  console.log("name", name)
  // const { clone } = require("../lib/download")
  // await clone("github:su37josephxia/vue-template", name)
})
program.parse(process.argv)
