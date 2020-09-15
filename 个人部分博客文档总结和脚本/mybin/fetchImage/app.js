const Spider = require('./spiderModal.js')
let spider = new Spider({
  urltxt: 'http://www.16sucai.com/tupian/',
  startpage: 3,
  endpage: 4
  // sourcedir : 'images'
})
spider.init()
