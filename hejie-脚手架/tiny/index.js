#! /usr/bin/env node

const Https = require('https')
const Url = require('url')
const Fs = require('fs')
const Path = require('path')
const Chalk = require('chalk')
const Figures = require('figures')
const Ora = require('ora')
const { RandomNum, resolve, byteSize } = require('../util')
const program = require('commander')
const packageConfig = require('../package.json')
program
  .version(packageConfig.version, '-v,--version')
  .usage('<command> [options]')
  .parse(process.argv)

let target = program.args[0]
if (!target) return
const filePath = target.includes('/')
  ? target
  : `/Users/zhanghejie/Desktop/${target}`
const TINYIMG_URL = ['tinyjpg.com', 'tinypng.com']
console.log('TCL: 路径', filePath)

const dir = filePath + '/img'
;(async () => {
  const spinner = Ora('开始压缩......').start()
  if (!Fs.existsSync(dir)) Fs.mkdirSync(dir)
  let files = Fs.readdirSync(filePath).filter(
    item => !item.startsWith('.') && item !== 'img'
  )
  Promise.all(
    files.map(item => {
      return CompressImg(filePath + '/' + item)
    })
  ).then(res => {
    spinner.stop()
    res.forEach(res => console.log(res))
  })
})()

function RandomHeader() {
  const ip = new Array(4)
    .fill(0)
    .map(() => parseInt(Math.random() * 255))
    .join('.')
  const index = RandomNum(0, 1)
  return {
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Postman-Token': Date.now(),
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
      'X-Forwarded-For': ip
    },
    hostname: TINYIMG_URL[index],
    method: 'POST',
    path: '/web/shrink',
    rejectUnauthorized: false
  }
}

function UploadImg(file) {
  const opts = RandomHeader()
  return new Promise((resolve, reject) => {
    const req = Https.request(opts, res =>
      res.on('data', data => {
        const obj = JSON.parse(data.toString())
        obj.error ? reject(obj.message) : resolve(obj)
      })
    )
    req.write(file, 'binary')
    req.on('error', e => reject(e))
    req.end()
  })
}

function DownloadImg(url) {
  const opts = new Url.URL(url)
  return new Promise((resolve, reject) => {
    const req = Https.request(opts, res => {
      let file = ''
      res.setEncoding('binary')
      res.on('data', chunk => (file += chunk))
      res.on('end', () => resolve(file))
    })
    req.on('error', e => reject(e))
    req.end()
  })
}

async function CompressImg(path) {
  try {
    const file = Fs.readFileSync(path, 'binary')
    const obj = await UploadImg(file)
    const data = await DownloadImg(obj.output.url)
    const oldSize = Chalk.redBright(byteSize(obj.input.size))
    const newSize = Chalk.greenBright(byteSize(obj.output.size))
    const ratio = Chalk.blueBright(
      ((1 - obj.output.ratio) * 100).toFixed(2) + '%'
    )

    const msg = `${Figures.tick} 压缩 [${Chalk.yellowBright(
      path
    )}] 完成: 旧大小 ${oldSize}, 新大小 ${newSize}, 压缩了 ${ratio}`
    console.log('CompressImg -> ', Path.basename(path))
    const dpath = Path.join(dir, Path.basename(path))
    Fs.writeFileSync(dpath, data, 'binary')
    return Promise.resolve(msg)
  } catch (err) {
    const msg = `${Figures.cross} 压缩 [${Chalk.yellowBright(
      path
    )}] 失败: ${Chalk.redBright(err)}`
    return Promise.resolve(msg)
  }
}
