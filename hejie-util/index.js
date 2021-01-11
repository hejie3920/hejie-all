// let log = console.log
// console.log = (...args) => {
//   log.apply(null, args)
//   let res = args.join(' ')
//   document.write(`${res}<br/>`)
// }

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

