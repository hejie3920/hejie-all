async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout0");
}, 0);
setTimeout(function () {
  console.log("setTimeout3");
}, 3);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});
console.log("script end");
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