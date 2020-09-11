#! /usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

program.action(async name => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectName',
        message: '项目叫什么啊？'
      }
    ])
    .then(answer => {
      console.log('answer', answer)
    })
})
program.parse(process.argv)
