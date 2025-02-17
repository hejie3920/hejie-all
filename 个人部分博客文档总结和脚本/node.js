async function fn1(next) {
  console.log("fn1");
  await next();
  console.log("end fn1");
}
async function fn2(next) {
  console.log("fn2");
  await delay();
  await next();
  console.log("end fn2");
}
function fn3(next) {
  console.log("fn3");
}
function delay() {
  return new Promise((reslove, reject) => {
      setTimeout(() => {
          reslove();
      }, 2000);
  });
}
const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();
// 杰koacompose
function compose(middlewares) {
  return function () {
      return dispatch(0); // 执行第0个
      function dispatch(i) {
          let fn = middlewares[i];
          if (!fn) {
              return Promise.resolve();
          }
          return Promise.resolve(
              fn(function next() {
                  // promise完成后，再执行下一个
                  return dispatch(i + 1);
              })
          );
      }
  };
}
// function deepCopy(obj) {
//     if (typeof obj !== "object" || obj === null) {
//         return obj;
//     }

//     const newObj = Array.isArray(obj) ? [] : {};
//     Object.setPrototypeOf(newObj, Object.getPrototypeOf(obj));

//     for (const key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             newObj[key] = deepCopy(obj[key]);
//         }
//     }

//     return newObj;
// }

// function findUniqueNumber(nums) {
//     var res = 0;
//     for (var i = 0; i < nums.length; i++) {
//         res ^= nums[i];
//     }
//     return res;
// }
// const read = 0b1; // 00001
// const write = 0b10; // 00100
// const exec = 0b100; // 01000
// const delete1 = 0b1000; // 10000
// const root = read | write | exec;
// // console.log(`TCL: hejieroot`, root.toString(2)); // 0111


// // Object.prototype[Symbol.iterator] = function* () {
// //     let index = 0;
// //     return yield* Object.values(this)
// // }
// // const [a, b] = {a: 1, b: 2}
// // console.log(`TCL: hejieaaa`,a,b)
// const a = [1,2,3,4]
// function sum(arr) {
//     let i = 0;
//     let sum = 0
//      function _sum() {
//         if(i >= arr.length) return
//         sum += arr[i]
//         i ++
//         _sum()
//     }
//     _sum()
//     return sum
// }
// // console.log(`TCL: hejiesss`,sum(a))
// Promise.resolve(1)
// .then(res => {
//     console.log(`TCL: hejie000`)
//     return Promise.resolve(4)
// }).then(res => {
//     console.log(`TCL: hejieres`,res)
// })
// Promise.resolve().then(() => {
//     console.log(`TCL: hejie111`)
// }).then(() => {
//     console.log(`TCL: hejie222`)
// }).then(() => {
//     console.log(`TCL: hejie333`)
// }).then(() => {
//     console.log(`TCL: hejie55`)
// })’’