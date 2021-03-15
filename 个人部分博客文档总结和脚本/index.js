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

// // 考察的点，class的使用，new 对象

// // // for i in [1..N]
// //       for w in [1..W]
// //         dp[i][w] = Math.max(
// //           dp[i - 1][w],
// //           dp[i-1][w-wt[i-1]] + <val i-1=""></val>
// //         )

// // 0-1背包问题
// // function knapsack(W, N, wt = [], val = []) {
// //   const dp = Array.from(new Array(N+1),() => new Array(W+1).fill(0))
// //   for

// // }

// const W = 4
// const N = 3
// const wt = [2, 1, 3]
// const val = [4, 2, 3]
