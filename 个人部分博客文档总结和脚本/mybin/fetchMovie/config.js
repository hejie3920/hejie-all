let config = {
  pageMaxNum: '4',
  // 要抓取的电影名，如果注释掉或者不填的话就开启抓取爱奇艺最新免费电影列表，抓取4页
  fname: encodeURI('囧妈'),
  parseURL: 'http://vip.jlsprh.com/index.php?url=',
  outputPath: './data.txt',
  // 只抓取特定网站
  // strategyList: ['nfmovies'],
  // 抓取时排除的网站
  strategyListExcept: []
}
config.pageMaxNum = config.fname ? '1' : config.pageMaxNum

module.exports = config
