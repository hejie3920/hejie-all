let log = console.log
console.log = (...args) => {
  log.apply(null, args)
  let res = args.join(' ')
  document.write(`${res}<br/>`)
}

// 深拷贝
// let a = {
//   name: "haha",
//   age: 24
// }
// let b = utils.deepClone(a)
// b.birth = 724
// console.log("TCL: ", a, b)

// 正则解码
// let str = "20[a3[b]]"
// // let str = "2[ac]2[bc]"
// console.log(utils.decode(str))

// 找数组中最接近指定值的值
// let arr = [2, 4, 8, 9, 34, 2, 76, 34, 12, 4, 56, 7, 23, 12]
// console.log("TCL: ", utils.findNearest(arr, 42))
// console.log(arr)

// 获取类型
// console.log("TCL: ", utils.getType(arr))

// 节流
// window.onresize = utils.debounce(val => {
//   console.log("TCL: ", "nihao")
// }, 200)

/**
 * 编码题二：实现一个检验对象是否循环指向的方法
 * 说明：当一个对象存在对自身引用时，称之为循环指向
 *   如`var o = { a: {} }; o.a = o;`
 *   o -> a -> o，就形成循环指向
 * 示例：
 */
// isCyclic(window) // true
// isCyclic({}) // false
// var o = {}
// o.o = o
// isCyclic(o) // true
// var obj = { foo: { bar: { baz: { qux: {} } } } }
// obj.foo.bar.baz.qux = obj.foo
// isCyclic(obj) // true

// function findTopSum(arr, k, m) {
//   /** 代码实现 */
//   if (!arr || arr.length < 0) return -1
//   //   排序
//   let map = {}
//   arr.forEach((item) => {
//     map[item] = map[item] ? map[item] + 1 : 1
//   })
//   let res = Array.from(new Set(arr)).sort((a, b) => b - a)
//   console.log('findTopSum -> res', res)
//   console.log('findTopSum -> map', map)
//   let targetK = res[k - 1],
//     targetM = res[m - 1]
//   return map[targetK] * targetK + map[targetM] * targetM
// }
// let arrtmp = [1, 2, 4, 4, 3, 5]
// console.warn('TCL: ', findTopSum(arrtmp, 2, 4))

// function adjoin(arr, condition) {
//   /* 代码实现 */
//   let res = []
//   let tmpArr = []
//   arr.forEach((item, index) => {
//     if (condition(item)) {
//       tmpArr.push(item)
//     } else {
//       if (tmpArr.length > 0) {
//         res.push(tmpArr)
//       }
//       res.push(item)
//       tmpArr = []
//     }
//     if (index == arr.length - 1 && tmpArr.length > 0) {
//       res.push(tmpArr)
//     }
//   })
//   console.log(res)
//   return res
// }
// adjoin([1, 2, 3, 4, 5], (item) => item !== 3) // [[1, 2], 3, [4, 5]]

function EatMan(name) {
  return new _eatman(name)
}
let _eatman = function (name) {
  let queue = []
  let init = function () {
    console.log(`Hi! This is ${name}!`)
    self.next()
  }
  queue.push(init)
  setTimeout(function () {
    self.next()
  }, 0)
  let self = {
    next: function () {
      if (queue.length) {
        var fn = queue.shift()
        if (typeof fn === 'function') {
          fn()
        }
      }
    },
    eat: function (item) {
      queue.push(function () {
        // setTimeout(() => {
        console.log(`Eat ${item}~`)
        // }, 10)
        self.next()
      })
      return this
    },
    eatFirst: function (item) {
      queue.unshift(function () {
        console.log(`Eat ${item}~`)
        self.next()
      })
      return this
    }
  }
  return self
}
EatMan('hank').eat('dinner').eatFirst('lanunch')
