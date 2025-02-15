class MyPromise {
    constructor(executor) {
      // 初始化状态
      this.state = 'pending'; // pending, fulfilled, or rejected
      this.value = undefined; // resolved value or rejection reason
      this.callbacks = []; // 存储待处理的回调函数集
  
      // resolve函数用于将Promise状态变为fulfilled
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.callbacks.forEach(callback => {
            callback.onFulfilled(value);
          });
        }
      };
  
      // reject函数用于将Promise状态变为rejected
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.value = reason;
          this.callbacks.forEach(callback => {
            callback.onRejected(reason);
          });
        }
      };
  
      // 执行executor并捕获异常
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    // then方法用于注册fulfilled和rejected的回调
    then(onFulfilled, onRejected) {
      // 默认回调函数，如果没有传递
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };
  
      // 返回一个新的Promise以支持链式调用
      return new MyPromise((resolve, reject) => {
        // 处理成功态
        const handleFulfilled = (value) => {
          try {
            const result = onFulfilled(value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        // 处理失败态
        const handleRejected = (reason) => {
          try {
            const result = onRejected(reason);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === 'fulfilled') {
          // 异步执行以保持一致性
          setTimeout(() => handleFulfilled(this.value), 0);
        } else if (this.state === 'rejected') {
          setTimeout(() => handleRejected(this.value), 0);
        } else {
          // 如果pending则推入队列
          this.callbacks.push({
            onFulfilled: handleFulfilled,
            onRejected: handleRejected
          });
        }
      });
    }
  
    // catch方法只是then方法的语法糖
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  }
  
  // 用法示例
  let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("Hello, World!"), 1000);
  });
  
  promise
    .then(result => {
      console.log(result);
      return result + " Chained.";
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
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
// })