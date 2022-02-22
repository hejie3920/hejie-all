// /**
//  * script start
//  * async1
//  * async2
//  * promise1
//  * promise2
//  * sctip end
//  * nextTick
//  * async end
//  * promise3
//  * settimeout0
//  * setimmediata
//  * settimeout3
//  */
// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout0')
// }, 0)
// setTimeout(function () {
//   console.log('setTimeout3')
// }, 3)
// setImmediate(() => console.log('setImmediate'))
// process.nextTick(() => console.log('nextTick'))
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
//   console.log('promise2')
// }).then(function () {
//   console.log('promise3')
// })
// console.log('script end')
// function compose(middlewares) {
//   return function() {
//      function dispatch(i) {
//       if(!middlewares[i]) {
//         return Promise.resolve()
//       }

//       return Promise.resolve(
//         middlewares[i](function next(){
//           return dispatch(i+1)
//         })
//       )
//     }

//     return dispatch(0)
//   }
// }
// async function fn1(next) {
//   console.log("fn1");
//   await next();
//   console.log("end fn1");
// }
// async function fn2(next) {
//   console.log("fn2");
//   await delay();
//   await next();
//   console.log("end fn2");
// }
// function fn3(next) {
//   console.log("fn3");
// }
// function delay() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove();
//     }, 2000);
//   });
// }
// const middlewares = [fn1, fn2, fn3];
// const finalFn = compose(middlewares);
// finalFn();
// return function () {
//     return dispatch(0); // 执行第0个
//     function dispatch(i) {
//       let fn = middlewares[i];
//       if (!fn) {
//         return Promise.resolve();
//       }
//       return Promise.resolve(
//         fn(function next() {
//           // promise完成后，再执行下一个
//           return dispatch(i + 1);
//         })
//       );
//     }
//   };

function MergeSort(array) {
  let len = array.length;
  if (len <= 1) {
    return array;
  }
  let num = Math.floor(len / 2);
  let left = MergeSort(array.slice(0, num));
  let right = MergeSort(array.slice(num, array.length));
  return merge(left, right);

  // 最基础的两个小数组合并的方法，始终比对左右数组的第一项，小的先推入
  // 结果数组里面，直到左右数组有一方遍历完，剩下的另一方直接推入即可
  function merge(left, right) {
    let [l, r] = [0, 0];
    let result = [];
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }
    // 左右数组其中一方比对完后，讲剩下的直接推入后面即可，因为这时剩下的必定是有序的更大的
    result = [...result, ...left.slice(l), ...right.slice(r)];
    return result;
  }
}

let a = [6, 123, 2, 65, 25, 43, 2, 67, 22, 677, 5, 1, 3];
console.log("TCL: merge", MergeSort(a));
