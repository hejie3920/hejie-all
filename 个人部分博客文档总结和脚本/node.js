// var foo = { bar: 1 };
// var arr1 = [1, 2, foo];
// var arr2 = arr1.slice(1);
// 1;
// arr2[0]++;
// arr2[1].bar++;
// foo.bar++;
// arr1[2].bar++;
// console.log(`TCL: hejiearr2`, arr1, arr2);
// console.log(`TCL: hejie11`, arr1[1] === arr2[0]);
// console.log(`TCL: hejie12`, arr1[2] === arr2[1]);
// console.log(`TCL: hejie333`, foo.bar);

function quickSort(arr) {
    const stack = [];
    stack.push([0, arr.length - 1]);
    while (stack.length > 0) {
        const [start, end] = stack.pop();
        if (start >= end) continue;
        const pivotIndex = partition(arr, start, end);
        stack.push([start, pivotIndex - 1]);
        stack.push([pivotIndex + 1, end]);
    }
    return arr;
}
function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

console.log(`TCL: hejie`, quickSort([1, 2, 3, 2, 10, 7, 29, 3, 4]));
// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }
// async function async2() {
//     console.log("async2");
// }
// console.log("script start");
// setTimeout(function () {
//     console.log("setTimeout0");
// }, 0);
// setTimeout(function () {
//     console.log("setTimeout3");
// }, 3);
// setImmediate(() => console.log("setImmediate"));
// process.nextTick(() => console.log("nextTick"));
// async1();
// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
//     console.log("promise2");
// }).then(function () {
//     console.log("promise3");
// });
// console.log("script end");

// 杰任务队列
/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * @param  {...Function} tasks 任务列表，每个任务无参，异步
 * @returns
 */
// function processTasks(...tasks) {
//     let index = 0;
//     let isPaused = false;
//     const results = [];
//     const executeTask = () => {
//         if (index < tasks.length && !isPaused) {
//             tasks[index]().then((result) => {
//                 results.push(result);
//                 index++;
//                 executeTask();
//             });
//         }
//     };
//     const start = () => {
//         executeTask();
//     };
//     const pause = () => {
//         isPaused = true;
//     };
//     return { start, pause };
// }

// const tasks = [];
// for (let i = 0; i < 10; i++) {
//     tasks.push(() => {
//         console.log(`任务${i + 1}开始`);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(i);
//                 console.log(`任务${i + 1}结束`);
//             }, 2000);
//         });
//     });
// }
// const hejie = processTasks(...tasks);
// hejie.start();
// setTimeout(() => {
//     hejie.pause();
// }, 2000);
// setTimeout(() => {
//     hejie.start();
// }, 5000);

// output: ==>
// script start
// async1 start
// async2
// promise1
// promise2
// script end
// nextTick
// async1 end
// promise3
// setTimeout0
// setImmediate
// setTimeout3

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
