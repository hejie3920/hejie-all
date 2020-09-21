const util = require('util')
const config = require('../config')
const fetch = util.promisify(require('./fetch.js'))
const cheerio = require('cheerio')
function fetchAndParse(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      let html = cheerio.load(String(res))
      resolve(html)
    })
  })
}
// http://www.51wzst.com/
// http://www.cechi8.com
// https://www.nfmovies.com
// https://s.kankanwu.com
// https://www.97riju.net

let strategy = {
  kankanwu: {
    prefix: 'https://s.kankanwu.com',
    async fetcher(i) {
      let resList = []
      let prefix = strategy['kankanwu'].prefix
      let $ = await fetchAndParse(
        `${prefix}/vod-search-wd-${config.fname}-p-${i}.html`
      )
      Array.from($('.main ul li>a')).forEach(item => {
        if (item.attribs && item.attribs.href) {
          resList.push(fetch(prefix + item.attribs.href))
        }
      })
      return Promise.all(resList)
    },
    parser($) {
      return $('.play-box .plau-ul-list li a')
    }
  },
  nfmovies: {
    prefix: 'https://www.nfmovies.com',
    async fetcher(i) {
      let prefix = strategy['nfmovies'].prefix
      let resList = []
      let $ = await fetchAndParse(
        `${prefix}/search.php?searchword=${config.fname}`
      )
      Array.from($('.myui-vodlist__media .active .btn-warm')).forEach(item => {
        if (item.attribs && item.attribs.href) {
          resList.push(fetch(prefix + item.attribs.href))
        }
      })
      return Promise.all(resList)
    },
    parser($) {
      return $('.tab-pane .myui-content__list a')
    }
  },
  日剧网: {
    prefix: 'https://www.97riju.net',
    async fetcher(i) {
      let prefix = strategy['日剧网'].prefix
      let resList = []
      let $ = await fetchAndParse(
        `https://www.97riju.net/vodsearch/-------------/?wd=${config.fname}`
      )
      Array.from($('.fed-deta-info .fed-deta-play')).forEach(item => {
        if (item.attribs && item.attribs.href) {
          resList.push(fetch(prefix + item.attribs.href))
        }
      })
      return Promise.all(resList)
    },
    parser($) {
      return $('.fed-play-item .fed-part-eone')
    }
  },
  爱奇艺: {
    fetcher(i) {
      return fetch(
        `https://list.iqiyi.com/www/1/----------0---11-${i}-1-iqiyi--.html`
      )
    },
    parser($) {
      return {
        resList: $('.qy-mod-link-wrap a'),
        generator({ title, href }) {
          return {
            title,
            href: `${config.parseURL + href}`
          }
        }
      }
    }
  }
}

module.exports = strategy
