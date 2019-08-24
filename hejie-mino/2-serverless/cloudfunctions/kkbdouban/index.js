// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const doubanbook = require('doubanbook')
const cheerio = require('cheerio')
cloud.init()
async function searchDouban(isbn){
  const url = 'https://book.douban.com/subject_search?search_text='+isbn
  let res = await axios.get(url)
  // 1. 数据拿出来
  let reg = /window\.__DATA__ = "(.*)"/
  if(reg.test(res.data)){
    let searchData = doubanbook(RegExp.$1)[0]
    console.log(searchData)
    return searchData
  }
}
// searchDouban('9787115275790')
// 云函数入口函数
// 返回的main函数
exports.main = async (event, context) => {
  let isbn = event.isbn
  let info = await searchDouban(isbn)
  const detailPage = await axios.get(info.url)
  let $ = cheerio.load(detailPage.data)
  let summary = $('#link-report .intro').text()
  let authorInfo = $('#info').text().split('\n').map(v=>v.trim()).filter(v=>v)
  let author = authorInfo[1]
  return {
    // info,
    create_time: new Date().getTime(),
    author,
    summary,
    image:info.cover_url,
    rate:info.rating.value,
    alt:info.url,
    title:info.title
    // event,
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
  }
}