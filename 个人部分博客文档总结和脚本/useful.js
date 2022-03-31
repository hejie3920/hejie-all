// 实现可选链,可以方便开发直接取出一个特定属性的值，确保取值时如果遇到某一层没数据不会报错，直接返回false
// 第三个参数是强化功能，如果目标值转布尔后是false，或者是空值，比如空数组或者空对象时会自动过滤转成false
// 直接获取某个object，可以是数组里面的特定的值，一层层解开属性，一旦遇到空集便返回空字符串
// this.vote = getObjVal(tmp, ['voteInfo', 'voteOutputVo', 'voteOptionList'])
// 相当于 this.vote = tmp && tmp.voteInfo && tmp.voteInfo.voteOutputVo && tmp.voteInfo.voteOutputVo.voteOptionList
export const getObjVal = (obj, keyMap = [], shouldFilterEmpty = true) => {
  let res = obj;
  let tmp;
  if (typeof obj !== "object" || keyMap.length < 1 || !obj) return false;
  else if (keyMap && keyMap.length > 0) {
    for (let i = 0; i < keyMap.length; i++) {
      tmp = res[keyMap[i]];
      if (
        i !== keyMap.length - 1 &&
        (tmp === null || typeof tmp !== "object")
      ) {
        return false;
      } else {
        res = tmp;
      }
    }
  }
  if (
    shouldFilterEmpty &&
    typeof res === "object" &&
    ([null, undefined].includes(res) || Object.keys(res).length === 0)
  ) {
    return "";
  }
  return res;
};
export const getSingle = (fn) => {
  let instance;
  return function () {
    return instance || (instance = fn.apply(this, arguments));
  };
};
/**
 * 过滤请求参数的所有空值
   import { filterParams } from '../../config/utils'
   filterParams(params)
 */
export const toType = (obj) => {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};
// 过滤空值
export function filterParams(o) {
  if (!o || Object.keys(o).length === 0) return o;
  for (const key in o) {
    if (o[key] == null) delete o[key];
    if (toType(o[key]) === "string") {
      o[key] = o[key].trim();
      if (o[key] === "") delete o[key];
    } else if (toType(o[key]) === "object") {
      o[key] = filterParams(o[key]);
      if (JSON.stringify(o[key]) === "{}") delete o[key];
    } else if (toType(o[key]) === "array") {
      o[key] = filterParams(o[key]);
      o[key] = o[key].filter((arr) => arr);
      if (o[key].length === 0) delete o[key];
    }
  }
  return o;
}
// 修改url里面?后面某个参数的值，
// 没有指定的值话就添加，有的话就修改，传入的值是空的话就会删掉路径上的参数
// 用于局部刷新下需要改变url地址，配合history.pushState使用
export const changeUrlQuery = (arg, arg_val, url) => {
  if (!url) url = location.href;
  let pattern1 = `?${arg}=`;
  let pattern2 = `&${arg}=`;
  let replaceText = arg_val ? `${arg}=${arg_val}` : "";
  let tmp;
  if (url.includes(pattern1)) {
    let reg = `/\\?${arg}=([^&]*)/gi`;
    let regHaveOther = `/\\?${arg}=([^&]*)&/`;
    if (!replaceText && url.match(eval(regHaveOther))) {
      tmp = url.replace(eval(regHaveOther), "?");
    } else if (!replaceText) {
      tmp = url.replace(eval(reg), "");
    } else {
      tmp = url.replace(eval(reg), "?" + replaceText);
    }
    return tmp;
  } else if (url.includes(pattern2)) {
    let reg = `/(&${arg}=)([^&]*)/gi`;
    if (arg_val) replaceText = "&" + replaceText;
    tmp = url.replace(eval(reg), replaceText);
    return tmp;
  } else {
    if (!replaceText) return url;
    else {
      if (url.match("[?]")) {
        return url + "&" + replaceText;
      } else {
        return url + "?" + replaceText;
      }
    }
  }
};
// 加密处理银行卡号，默认是普通脱敏
export const formatBankCard = (val, type = "normal") => {
  if (!val) return;
  val = String(val);
  let reg,
    res = "";
  switch (type) {
    case "normal":
      reg = /^(\d{4})\d+(\d{4})$/;
      res = val.replace(reg, "$1****$2");
      break;
    default:
      break;
  }
  return res;
};

// 限定字符长度
export function limitStr(str = "", num = 6) {
  if (typeof str !== "string") return;
  return str.slice(0, num) + (str.length > num ? "..." : "");
}
// 获取设备类型
export function getDeviceType() {
  const u = window.navigator.userAgent;
  let type = "";
  const typeList = {
    ios: /iPad|iPhone|iPod/gi, // 微信客户端web-view
    ard: /Android|Adr/gi,
  };
  for (const i in typeList) {
    if (typeList[i].test(u)) {
      type = i;
      break;
    }
  }
  return type || "pc";
}

// 脱敏加密，type可以是默认的预设也可以直接传格式4-3，代表头留住4位，尾2位中间加密
// split传数值，代表对加密的*号部分进行每split位进行分割
export function encrypt(val, type = "phone", split = 0) {
  if (!val) {
    console.log("TCL: 请输入有效值");
    return;
  }
  let format;
  let res = "";
  switch (type) {
    case "phone":
      format = "3-4";
      break;
    case "bankcard":
      format = "4-4";
      split = split || 4;
      break;
    default:
      if (/^.-.$/.test(type)) format = type;
      break;
  }
  const formatArr = format.split("-");
  if (/^.-.$/.test(format)) {
    const indexArr = [formatArr[0] - 1, val.length - formatArr[1]];
    for (let i = 0; i < val.length; i++) {
      let ele = val[i];
      if (i > indexArr[0] && i < indexArr[1]) ele = "*";
      res += ele;
    }
    if (split) {
      const reg = `/(.{${split}})/g`;
      res = res.replace(/\*{1,}/g, (r) => {
        if (r)
          return (
            " " +
            r.replace(eval(reg), "$1 ") +
            (r.length % split === 0 ? "" : " ")
          );
      });
    }
  }
  return res;
}

export function sleep(time = 200, res = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, time);
  });
}

/**
 * @description 节流函数，固定一段时间触发一次，返回一个节流函数
 * @param {*} func 节流执行的箭头函数
 * @param {number} [wait=200] 固定时间间隔
 * @example
 */
export function throttle(fn, delay = 200) {
  let old = 0;
  return function (...args) {
    const _this = this;
    const now = Date.now();
    if (now - old > delay) {
      fn.apply(_this, args);
      old = now;
    }
  };
}
/**
 * @description 防抖， 多用于滚动事件， 用户没有滚动后开始触发事件,返回一个防抖函数，注意是返回一个函数
 * @return 防抖函数
 * @param {*} func 外面传入的箭头函数
 * @param {number} [delay=500] 默认防抖时长
 * @param {number} [needRunAtFirst] 是否固定第一次触发，第一次触发时wait时间内不执行其他任何操作，可用于防重
 * @example
 * this.debounceFunc = this.$global.debounce(this.scrollFunc【需要防抖的函数】)
 * window.addEventListener("scroll", this.debounceFunc)
 */
export function debounce(func, wait = 200, needRunAtFirst = true) {
  // 缓存一个定时器id
  let timer = 0;
  let firstTime = needRunAtFirst;
  let isHandling = false;
  // 这里返回的函数是每次用户实际调用的防抖函数 // 如果已经设定过定时器了就清空上一次的定时器 // 开始一个新的定时器，延迟执行用户传入的方法
  return function () {
    const _this = this;
    if (firstTime) {
      if (isHandling) return;
      isHandling = true;
      func.apply(_this, arguments);
      setTimeout(() => {
        firstTime = false;
        isHandling = false;
      }, wait);
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(_this, arguments);
        firstTime = needRunAtFirst;
      }, wait);
    }
  };
}
// 通用校验规则
export function commonReg(val, type = "isPhone", option = {}) {
  const regObj = {
    isPhone: /^1[3-9]\d{9}$/,
    isEmail: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    isId() {
      if (val && val.length === 18) {
        const re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        const arrSplit = val.match(re); // 检查生日日期是否正确，value就是身份证号
        const dtmBirth = new Date(
          arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
        );
        let bGoodDay = "";
        bGoodDay =
          dtmBirth.getFullYear() === Number(arrSplit[2]) &&
          dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
          dtmBirth.getDate() === Number(arrSplit[4]);
        if (!bGoodDay) {
          return false;
        } else {
          // 检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
          let valnum = "";
          const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
          const arrCh = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
          let nTemp = 0;
          for (let i = 0; i < 17; i++) {
            nTemp += val.substr(i, 1) * arrInt[i];
          }
          valnum = arrCh[nTemp % 11];
          if (valnum !== val.substr(17, 1)) {
            // alert('18位身份证的校验码不正确！应该为：' + valnum)
            return false;
          }
          return true;
        }
      } else {
        return false;
      }
    },
    isNumber() {
      if (val === "" || val === null || isNaN(val)) return false;
      // 如果不允许小数
      if (!option || !option.canBeFloat) {
        return parseInt(val) === Number(val);
      } else {
        return true;
      }
    },
    required() {
      if (typeof val === "object") {
        return Object.keys(val).length !== 0;
      } else {
        // 默认0是有效数值是代表true，但如果配置了noZero，则0会设置为false
        return option && option.noZero ? !!val : val === 0 || !!val;
      }
    },
  };
  const reg = regObj[type];
  if (!reg) {
    console.log("找不到相应的正则表达式");
    return false;
  }
  if (typeof reg === "function") return reg();
  else return reg.test(val);
}
export function getCookie(name) {
  var arr;
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) {
    if (typeof unescape(arr[2]) === "string" && unescape(arr[2]) === "null") {
      return JSON.parse(unescape(arr[2]));
    }
    return unescape(arr[2]);
  }
  return null;
}
export function delCookie(keys = "all", domain = ".huya.com", path = "/") {
  let arr = [];
  if (Array.isArray(keys)) {
    arr = keys;
  } else {
    if (keys === "all") arr = document.cookie.match(/[^ =;]+(?==)/g);
    else arr = [keys];
  }
  arr.forEach((i) => setCookie(i, "", -1, domain, path));
}
export function setCookie(
  cname,
  cvalue,
  exdays = 3,
  domain = ".huya.com",
  path = "/"
) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const val = `${cname}=${escape(cvalue)};expires=${d.toUTCString()}${
    domain && ";domain=" + domain
  }${path && ";path=" + path}`;
  document.cookie = val;
}
// 获取路径上的参数
export function getQueryParam(name) {
  const origin = window.location.search?.split("?")?.[1] || "";
  // const origin = window.location.hash?.split("?")?.[1] || "";
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const r = origin.match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return "";
}
// 深拷贝
export const deepCopy = (obj) => {
  let result = "";
  if (obj === null) {
    result = null;
  }
  // 判断是否是简单数据类型，
  else if (typeof obj === "object") {
    // 复杂数据类型
    result = obj && obj.constructor === Array ? [] : {};
    for (const i in obj) {
      result[i] = typeof obj[i] === "object" ? deepCopy(obj[i]) : obj[i];
    }
  } else {
    // 简单数据类型 直接 === 赋值
    result = obj;
  }
  return result;
};
// 参数二代表保留几位小数，整数的话不处理，参数三代表是否进行千位符分割
export function formatNum(num, point = 2, shouldSplit = false) {
  if (typeof +num !== "number" || isNaN(+num)) return 0;
  let s = Number(num);
  if (/\./.test(s)) {
    s = s.toFixed(point);
  }
  if (shouldSplit) {
    s = s + "";
    const tmp = s.split(".");
    const left = tmp[0];
    const right = tmp[1] || "";
    const reg = /\d{1,3}(?=(\d{3})+$)/g;
    return left.replace(reg, "$&,") + (right ? `.${right}` : "");
  }
  return Number(s);
}
// 这个函数很好用，传入地址以及想要拼接的query参数对象，会自动对query进行去重滤空并返回最后的结果，结果默认是会转为绝对地址http(s)开头的
// 1. 参数1是url，可以是带参数的，可以是/开头相对地址也可以是http开头的绝对地址，
// 如果设置了toHttpLink代表会转换成绝对地址，默认是关闭，但有时如果只是需要router.push站内跳转则可以设置为false
// 2. 参数2是想要拼接的query,默认都会有channel，这个函数做了强化，会自动解析出参数1里面的url里面的query并转成对象，
// 然后参数2相当于Object.assign的最后一个参,是强覆盖，会对最终query进行去重以及过滤掉空值，null和undefined再拼接返回最后的结果
export function joinQuery(url, query = {}, toHttpLink = false) {
  if (!url) return;
  if (toHttpLink) {
    url = url.startsWith("http")
      ? url
      : location.origin + location.pathname + "#" + url;
  }
  let path = url.split("?")[0];
  const q = url.split("?")[1];
  let queryObj = q ? qs.parse(q) : {};
  queryObj = Object.assign(queryObj, query);
  let pairs = "";
  if (queryObj && Object.keys(queryObj).length > 0) {
    for (const i in queryObj) {
      if (["undefined", "null", ""].includes(queryObj[i])) {
        delete queryObj[i];
      }
    }
  }
  pairs = Object.keys(queryObj).length > 0 ? qs.stringify(queryObj) : "";
  path = pairs ? path + "?" + pairs : path;
  return path;
}
// 从一个数组里面随机取出count个数值，返回结果数组
export function getRandomElements(arr, count) {
  var shuffled = arr.slice(0);
  var i = arr.length;
  var min = i - count;
  var temp;
  var index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

export function textEncode(html) {
  // 1.首先动态创建一个容器标签元素，如DIV
  var temp = document.createElement("div");
  // 2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
  temp.textContent !== undefined
    ? (temp.textContent = html)
    : (temp.innerText = html);
  // 3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
  var output = temp.innerHTML;
  temp = null;
  return output;
}
export function textDecode(text) {
  // 1.首先动态创建一个容器标签元素，如DIV
  var temp = document.createElement("div");
  // 2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
  temp.innerHTML = text;
  // 3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
  var output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}

export function getExt(name) {
  if (!name || typeof name !== "string") return "";
  const quesIndex = name.lastIndexOf("?");
  if (quesIndex > -1) {
    name = name.slice(0, quesIndex);
  }
  const extIndex = name.lastIndexOf(".");
  if (extIndex < 0) return "";
  return name.slice(extIndex + 1);
}

export const getType = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};
// 动态导入js文件，异步导入，不过导入样式表可以保证时序性
export function loadJSAsync(url, cb = "") {
  if (url === jsMap?.kiwi && window["kiwi-js-sdk"]?.HUYASdk) {
    scriptMap[url] = true;
  }
  if (scriptMap[url]) {
    console.log("TCL: 模块已经导入过，直接导入模块", url);
    cb && cb();
    return;
  }
  scriptMap[url] = true;
  const script = document.createElement("script");
  script.type = "text/javascript";
  // IE
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        cb && cb();
      }
    };
  } else {
    // 其他浏览器
    script.onload = function () {
      console.log("TCL: 加载模块完成", url);
      cb && cb();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

export function compareVersion(version, target) {
  if (
    typeof version !== "string" ||
    !version.includes(".") ||
    !target.includes(".")
  ) {
    return false;
  }
  const versionArr = version.split(".");
  const targetVersionArr = target.split(".");
  if (versionArr.length !== targetVersionArr.length) {
    return versionArr.length > targetVersionArr.length;
  }
  for (let i = 0; i < versionArr.length; i++) {
    const num = +versionArr[i];
    const tNum = +targetVersionArr[i];
    if (num !== tNum) {
      return num > tNum;
    }
  }
  return true;
}
