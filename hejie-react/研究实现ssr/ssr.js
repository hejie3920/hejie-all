const express = require("express")
const app = express()
const axios = require("axios")
const puppeteer = require("puppeteer")

// 截图有点慢，要加缓存
const urlCache = {}

app.get("*", async function(req, res) {
  if (req.url == "/favicon.ico") {
    return res.send({ code: 0 })
  }

  const url = "http://127.0.0.1:3370" + req.url
  // 加缓存
  // 2. lru缓存算法进行缓存加减
  if (urlCache[url]) {
    res.send(urlCache[url])
  }
  // 第二种，prerender库，预渲染，遍历所有路由，都写成html文件，或者都缓存上

  console.log("TCL: 开始截图", url)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: ["networkidle0"]
  })
  const html = await page.content()
  // await page.screenshot({ path: "shot.png" })
  // await browser.close()

  urlCache[url] = html
  res.send(html)
})
app.listen(8081, () => {
  console.log(`ssr puppeteer 爬虫服务开启，server listen on: http://127.0.0.1:8081 `)
})
