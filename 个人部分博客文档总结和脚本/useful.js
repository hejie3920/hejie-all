// 全局的工具类，在vue文件里面直接用 this.$global可以调用，之所以建这个文件是因为
// utils这个文件有点冗余，每次调用都需要引入，而且不统一，现在直接将公共方法挂载在原型上方便直接引用
import { getExcludeChannels, uploadImgApi, getMtListByLabelApi, toPayApi } from '@/service'
import { Toast } from 'mint-ui'
import QRCode from 'qrcodejs2'
import { getWeixinAppID } from '@/config/weixin-auth.js'
import Vue from 'vue'
import moment from 'moment'
import qs from 'qs'
import { compressImg } from '@/config/utils'
import store from '../store/index'

let vm = Vue.prototype
let noScroll = function (e) {
  e.preventDefault() //阻止默认的处理方式(阻止下拉滑动的效果)
}
/**
 * 过滤请求参数的所有空值
   import { filterParams } from '../../config/utils'
   filterParams(params)
 */
export const toType = obj => {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}

export function filterParams(o) {
  if (!o || Object.keys(o).length === 0) return o
  for (const key in o) {
    if (o[key] == null) delete o[key]
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
      if (o[key] === '') delete o[key]
    } else if (toType(o[key]) === 'object') {
      o[key] = filterParams(o[key])
      if (JSON.stringify(o[key]) === '{}') delete o[key]
    } else if (toType(o[key]) === 'array') {
      o[key] = filterParams(o[key])
      o[key] = o[key].filter(arr => arr)
      if (o[key].length === 0) delete o[key]
    }
  }
  return o
}

export default {
  // 实现可选链,可以方便开发直接取出一个特定属性的值，确保取值时如果遇到某一层没数据不会报错，直接返回false
  // 第三个参数是强化功能，如果目标值转布尔后是false，或者是空值，比如空数组或者空对象时会自动过滤转成false
  // 直接获取某个object，可以是数组里面的特定的值，一层层解开属性，一旦遇到空集便返回空字符串
  // this.vote = getObjVal(tmp, ['voteInfo', 'voteOutputVo', 'voteOptionList'])
  // 相当于 this.vote = tmp && tmp.voteInfo && tmp.voteInfo.voteOutputVo && tmp.voteInfo.voteOutputVo.voteOptionList
  getObjVal(obj, keyMap = [], shouldFilterEmpty = true) {
    let res = obj
    let tmp
    if (typeof obj !== 'object' || keyMap.length < 1 || !obj) return false
    else if (keyMap && keyMap.length > 0) {
      for (let i = 0; i < keyMap.length; i++) {
        tmp = res[keyMap[i]]
        if (i !== keyMap.length - 1 && (tmp === null || typeof tmp !== 'object')) {
          return false
        } else {
          res = tmp
        }
      }
    }
    if (
      shouldFilterEmpty &&
      typeof res === 'object' &&
      ([null, undefined].includes(res) || Object.keys(res).length === 0)
    ) {
      return ''
    }
    return res
  },
  // 处理图片，默认处理为不变形的方形缩略图
  // 参数2是默认图片，参数3是处理字段，传null都为不处理，传''为默认
  // 参数4是给图片加id，以?查询参数加在图片src后面，用来v-viewer预览时自定义标题时用到
  // 参数3是默认处理函数，这里默认会将图片不变形按正方形裁剪，传null则不处理
  // 有三种传的方式，
  // 1：自定义的#宽_高这种快速裁切的方式，会默认直接按最居中caover的形式来裁切,比如'#300_300'
  // 2: ’watermark',直接加水印
  // 3：oss的字段，不需要开头这一串x-oss-process=image/
  // https://help.aliyun.com/document_detail/44688.html
  formatImg(img, defaultImg = '', ossStr = '', id = -1) {
    defaultImg = defaultImg === '' ? '//images-w.oola.cn/oolaimgs/oolam/common/img-thumb.png' : defaultImg
    // 默认裁切成120*120的方型图
    ossStr = ossStr === '' ? '#120_120' : ossStr
    // 如果是水印
    if (ossStr === 'watermark') {
      ossStr =
        'resize,w_440/watermark,type_d3F5LXplbmhlaQ,size_24,text_5Zu-54mH5LuF5L6b5Zmi5ZWm5L2_55So,color_FFFFFF,t_100,g_se,x_10,y_10'
    }
    // 如果是自定义的以#开头直接定义宽高的
    else if (ossStr && ossStr.startsWith('#')) {
      let val = ossStr.split('#')[1]
      if (val) {
        let wh = val.split('_')
        let w = wh[0]
        let h = wh[1]
        ossStr = `resize,m_fill,h_${h},w_${w},limit_0`
      }
    }
    let res = /\./.test(img) ? img : defaultImg
    if (!res.includes('x-oss-process') && ossStr !== null) {
      res += res.includes('?') ? `&x-oss-process=image/${ossStr}` : `?x-oss-process=image/${ossStr}`
    }
    if (id != -1) {
      res += res.includes('?') ? `&imgId=${id}` : `?imgId=${id}`
    }
    return res
  },
  //   打点
  //   pageType: "act_donation"
  //   this.$fbi.sendServer({ pageType: this.pageType,action: "pagevisit" })
  //   this.$fbi.sendServer({
  //     pageType: this.pageType,
  //     action: "click",
  //     text: "donation"
  //   })
  // 可判断任何参数是不是空，包括是不是空对象空数组等等
  isEmpty(val) {
    if (!val) {
      return true
    } else {
      return Object.keys(val).length === 0
    }
  },
  canPageScroll(can = true) {
    if (can) {
      document.body.removeEventListener('touchmove', noScroll, true)
    } else {
      document.body.addEventListener('touchmove', noScroll, {
        passive: false,
        capture: true
      })
    }
  },
  // 单例模式
  getSingle(fn) {
    let instance
    return function () {
      return instance || (instance = fn.apply(this, arguments))
    }
  },
  // 处理安卓ios各种键盘问题
  inputBlur(scroll = true) {
    console.log('TCL: inputBlur: 处理失焦')
    setTimeout(() => {
      // 获取clientHeight直接触发重绘，用来解决键盘收起时底部空白的问题
      document.body.clientHeight
      // 下面这个scrollTo是用来解决键盘回收问题，不过副作用是会直接滑到顶部，有些情况下不用滚动，直接重绘就能解决的话可以直接关掉这个滚动
      if (scroll) {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = document.body.scrollTop = 0
      }
    }, 100)
  },
  // 滑到最底部
  inputFocus() {
    window.scroll({
      top: document.body.clientHeight,
      left: 0,
      behavior: 'smooth'
    })
  },
  // 滑到最底部
  scrollToTop(dom) {
    dom = dom || document.getElementById('app')
    if (dom) {
      dom.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  /**
   * @description 防抖， 多用于滚动事件， 用户没有滚动后开始触发事件,返回一个防抖函数，注意是返回一个函数
   * @return 防抖函数
   * @param {*} func 外面传入的箭头函数
   * @param {number} [delay=500] 默认防抖时长
   * @example
   * this.debounceFunc = this.$global.debounce(this.scrollFunc【需要防抖的函数】)
   * window.addEventListener("scroll", this.debounceFunc)
   */
  debounce(func, wait = 200, needRunAtFirst = true) {
    // 缓存一个定时器id
    let timer = 0
    let firstTime = needRunAtFirst
    // 这里返回的函数是每次用户实际调用的防抖函数 // 如果已经设定过定时器了就清空上一次的定时器 // 开始一个新的定时器，延迟执行用户传入的方法
    return function () {
      let _this = this
      if (firstTime) {
        func.apply(_this, arguments)
        firstTime = false
      } else {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(_this, arguments)
          firstTime = needRunAtFirst
        }, wait)
      }
    }
  },
  // 深拷贝
  deepCopy(obj) {
    let result = ''
    if (obj === null) {
      result = null
    }
    //判断是否是简单数据类型，
    else if (typeof obj == 'object') {
      //复杂数据类型
      result = obj && obj.constructor == Array ? [] : {}
      for (let i in obj) {
        result[i] = typeof obj[i] == 'object' ? this.deepCopy(obj[i]) : obj[i]
      }
    } else {
      //简单数据类型 直接 == 赋值
      result = obj
    }
    return result
  },
  /**
   * @description 节流函数，固定一段时间触发一次，返回一个节流函数
   * @param {*} func 节流执行的箭头函数
   * @param {number} [wait=1000] 固定时间间隔
   * @example
   * this.throttleFunc = this.$global.throttle(this.scrollFunc【需要节流的函数】)
   * window.addEventListener("scroll", this.throttleFunc)
   */
  throttle(fn, interval = 200) {
    let timer, // 定时器
      firstTime = true // 是否是第一次调用
    return function () {
      let _this = this
      let args = arguments
      if (firstTime) {
        // 如果是第一次调用，不需延迟执行
        fn.apply(_this, args)
        firstTime = false
        return
      }
      if (timer) {
        return false
      }
      timer = setTimeout(function () {
        clearTimeout(timer)
        timer = null
        fn.apply(_this, args)
      }, interval)
    }
  },
  /**
   * @description 处理地址
   * @param item 地址全部数据， type: 处理类型， recycleAddr(回收地址)， offlinepointAddr(线下回收点地址展示)
   * @warn 注意，这里的item是传引用过来的，不要对item做任何操作，因为这会影响外部的真实数据
   */
  filterAddr(item, type = 'recycleAddr') {
    let res = ''
    let finalKeyMap = []
    switch (type) {
      case 'recycleAddr':
        finalKeyMap = ['provinceName', 'cityName', 'areaName', 'landmarkBuilding', 'doorNumber']
        break
      case 'offlinepointAddr':
        finalKeyMap = ['provinceName', 'cityName', 'areatName', 'address']
        break
      default:
        break
    }
    finalKeyMap.forEach(c => {
      if (item[c]) {
        res += item[c]
      }
    })
    if (type === 'recycleAddr') {
      if (item.address && item.address.match(/省|市|区/g) && !res.match(/省|市|区/g)) res = item.address + res
    }
    return res
  },
  // 检查渠道是否在忽略渠道里,如果是忽略渠道返回true，否则false
  checkiIsChannelIgnore(channel = '') {
    return new Promise((resolve, reject) => {
      getExcludeChannels().then(ignoreChannelsRes => {
        let ignoreChannels = []
        if (ignoreChannelsRes && ignoreChannelsRes.info && ignoreChannelsRes.info.channelCodes) {
          ignoreChannels = ignoreChannelsRes.info.channelCodes.split(',')
        }
        let channelCode = channel || sessionStorage.getItem('channelCode')
        resolve(ignoreChannels.includes(channelCode))
      })
    })
  },
  /**
   * @description 上传图片
   * @param e 图片更改事件
   */
  uploadImg(e) {
    let file = e.target.files[0]
    let img = new Image()
    img.src = window.URL.createObjectURL(file)
    let formData = new FormData()
    // 读文件成功的回调
    if (img.src) {
      return new Promise((resolve, reject) => {
        store.commit('setLoading', '上传中')
        // 调用压缩函数
        compressImg(img).then(res => {
          // 必须设置file.name 否则上传到后台取不到文件的 originalFilename
          formData.append('img', res, file.name)
          uploadImgApi(formData)
            .then(res => {
              store.commit('setLoading', false)
              if (res.status == 'true' && res.info) {
                resolve(res.info)
              } else {
                reject(res)
                Toast(res.msg || '很抱歉，网络故障，请稍后再试~')
              }
            })
            .catch(err => store.commit('setLoading', false))
        })
      })
    }
  },
  // 设置cookie，time毫秒单位
  // 比如存1秒: 1 * 1000, 1 小时: 1 * 60 * 60 * 1000, 1 天: 1 * 24 * 60 * 60 * 1000
  setCookie(name, value, time = '', path = '/', domain = '') {
    var exp = new Date()
    exp.setTime(exp.getTime() + time)
    let expires = time ? ';expires=' + exp.toGMTString() : ''
    let tmp = value ? escape(value) : ''
    document.cookie = name + '=' + tmp + expires + ';path=' + path + (domain ? `;domain=${domain}` : '')
  },
  getCookie(key) {
    let value
    let cookies = document.cookie.split(';')
    for (let i = 0, len = cookies.length; i < len; i++) {
      let cur = cookies[i]
      if (key.trim() === cur.split('=')[0].trim()) {
        value = cur.split('=')[1]
        break
      }
    }
    return value ? unescape(value) : ''
  },
  // 获取渠道channelCode
  getChannelCode() {
    return sessionStorage.getItem('channelCode')
  },
  setChannelCode(channelCode) {
    return sessionStorage.setItem('channelCode', channelCode)
  },
  // 参数二代表保留几位小数，整数的话不处理，参数三代表是否进行千位符分割
  formatNum(num, point = 2, shouldSplit = false) {
    if (typeof +num !== 'number' || isNaN(+num)) return 0
    let s = Number(num)
    if (/\./.test(s)) {
      s = s.toFixed(point)
    }
    if (shouldSplit) {
      s = s + ''
      let tmp = s.split('.')
      let left = tmp[0]
      let right = tmp[1] || ''
      let reg = /\d{1,3}(?=(\d{3})+$)/g
      return left.replace(reg, '$&,') + (right ? `.${right}` : '')
    }
    return Number(s)
  },
  formatTime(time, formatStr = 'YYYY年MM月DD日') {
    if (!time) return
    return moment(time).format(formatStr)
  },
  getTimeRemain(endDate, startDate = Date.now()) {
    var diff = endDate - startDate //时间差的毫秒数
    if (diff < 0) return 0
    //计算出相差天数
    var days = Math.floor(diff / (24 * 3600 * 1000))
    //计算出小时数
    var leave1 = diff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000))
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    return days + '天' + hours + '时' + minutes + '分' + seconds + '秒'
  },
  // 按几分钟前来格式化时间
  formatTimeByDiff(time, options = {}) {
    if (!time) return
    time = moment(time)
    let diff = moment().diff(time, 'minutes')
    let res = ''
    if (diff < 10) {
      res = '刚刚'
    } else if (diff < 60) {
      res = `${diff}分钟前`
    } else if (diff < 60 * 24) {
      res = `${Math.floor(diff / 60)}小时前`
    } else {
      res = time.format('YYYY-MM-DD')
    }
    return res
  },
  getTime(time) {
    let res = time
    if (!time) {
      console.warn('TCL: 没有传入有效时间！')
      return
    }
    let u = navigator.userAgent
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isiOS) {
      // 处理ios时间格式问题
      res = res.replace(/-|\./g, '/')
    }
    return new Date(res).valueOf()
  },
  // 加密处理银行卡号，默认是普通脱敏
  formatBankCard(val, type = 'normal') {
    if (!val) return
    val = String(val)
    let reg,
      res = ''
    switch (type) {
      case 'normal':
        reg = /^(\d{4})\d+(\d{4})$/
        res = val.replace(reg, '$1****$2')
        break
      default:
        break
    }
    return res
  },
  // 获取自由列表数据并处理
  getFreeDataList(lcode, rcode) {
    return new Promise((resolve, reject) => {
      getMtListByLabelApi(lcode, rcode).then(res => {
        if (res.status == 'true' && res.info && res.info.result) {
          let tmp = res.info.result
          tmp = tmp.filter(i => i.status)
          tmp.forEach((item, index) => {
            let extendsArr = JSON.parse(item.extendsField)
            extendsArr.forEach((c, idx) => {
              item[`extendsField${idx + 1}`] = c.content
            })
          })
          resolve(tmp)
        } else {
          Toast(res.msg || '很抱歉，网络故障，请稍后再试~')
          resolve(res.msg)
        }
      })
    })
  },
  // 修改url里面?后面某个参数的值，
  // 没有指定的值话就添加，有的话就修改，传入的值是空的话就会删掉路径上的参数
  // 用于局部刷新下需要改变url地址，配合history.pushState使用
  changeUrlQuery(arg, arg_val, url) {
    if (!url) url = location.href
    let pattern1 = `?${arg}=`
    let pattern2 = `&${arg}=`
    let replaceText = arg_val ? `${arg}=${arg_val}` : ''
    let tmp
    if (url.includes(pattern1)) {
      let reg = `/\\?${arg}=([^&]*)/gi`
      let regHaveOther = `/\\?${arg}=([^&]*)&/`
      if (!replaceText && url.match(eval(regHaveOther))) {
        tmp = url.replace(eval(regHaveOther), '?')
      } else if (!replaceText) {
        tmp = url.replace(eval(reg), '')
      } else {
        tmp = url.replace(eval(reg), '?' + replaceText)
      }
      return tmp
    } else if (url.includes(pattern2)) {
      let reg = `/(&${arg}=)([^&]*)/gi`
      if (arg_val) replaceText = '&' + replaceText
      tmp = url.replace(eval(reg), replaceText)
      return tmp
    } else {
      if (!replaceText) return url
      else {
        if (url.match('[?]')) {
          return url + '&' + replaceText
        } else {
          return url + '?' + replaceText
        }
      }
    }
  },
  // 这个函数很好用，传入地址以及想要拼接的query参数对象，会自动对query进行去重滤空并返回最后的结果，结果默认是会转为绝对地址http(s)开头的
  // 1. 参数1是url，可以是带参数的，可以是/开头相对地址也可以是http开头的绝对地址，
  // 如果设置了toHttpLink代表会转换成绝对地址，默认是开启，但有时如果只是需要router.push站内跳转则可以设置为false
  // 2. 参数2是想要拼接的query,默认都会有channel，这个函数做了强化，会自动解析出参数1里面的url里面的query并转成对象，
  // 然后参数2相当于Object.assign的最后一个参,是强覆盖，会对最终query进行去重以及过滤掉空值，null和undefined再拼接返回最后的结果
  joinQuery(url, query = {}, toHttpLink = true) {
    if (!url) return
    if (toHttpLink) {
      url = url.startsWith('http') ? url : location.origin + location.pathname + '#' + url
    }
    let path = url.split('?')[0]
    let q = url.split('?')[1]
    let queryObj = q ? qs.parse(q) : {}
    queryObj = Object.assign(
      {
        channel: sessionStorage.getItem('channelCode')
      },
      queryObj,
      query
    )
    let pairs = ''
    if (queryObj && Object.keys(queryObj).length > 0) {
      for (const i in queryObj) {
        if (['undefined', 'null', ''].includes(queryObj[i])) {
          delete queryObj[i]
        }
      }
    }
    pairs = Object.keys(queryObj).length > 0 ? qs.stringify(queryObj) : ''
    path = pairs ? path + '?' + pairs : path
    return path
  },
  // 用法：第一个参数，节点id，第二个参数option会复写默认option
  // this.$global.getQrcode('qrcode',{
  //   width: 65,
  //   height: 65, // 高度
  //   text: this.certificateSet.extendB, // 二维码内容
  // })
  getQrcode(dom = 'qrcode', option = {}) {
    if (dom && option.text) {
      document.getElementById(dom).innerHTML = ''
      let defaultOption = {
        width: 60,
        height: 60, // 高度
        text: '', // 二维码内容
        correctLevel: QRCode.CorrectLevel.L
      }
      let finalOption = Object.assign({}, defaultOption, option)
      new QRCode(dom, finalOption)
    } else {
      console.error('生成二维码失败，没有接收到二维码文本')
    }
  },
  mockArr(arr, number = 5) {
    for (let i = 0; i < number; i++) {
      arr = arr.concat(arr)
    }
    return arr
  },
  // 公共的字典
  commonDictionary(arg, type = 'day') {
    let dictionary
    switch (type) {
      case 'day':
        dictionary = {
          1: '星期一',
          2: '星期二',
          3: '星期三',
          4: '星期四',
          5: '星期五',
          6: '星期六',
          7: '星期日'
        }
        break
      case 'orderStatus':
        dictionary = {
          0: '客户取消',
          1: '待发货',
          2: '已发货',
          3: '兑换成功',
          4: '商家取消',
          5: '超时取消'
        }
        break
      default:
        break
    }
    return dictionary[arg]
  },
  // 公共的正则
  commonReg(val, type = 'isPhone', option = {}) {
    let regObj = {
      isPhone: /^1[3-9]\d{9}$/,
      isEmail: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      isId() {
        if (val.length === 18) {
          let re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
          let arrSplit = val.match(re) // 检查生日日期是否正确，value就是身份证号
          let dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
          let bGoodDay = ''
          bGoodDay =
            dtmBirth.getFullYear() === Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
            dtmBirth.getDate() === Number(arrSplit[4])
          if (!bGoodDay) {
            return false
          } else {
            // 检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            let valnum = ''
            let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
            let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
            let nTemp = 0
            for (let i = 0; i < 17; i++) {
              nTemp += val.substr(i, 1) * arrInt[i]
            }
            valnum = arrCh[nTemp % 11]
            if (valnum !== val.substr(17, 1)) {
              // alert('18位身份证的校验码不正确！应该为：' + valnum)
              return false
            }
            return true
          }
        } else {
          return false
        }
      },
      isNumber() {
        if (val === '' || val == null || isNaN(val)) return false
        // 如果不允许小数
        if (!option || !option.canBeFloat) {
          return parseInt(val) === Number(val)
        } else {
          return true
        }
      },
      required() {
        if (typeof val === 'object') {
          return Object.keys(val).length !== 0
        } else {
          // 默认0是有效数值是代表true，但如果配置了noZero，则0会设置为false
          return option && option.noZero ? !!val : val === 0 || !!val
        }
      }
    }
    let reg = regObj[type]
    if (!reg) {
      console.log('找不到相应的正则表达式')
      return false
    }
    if (typeof reg === 'function') return reg()
    else return reg.test(val)
  },
  // 微信支付
  wxPay(params = {}, options = {}) {
    if (window.startPay === undefined) {
      console.warn(
        `这是个警告，调支付接口的时候ios会有一个bug，ios获取的地址是刚进来的地址，所以会支付时会提示当前页面URL未注册，此时需要手动locaiton.reload()
        window.startPay就是用来解决这问题的，可以全局查找window.startPay查看如何解决，这里判定没有加上这么一层解决方法的话会抛出warning，问题详见
        https://blog.csdn.net/xuyulong1993/article/details/112508364`
      )
    }
    if (vm.$platform.name !== 'wx') {
      Toast('请在微信内打开访问')
      return
    }
    let dataObj = Object.assign(
      {},
      {
        appid: getWeixinAppID(),
        prepayRecordId: this.prepayRecordId,
        tradeType: 'JSAPI',
        deviceInfo: 'WEB',
        openId: localStorage.openid
      },
      params
    )
    if (Object.keys(dataObj).find(item => !item)) {
      Toast('缺少必要支付参数！')
      return false
    }
    toPayApi(dataObj).then(res => {
      console.log('wxPay -> res', res)
      if (res.status == 'true' && res.info) {
        let data = res.info
        let defaultOptions = {
          timestamp: data.payRequestInfo.timeStamp,
          nonceStr: data.payRequestInfo.nonceStr,
          package: data.payRequestInfo.package,
          signType: data.payRequestInfo.signType,
          paySign: data.payRequestInfo.paySign,
          success: res => {
            Toast('支付成功')
          },
          cancel: res => {
            console.log('取消支付', res)
          },
          fail: err => {
            Toast('支付失败')
            console.log('fail', err)
          }
        }
        let finalOptions = Object.assign({}, defaultOptions, options)
        console.log('wxPay -> finalOptions', finalOptions)
        /**
         * 调起微信支付弹窗
         */
        const wx = window.wx
        if (!/wxpay|activities/g.test(location.href)) {
          console.error(`这里支付目录需要在微信支付后台配置，配置时需要配置#后的一级目录，
          现在已配置的有wxpay和activities,请按我们团队约定将路由路径命名为这些目标路径下，否则会提示当前页面URl未注册
          ，注册授权目录的地址在这：https://pay.weixin.qq.com/index.php/extend/pay_setting
          `)
        }
        wx.ready(() => {
          wx.chooseWXPay(finalOptions)
        })
      } else {
        Toast(res.msg || '支付未成功')
      }
    })
  },
  // 从一个数组里面随机取出count个数值，返回结果数组
  getRandomElements(arr, count) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp,
      index
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random())
      temp = shuffled[index]
      shuffled[index] = shuffled[i]
      shuffled[i] = temp
    }
    return shuffled.slice(min)
  },
  // 原来判断是不是安卓app或者iosapp的方法比较分散或者就失效根本没用了，现在在这里统一处理整合一下
  isAndroidOolaApp() {
    let u = navigator.userAgent
    return vm.$platform.name === 'oola' && (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1)
  },
  isIosOolaApp() {
    let u = navigator.userAgent
    return vm.$platform.name === 'oola' && !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  isWechat() {
    return vm.$platform.name === 'wx'
  },
  isIos() {
    let u = navigator.userAgent
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  },
  isAndroid() {
    let u = navigator.userAgent
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  }
}

import crypto from 'crypto-js/hmac-sha256'
let scriptMap = {}
export function inputFocus(input) {
  if (getDeviceType() === 'pc' || !input) return
  // const ua = window.navigator.userAgent
  // const iOS = /iPad|iPhone|iPod/.test(ua)
  setTimeout(() => {
    document.body.scrollTop = document.body.scrollHeight
    input.scrollIntoView && input.scrollIntoView(false)
    // if (iOS) {
    //   if (!/OS 11_[0-3]\D/.test(ua)) {
    //     document.body.scrollTop = document.body.scrollHeight
    //   }
    // } else {
    //   input.scrollIntoView && input.scrollIntoView(false)
    // }
  }, 400)
}
export function openNewUrl(url) {
  // let a = $('#huya-alink')
  // if (!a) return
  // a.href = url
  // a.click()
  let w
  w = window.open('about:blank')
  setTimeout(() => {
    w.location = url
    setTimeout(() => {
      w.close()
    }, 6000)
  }, 300)
  // var form = document.createElement('form')
  // form.action = url
  // form.target = '_blank'
  // form.method = 'POST'
  // document.body.appendChild(form)
  // form.submit()
}
export function isEmpty(val) {
  if (!val) {
    return true
  } else {
    return Object.keys(val).length === 0
  }
}
export function addEvent(parent = '', eventMap = {}, triggerMap = {}) {
  $('[data-id]', parent, true).forEach(dom => {
    let id = dom.dataset?.id
    let evts = []
    if (id.includes('-')) {
      evts = id.split('-')
    } else {
      evts = [id]
    }
    if (id && !dom.getAttribute('event-added')) {
      evts.forEach(item => {
        let trigger = triggerMap[item] || 'click'
        dom[`on${trigger}`] = eventMap[item]
        dom.setAttribute('event-added', true)
      })
    }
  })
}
export function setLoading(status = true) {
  let target = window.HuyaLoginSDK
  if (!target) {
    window.parent.postMessage(
      {
        type: 'setLoading',
        data: status
      },
      '*'
    )
  } else {
    target.loading.setLoading(status)
  }
}
export function setToast(txt = '', delay) {
  let target = window.HuyaLoginSDK
  if (!target) {
    window.parent.postMessage(
      {
        type: 'setToast',
        data: { txt, delay }
      },
      '*'
    )
  } else {
    target.toast.setToast(txt, delay)
  }
}
export function $(str, parent = '', selectAll = false) {
  parent = parent || document
  let res = ''
  if (str) {
    if (!selectAll) {
      res = parent.querySelector(str)
    } else {
      res = parent.querySelectorAll(str)
    }
  }
  return res
}
export function tabClass(ele, str, parent) {
  let targetDom = typeof ele === 'string' ? $(ele, parent) : ele
  if (targetDom) {
    let classList = Array.from(targetDom.classList)
    if (classList?.includes(str)) targetDom.classList.remove(str)
    else targetDom.classList.add(str)
  }
}
// 将节点添加到父级，参数二三分别是事件表和触发器表，用来添加后自动添加事件的
export function appendNode(html, eventMap = '', triggerMap = '', parentNode = '') {
  if (document.body) {
    let node = new DOMParser().parseFromString(html, 'text/html')
    let tempNode = node.querySelector('div') || node.querySelector('iframe')
    parentNode = parentNode || $('.huya-login')
    if (parentNode) {
      parentNode.appendChild(tempNode)
      if (eventMap) addEvent(tempNode, eventMap, triggerMap)
      return tempNode
    } else return ''
  } else {
    console.warn('TCL: body未加载完成，请确保脚本在body之后调用')
  }
}
export function removeNode(ele) {
  if (ele?.parentNode?.removeChild) {
    ele.parentNode.removeChild(ele)
    ele = ''
  }
  return ele
}
export function addClass(ele, str, parent) {
  let targetDom = typeof ele === 'string' ? $(ele, parent) : ele
  if (targetDom) {
    targetDom.classList.add(str)
  }
}
export function removeClass(ele, str, parent) {
  let targetDom = typeof ele === 'string' ? $(ele, parent) : ele
  if (targetDom) {
    targetDom.classList.remove(str)
  }
}
/**
 * @description 节流函数，固定一段时间触发一次，返回一个节流函数
 * @param {*} func 节流执行的箭头函数
 * @param {number} [wait=200] 固定时间间隔
 * @example
 */
export function throttle(fn, interval = 200) {
  let timer, // 定时器
    firstTime = true // 是否是第一次调用
  return function () {
    let _this = this
    let args = arguments
    if (firstTime) {
      // 如果是第一次调用，不需延迟执行
      fn.apply(_this, args)
      firstTime = false
      return
    }
    if (timer) {
      return false
    }
    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      fn.apply(_this, args)
    }, interval)
  }
}
/**
 * @description 防抖， 多用于滚动事件， 用户没有滚动后开始触发事件,返回一个防抖函数，注意是返回一个函数
 * @return 防抖函数
 * @param {*} func 外面传入的函数
 * @param {number} [delay=200] 默认防抖时长
 * @example
 */
export function debounce(func, wait = 200, needRunAtFirst = true) {
  // 缓存一个定时器id
  let timer = 0
  let firstTime = needRunAtFirst
  // 这里返回的函数是每次用户实际调用的防抖函数 // 如果已经设定过定时器了就清空上一次的定时器 // 开始一个新的定时器，延迟执行用户传入的方法
  return function () {
    let _this = this
    if (firstTime) {
      func.apply(_this, arguments)
      firstTime = false
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(_this, arguments)
        firstTime = needRunAtFirst
      }, wait)
    }
  }
}
// 关闭页面中所有弹框
export function closeAllModal() {
  let modalList = $('.huya-login .ya-modal.show', null, true)
  if (modalList.length) {
    modalList.forEach(ele => {
      removeClass(ele, 'show')
    })
  }
}
// 通用校验规则
export function commonReg(val, type = 'isPhone', option = {}) {
  let regObj = {
    isPhone: /^1[3-9]\d{9}$/,
    isEmail: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    isId() {
      if (val && val.length === 18) {
        let re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
        let arrSplit = val.match(re) // 检查生日日期是否正确，value就是身份证号
        let dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
        let bGoodDay = ''
        bGoodDay =
          dtmBirth.getFullYear() === Number(arrSplit[2]) &&
          dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
          dtmBirth.getDate() === Number(arrSplit[4])
        if (!bGoodDay) {
          return false
        } else {
          // 检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
          let valnum = ''
          let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
          let nTemp = 0
          for (let i = 0; i < 17; i++) {
            nTemp += val.substr(i, 1) * arrInt[i]
          }
          valnum = arrCh[nTemp % 11]
          if (valnum !== val.substr(17, 1)) {
            // alert('18位身份证的校验码不正确！应该为：' + valnum)
            return false
          }
          return true
        }
      } else {
        return false
      }
    },
    isNumber() {
      if (val === '' || val == null || isNaN(val)) return false
      // 如果不允许小数
      if (!option || !option.canBeFloat) {
        return parseInt(val) === Number(val)
      } else {
        return true
      }
    },
    required() {
      if (typeof val === 'object') {
        return Object.keys(val).length !== 0
      } else {
        // 默认0是有效数值是代表true，但如果配置了noZero，则0会设置为false
        return option && option.noZero ? !!val : val === 0 || !!val
      }
    }
  }
  let reg = regObj[type]
  if (!reg) {
    console.log('找不到相应的正则表达式')
    return false
  }
  if (typeof reg === 'function') return reg()
  else return reg.test(val)
}
export function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) {
    if (typeof unescape(arr[2]) === 'string' && unescape(arr[2]) === 'null') {
      return JSON.parse(unescape(arr[2]))
    }
    return unescape(arr[2])
  }
  return null
}
export function delCookie(keys = 'all', domain = '.huya.com', path = '/') {
  let arr = []
  if (Array.isArray(keys)) {
    arr = keys
  } else {
    if (keys === 'all') arr = document.cookie.match(/[^ =;]+(?=\=)/g)
    else arr = [keys]
  }
  arr.forEach(i => setCookie(i, '', -1, domain, path))
}
export function setCookie(cname, cvalue, exdays = 1, domain = '.huya.com', path = '/') {
  var d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let val = `${cname}=${escape(cvalue)};expires=${d.toUTCString()}${domain && ';domain=' + domain}${
    path && ';path=' + path
  }`
  document.cookie = val
}
// 生成设置UUID
export function setUUID() {
  const deviceId = getCookie('game_did')
  if (!deviceId) {
    setCookie('game_did', generateUUID(), 7)
  }
}
// 检验充值金额
export function validMoney(money = 0) {
  money = +money
  let userInfo = HuyaLoginSDK.store.state.userInfo
  let { age, paid } = userInfo
  let msg = ''
  // 年龄校验
  if (age < 18) {
    if (age < 8) {
      msg = '根据相关规定，未满8周岁用户不能进行充值'
    } else if (age < 16) {
      if (money > 50) {
        msg = '根据相关规定，8-15周岁的用户单笔充值金额不能超过50元'
      }
      if (money + paid > 200) {
        msg = '根据相关规定，8-15周岁的用户当月累计充值金额不能超过200元'
      }
    } else {
      if (money > 100) {
        msg = '根据相关规定，16-17周岁的用户单笔充值金额不能超过100元'
      }
      if (money + paid > 400) {
        msg = '根据相关规定，16-17周岁的用户当月累计充值金额不能超过400元'
      }
    }
  }
  if (msg) {
    setToast(msg)
    return false
  }
  return true
}

// 参数签名
export const signData = params => {
  let data = params ? strictNullHandling(params) : {}
  data['_t'] = new Date().getTime()
  data['_r'] = randomString()
  data['_s'] = encode(data)
  return data
}
// 获取设备类型
export function getDeviceType() {
  let u = window.navigator.userAgent
  let type = ''
  let typeList = {
    ios: /iPad|iPhone|iPod/gi, // 微信客户端web-view
    ard: /Android|Adr/gi
  }

  for (let i in typeList) {
    if (typeList[i].test(u)) {
      type = i
      break
    }
  }
  return type || 'pc'
}
// 获取用户ID
export function getUid() {
  return getCookie('udb_uid')
}
/**
 * 生成DID
 */
function generateUUID(length = 35) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
  let random_string = ''
  for (let i = 0; i < length; i++) {
    random_string += chars.charAt(parseInt(Math.random() * (chars.length - 1)))
  }
  return random_string
}
/**
 * 过滤null undefined ''
 */
function strictNullHandling(opts) {
  const data = {}
  const params = opts
  Object.keys(params).forEach(key => {
    if (typeof params[key] === 'string') {
      params[key] = params[key].trim()
    }
    if (params[key] !== null && params[key] !== '' && params[key] !== undefined) {
      data[key] = params[key]
    }
  })
  return data
}

/**
 * 生成随机字符串
 */
export function randomString(length = 32) {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < length; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
/**
 * 编码
 */
export function encode(value, key) {
  key = key || getCookie('game_did')
  const keyMap = Object.keys(value).sort()
  let sign = keyMap.reduce((prev, next) => (prev += `${next}=${value[next]}&`), '')
  if (!sign) {
    console.warn('TCL: 加密错误')
    return
  }
  sign = sign.slice(0, -1)
  // console.log('要签名加密的字符串', sign)
  return crypto(sign, key).toString()
}
// 判断是不是全面屏
export function judgeBigScreen() {
  let { height, width, availHeight, availWidth } = window.screen
  let y = height,
    x = width,
    ay = availHeight
  // 这个是谷歌上开调试时width会判定成height，手机上width就还是原屏幕width，所以这个是为了解决谷歌上调试用的逻辑
  if (getDeviceType() !== 'pc' && width > 550) {
    y = width
    x = height
    ay = availWidth
  }
  //，这里根据返回值 true 或false ,返回true的话 则为全面屏
  let result = false
  const rate = y / x
  let limit = y === ay ? 1.8 : 1.65 // 临界判断值
  // window.screen.height为屏幕高度
  //  window.screen.availHeight 为浏览器 可用高度
  if (rate > limit) {
    result = true
  }
  return result
}
// 动态导入js文件，异步导入，不过导入样式表可以保证时序性
export function loadJSAsync(url, cb = '') {
  if (scriptMap[url]) {
    cb && cb()
    return
  }
  scriptMap[url] = true
  let script = document.createElement('script')
  script.type = 'text/javascript'
  //IE
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null
        cb && cb()
      }
    }
  } else {
    //其他浏览器
    script.onload = function () {
      cb && cb()
    }
  }
  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}
export function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}
