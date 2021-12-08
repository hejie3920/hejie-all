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

public static int findKth(int[] arr1, int[] arr2, int k) {
if(arr1 == null || arr1.length < 1)
return arr2[k-1];
if(arr2 == null || arr2.length < 1)
return arr1[k-1];
// 注意这个函数的参数有7个，上⾯那个函数的参数只有3个，同名不同函数哈
return findKth2(arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1, k - 1);
 }
public static int findKth2(int[] arr1, int l1, int r1, int[] arr2, int l2,
int r2, int k) {
// 递归结束条件
if(l1 > r1)
return arr2[l2 + k];
if(l2 > r2)
return arr1[l1 + k];
if (k == 0)// 注意，k == 0的结束条件与上⾯两个结束条件不能颠倒。
return Math.min(arr1[l1],arr2[l2]);
int md1 = l1 + k/2 < r1 ? l1 + k/2 : r1;
int md2 = l2 + k/2 < (r2 - l1) ? l2 + k/2 : r2;
if(arr1[md1] < arr2[md2])
return findKth2(arr1, md1 + 1, r1, arr2, l2, r2, k - k / 2 - 1);
else if (arr1[md1] > arr2[md2])
return findKth2(arr1, l1, r1, arr2, md2 + 1, r2, k - k / 2 - 1);
else
return arr1[md1];//返回arr2[md2]也可以，⼀样的。
 }