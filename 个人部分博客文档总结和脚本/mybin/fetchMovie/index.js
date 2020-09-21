const fs = require('fs')
const strategy = require('./utils/strategy')
const config = require('./config')
const { isEmpty } = require('../util')
const cheerio = require('cheerio')

start()
async function start() {
  let res = []
  // 随便做做，没空更新，只补充了爱奇艺抓取电影列表以及非爱奇艺抓取特定电影的方法
  if (config.fname) {
    config.strategyListExcept.push('爱奇艺')
  } else {
    config.strategyList = ['爱奇艺']
  }
  for (const i in strategy) {
    if (!isEmpty(config.strategyList) && !config.strategyList.includes(i))
      continue
    if (
      !isEmpty(config.strategyListExcept) &&
      config.strategyListExcept.includes(i)
    )
      continue
    let target = strategy[i]
    let data = await fetchByPlatform(target)
    data.unshift(i)
    res = res.concat(data)
  }
  saveToFile(res)
}

async function fetchByPlatform(p) {
  // 抓取
  let html = await fetchHandler(p.fetcher)
  // 爬虫解析
  let tmp = p.parser(cheerio.load(String(html)))
  let list = tmp.resList ? tmp.resList : tmp
  // 转化
  let res = Array.from(list).reduce((prev, item) => {
    let a = item.attribs
    if (a && a.href) {
      let obj = (tmp.generator && tmp.generator(a)) || {
        title: a.title,
        href: (p.prefix ? p.prefix : '') + a.href
      }
      prev.push(obj)
    }
    return prev
  }, [])

  return Promise.resolve(res)
}
function fetchHandler(fetcher) {
  let promiseList = []
  for (let i = 1; i <= config.pageMaxNum; i++) {
    promiseList.push(fetcher(i))
  }
  return Promise.all(promiseList)
}
function saveToFile(data) {
  let str = data
    .map(item => {
      if (!item.href) {
        return `\n--------- ${item} -------------\n`
      } else {
        const { title, href } = item
        return `${title} - ${href}`
      }
    })
    .join('\n')
  fs.writeFile(config.outputPath, str, { flag: 'w+' }, err => {
    if (err) console.log(err)
  })
}
