// 判断对象是对象还是数组
// if (typeof obj === 'object' && Array.isArray(obj)) else

// 直接判断是对象还是数组
// {}.toString.call( obj ) === "[object Object]"
// {}.toString.call( obj ) === "[object Array]"
// Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()区别
// 1. Object.prototype.toString适用于任何变量，instanceof，isArray 只能判断对象类型，原始类型不可，isArray性能会稍微高点

let utils = {
  // 深拷贝
  deepCopy(obj) {
    //判断是否是简单数据类型，
    if (typeof obj == 'object') {
      //复杂数据类型
      var result = obj.constructor == Array ? [] : {}
      for (let i in obj) {
        result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i]
      }
    } else {
      //简单数据类型 直接 == 赋值
      var result = obj
    }
    return result
  },
  // https://juejin.im/post/5e92eb5b6fb9a03c8966dc88
  // 1.字符串隐藏
  // 2. 找出最少需要的硬币数
  // 3. 转换成可读性好的文本
  // 测试
  // coinChange([1, 2, 5], 11); //3
  // coinChange([2, 4], -1) // -1
  // coinChange([1, 2, 4, 5, 10], 100) //10
  coinChange(coins, amount) {
    let ans = new Array(amount + 1).fill(Infinity)
    ans[0] = 0
    for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
        if (i >= coin) {
          ans[i] = Math.min(ans[i], ans[i - coin] + 1)
        }
      }
    }
    return ans[amount] === Infinity ? -1 : ans[amount]
  },
  // 正则解码
  decode() {
    let sindex = (eindex = -1)
    let count = -1
    let substr = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '[') {
        sindex = i
        if (!isNaN(parseInt(str[i - 1]))) {
          let reg = /(\d)+$/g
          // reg.test(str.slice(0,i))
          // count = RegExp.$1
          count = str.slice(0, i).match(reg)[0]
        } else {
          count = -1
        }
      }
      if (str[i] == ']') {
        eindex = i
      }
      if (![sindex, eindex].includes(-1)) {
        substr = str.slice(sindex + 1, eindex)
        if (count != -1) {
          str =
            str.slice(0, sindex - count.length) +
            substr.repeat(count) +
            str.slice(eindex + 1)
        }
        sindex = eindex = count = i = -1
      }
    }
    return str
  },
  // 找数组中最接近指定值得值，找最近
  // 找最接近目标的值，找最近
  // 直接将目标插入数组，排序，然后indexOf()找到目标值，然后比较左右两个谁最近就好了
  findNearest(arr, target) {
    // 这一步是深拷贝，目的是为了不影响原数组
    // let arr = JSON.parse(JSON.stringify(tmp))
    arr.push(target)
    let index = arr.sort((a, b) => a - b).indexOf(target)
    let res
    if (index === 0) res = arr[index + 1]
    else if (index === arr.length - 1) res = arr[index - 1]
    else {
      res =
        target - arr[index - 1] > arr[index + 1] - target
          ? arr[index + 1]
          : arr[index - 1]
    }
    return res
  },

  // 判断类型，获取类型
  getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
  },
  // 实现new，new做了什么
  // 1.肯定要返回一个新对象的啦，所以第一步先创建个新的空对象，
  // 2.这个对象也要继承基类所有父方法的啦，所以把的原型指向基类的原型对象obj.__proto__ = Base.prototype
  // 3.这个对象创建完后，需要初始化，初始化就是借用爸爸来初始化啦，就是Base.call(obj)了
  // 自然而然obj.prototype原型就是初始化后的原型，直接返回obj就可以了
  // 基本三步
  _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const ret = fn.apply(obj, args)
    return ret instanceof Object ? ret : obj
  },
  // 分时函数,把1秒渲染1000个分成每200毫秒渲染8个
  timeThunk(ary, fn, count) {
    let timer
    let start = function () {
      for (let i = 0; i < Math.min(count || 1, ary.length); i++) {
        let obj = ary.shift()
        fn(obj)
      }
    }
    return function () {
      timer = setInterval(() => {
        if (ary.length === 0) {
          return clearInterval(timer)
        }
        start()
      }, 200)
    }
  },
  // 大量节点渲染优化，分时渲染，验证后发现直接用innerHTML性能比createDocumentFragment文档碎片好
  // var ary = []
  // for (var i = 1; i <= 1000; i++) {
  //   ary.push(i)
  // }
  // var renderFriendList = timeChunk(
  //   ary,
  //   function (n) {
  //     var div = document.createElement("div")
  //     div.innerHTML = n
  //     document.body.appendChild(div)
  //   },
  //   8
  // )
  // renderFriendList()

  // 防抖
  debounce(func, wait = 200) {
    // 缓存一个定时器id
    let timer = 0
    // 这里返回的函数是每次用户实际调用的防抖函数 // 如果已经设定过定时器了就清空上一次的定时器 // 开始一个新的定时器，延迟执行用户传入的方法
    return function () {
      let _this = this
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(_this, arguments)
      }, wait)
    }
  },
  throttle(fn, interval = 200) {
    let timer, // 定时器
      firstTime = true // 是否是第一次调用
    return function () {
      let _this = this
      if (firstTime) {
        // 如果是第一次调用，不需延迟执行
        fn.apply(_this, arguments)
        return (firstTime = false)
      }
      if (timer) {
        return false
      }
      timer = setTimeout(function () {
        clearTimeout(timer)
        timer = null
        fn.apply(_this, arguments)
      }, interval)
    }
  },
  debounceExec(func, delay = 200) {
    closure.debounceTimer && clearTimeout(closure.debounceTimer)
    closure.debounceTimer = setTimeout(() => {
      func && func()
    }, delay)
  },
  throttleExec(func, wait = 200) {
    // 当前时间
    let now = +new Date()
    // 将当前时间和上一次执行函数时间对比 // 如果差值大于设置的等待时间就执行函数
    if (now - closure.throttleLastTime > wait) {
      closure.throttleLastTime = now
      func && func()
    }
  }
}
// react实现防抖输入框
// 防抖函数
// function debounce(fn, wait, immediate) {
//   let timer = null

//   return function(...args) {
//     let context = this

//     if (immediate && !timer) {
//       fn.apply(context, args)
//     }

//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(context, args)
//     }, wait)
//   }
// }

// class SearchInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.callAjax = debounce(this.callAjax, 500, true)
//   }

//   handleChange(e) {
//     this.setState({
//       value: e.target.value
//     })
//     this.callAjax()
//   }

//   callAjax() {
//     // 此处根据输入值调用服务端接口
//     console.log(this.state.value)
//   }

//   render() {
//     return <input type='text' value={this.state.value} onChange={this.handleChange} />
//   }
// }

// 正则相关
// reg: test,exec,exec(eval(动态模板正则))
// str: match

// 常用
// 1. str.replace(reg, (最终匹配的结果，结果里面的$1, $2分组之类) => { return $1 + ' ' + $2})
// 2. str.match(reg)  返回一个结果数组['aaa','bbb','cc']，接下来就是数组的操作了
// 3. 匹配连续相同的字符，(\w)\1,()和\1配合使用可以筛选连续的重复字符，
// 然后(\w) \1 + 代表贪婪尽可能多匹配，不加代表非贪婪，只匹配两个，还可以(\w)\1{2,},匹配2次以上（不含2次）

// let reg = /(\/\.*[\w]+)|(\/\.\.+)/g
// let str = "///a/./b///../../c/"
// console.log("TCL: test", reg.test(str)) // true
// console.log("TCL:match ", str.match(reg)) // ["/a", "/b", "/..", "/..", "/c"]
// let arr = []
// while ((arr = reg.exec(str))) {
//   // reg.exec(str)  ["/a", "/a", undefined, index: 2, input: "///a/./b///../../c/", groups: undefined]
//   console.log("TCL: arr", arr[0]) // '/a'
// }
// 正则表达式里面，括号是分组，括起来了的东西会成为$1,$2变量可直接用
// let reg = /（(.*)）/g
// let str = "2019-02 （2）"

// string.replace(reg,'$1'),// 2019-02 2  $1必须直接作用于“”内，如果直接这里变成函数参数的话失效
// string.replace(reg,函数（$1）) // 不生效，下面写法把它解析出来才可以生效
// string.replace(reg,（match, $1, $2）=> {  return ‘**’ + $1 + “***"} ) // 2019-02 ***2***

// 经常会遇到动态拼接正则表达式的例子，正则配合模板语言的话要注意特殊符号要\\两个杠，然后用eval( )才能将它转正真的正则表达式
// let reg=`/\\?${arg}=([^&]*)/gi`;
// if(url.match(eval(reg))){
// tmp=url.replace(eval(reg),"要替换的文本");

// 字符串中连续出现最多的字符和个数
// let str = "abbkejsbccc78wqaaaa"

// function test() {
//   let reg = /(\w)\1+/g
//   let match = str.match(reg)
//   if (!match || match.length < 1) {
//     console.log("TCL: 并没有找到连续相同的字符")
//     return
//   }
//   let res = match.reduce((pre, next) => {
//     if (next.length > pre.length) {
//       return next
//     } else {
//       return pre
//     }
//   }, match[0])
//   console.log("TCL: ", res[0])
//   return res[0]
// }
// test()

/*
this指向问题

1. 普通函数
  a. 直接看有没有new或挥洒后端返者call绑定this，没有的话下一步
  b. 直接看执行的时候前面是谁点调用的，默认就是window
2. 箭头函数
  直接向上一层找，直接找到外面有一层是 "普通函数" (如果只是单纯的对象包着就算作平级的就要继续往上找)包着的，
  没有的话就代表是window，this指向就跟上一层的这个指向是一样的
*/

// var obj = {
//   x: 22,
//   aaa() {
//     let fn = () => {
//       console.log("aa", this)
//     }
//     fn()
//   },
//   bbb: () => {
//     console.log("bb", this)
//   },
//   ccc: () => {
//     let fn = () => {
//       console.log("ccc", this)
//     }
//     fn()
//   }
// }
// obj.aaa() // this => obj
// obj.bbb() // this => window
// obj.ccc() // this => window

// var student = {
//   name: "若川",
//   doSth: function() {
//     console.log(this.name)
//     return () => {
//       console.log("arrowFn:", this.name)
//     }
//   }
// }
// var person = {
//   name: "person"
// }
// student.doSth().call(person) // '若川'  'arrowFn:' '若川'
// student.doSth.call(person)() // 'person' 'arrowFn:' 'person'

// obj.methods.say()
// obj.methods.say2()

// const shape = {
//   radius: 10,
//   normal() {
//     // console.log("this1", this)
//     return this.radius * 2
//   },
//   arrow: () => {
//     console.log("TCL: ", this)
//     return 2 * Math.PI * this.radius
//   }
// }
// // 下列语句的返回值分别是什么？
// // 正常函数下，判断this直接看函数执行前是谁点调用的，没有就是默认window

// console.log((func => func())(shape.normal)) // NaN
// console.log((s => s.normal())(shape)) // 20
// console.log((s => s.arrow())(shape)) // NaN this => window
// console.log("TCL:箭头 ", shape.arrow()) // NaN
// const c = new shape.normal() // shape.normal is not a constructor，应该吧normal改写成普通的normal：function(){}而不能用简写的normal()

// 经典foo问题
// https://www.cnblogs.com/laojun/p/8287399.html
// function Foo() {
//   console.log("TCL: ", this)
//   getName = function() {
//     console.log(1)
//   }
//   return this
// }

// Foo.getName = function() {
//   console.log(2)
// }

// Foo.prototype.getName = function() {
//   console.log(3)
// }

// var getName = function() {
//   console.log(4)
// }

// function getName() {
//   console.log(5)
// }

// //输出以下的输出结果

// //函数Foo的静态方法
// console.log("TCL: Foo -> Foo", Foo)

// Foo.getName() //2

// //function getName有提前声明的规则，声明后被var getName= 。。覆盖，则getName为4
// getName() //4

// //Foo()的return this为window，window.getName 在Foo里面被覆盖，则输出1
// Foo().getName() //1

// //同上，因调用了Foo();window的getName被覆盖
// getName() //1

// //依然只是调用了Foo对象上的getName,又因为Foo.getNname，所以相当于
// /**
//  *  function a(){console.log(2)};
//  *  new a();
//  * **/
// new Foo.getName() //2

// //先执行了new Foo()；返回一个对象，这个对象的getName为prototype上的getName,相当于(new Foo()).getName();
// new Foo().getName() //3

// new new Foo().getName() //3

// 手动实现bind
// Function.prototype.bind = function(ctx) {
//   var self = this
//   return function() {
//     return self.apply(ctx, arguments)
//   }
// }
// 实现call
// Function.prototype.call = function(context) {
//   var context = context || window; //因为传进来的context有可能是null
//   context.fn = this;
//   var args = [];
//   for (var i = 1; i < arguments.length; i++) {
//       args.push("arguments[" + i + "]"); //不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错
//   }
//   args = args.join(",");

//   var result = eval("context.fn(" + args + ")"); //相当于执行了context.fn(arguments[1], arguments[2]);

//   delete context.fn;
//   return result; //因为有可能this函数会有返回值return
// }
// 实现apply
// Function.prototype.apply2 = function(context, arr) {
//   var context = context || window; //因为传进来的context有可能是null
//   context.fn = this;
//   var args = [];
//   var params = arr || [];
//   for (var i = 0; i < params.length; i++) {
//       args.push("params[" + i + "]"); //不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错
//   }
//   args = args.join(",");

//   var result = eval("context.fn(" + args + ")"); //相当于执行了context.fn(arguments[1], arguments[2]);

//   delete context.fn;
//   return result; //因为有可能this函数会有返回值return
// }

// function Foo() {
//     Foo.a = function() {
//         console.log(1)
//     }
//     this.a = function() {
//         console.log(2)
//     }
// }
// Foo.prototype.a = function() {
//     console.log(3)
// }
// Foo.a = function() {
//     console.log(4)
// }
// Foo.a();
// let obj = new Foo();
// obj.a();
// Foo.a();

// -- 4  2  1

// 设计模式

// 1.单例模式
// let getSingle = function(fn) {
//   let instance
//   return function() {
//     return instance || (instance = fn.apply(this, arguments))
//   }
// }

// // 高阶函数实现AOP（面向切面编程，即各种中间件）,函数中间件
// Function.prototype.before = function(beforeFn) {
//   let _this = this
//   return function() {
//     beforeFn.apply(this, arguments)
//     return _this.apply(this, arguments)
//   }
// }
// Function.prototype.after = function(afterFn) {
//   let _this = this
//   return function() {
//     let ret = _this.apply(this, arguments)
//     afterFn.apply(this, arguments)
//     return ret
//   }
// }

// let func = function() {
//   console.log("TCL: ", 2)
// }
// func = func
//   .before(function() {
//     console.log("TCL: ", 1)
//   })
//   .after(function() {
//     console.log("TCL: ", 3)
//   })

// func()

// 科利华,柯里化，部分求值，传入的参数先存起来，到最后才一次性求
// 1.柯里化函数，首先第一层的函数可以理解是一个闭包变量，可存储的，
// 2. 然后再return 一个函数，这个函数的函数参数便是接下来一层的函数，只要做相应的处理即可，最后还要返回这个函数
// 递归去按同样的逻辑解析剩下来所有参数，自己看一下下面的a,b打印就知道了

// 1. 常见面试题
// function add(a) {
//   console.log("TCL: a", a)
//   function sum(b) {
//     console.log("TCL: b", b)
//     // 使用闭包
//     a = a + b // 累加
//     return sum
//   }
//   sum.toString = function() {
//     // 重写toString()方法
//     return a
//   }
//   return sum // 返回一个函数
// }

// console.log("TCL: ", add(1)) // 1
// console.log("TCL: ", add(1)(2)) // 3
// console.log("TCL: ", add(1)(2)(3)) // 6
// console.log("TCL: ", add(1)(2)(3)(4)) // 10

// 2. 通用柯里化函数
// function curry(fn) {
//   return function curried() {
//     var args = [].slice.call(arguments)
//     // arguments ==> [传入参数，length:长度]  例如：【1，2，3，length:0]
//     // 之所以写上面那句是为了把长度去掉，变成纯传入参数的数组
//     // 结果： 【1，2，3】

//     return args.length >= fn.length
//       ? fn.apply(null, args)
//       : function() {
//           var rest = [].slice.call(arguments)
//           return curried.apply(null, args.concat(rest))
//         }
//   }
// }

// let curry = fn => {
//   let curried = (...args) => {
//     if (args.length >= fn.length) {
//       return fn.apply(null, args)
//     } else {
//       return (...rest) => {
//         return curried.apply(null, args.concat(rest))
//       }
//     }
//   }
//   return curried
// }

// function foo(a, b, c, d) {
//   return a + b + c + d
// }
// let testCurry = curry(foo)
// console.log("TCL: ", testCurry(1, 2, 3, 6))
// console.log("TCL: ", testCurry(1)(2)(3, 6))
// console.log("TCL: ", testCurry(1)(2)(3)(6))

// 2.策略模式

// 3.代理模式
// a.保护代理，不直接访问
// b.虚拟代理，在真正需要的时候再加载然后代理
// 缓存代理

// let mult = (...args) => {
//   let a = 1
//   for (let i = 0; i < args.length; i++) {
//     a = a * args[i]
//   }
//   return a
// }
// let createProxyFactory = fn => {
//   let cache = {}
//   return (...args) => {
//     let nums = args.join(",")
//     if (cache[nums]) {
//       console.log("from cache ", cache[nums])
//       return cache[nums]
//     } else {
//       cache[nums] = fn.apply(this, args)
//       return cache[nums]
//     }
//   }
// }

// let proxyMult = createProxyFactory(mult)

// console.log("TCL: ", proxyMult(1, 2, 3, 4))
// console.log("TCL: ", proxyMult(1, 2, 3, 4))

// 算法
// 归并排序
// function mergeSort(arr) {
//   //采用自上而下的递归方法
//   var len = arr.length
//   if (len < 2) {
//     return arr
//   }
//   var middle = Math.floor(len / 2),
//     left = arr.slice(0, middle),
//     right = arr.slice(middle)
//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//   var result = []
//   console.time("归并排序耗时")
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift())
//     } else {
//       result.push(right.shift())
//     }
//   }

//   while (left.length) result.push(left.shift())

//   while (right.length) result.push(right.shift())
//   console.timeEnd("归并排序耗时")
//   return result
// }

// // 快速排序（快排）
// function quick_sort(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   let pivot = arr[0]
//   let left = []
//   let right = []
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quick_sort(left).concat([pivot], quick_sort(right))
// }

// // 原地快排
// var quickSort = function(arr, left, right) {
//   // 如果左边界比右边界大，返回结果，排序结束
//   if (left > right) {
//     return
//   }

//   // 默认值处理，如果有传入left和right参数，就赋值这个参数，否则就赋值后面的默认值
//   left = left || 0
//   right = right || arr.length - 1

//   // 定义移动的左游标和右游标
//   var leftPoint = left
//   var rightPoint = right

//   // 定义一个基准数
//   var temp = arr[left]

//   // 判断左右游标是否重合，如果重合，循环结束
//   while (leftPoint != rightPoint) {
//     // 基准数在左边，因此从右边开始一个个扫描
//     // 从右到左，寻找小于基准数的数，且左游标要小于右游标
//     // 如果数字大于基准数（证明不符合条件），寻找下一个
//     // 直到找到比基准数小的数，游标停止递减
//     while (arr[rightPoint] >= temp && leftPoint < rightPoint) {
//       rightPoint--
//     }
//     // 从左到右，寻找大于基准数的数，且左游标要小于右游标
//     // 如果数字小于基准数（证明不符合条件），寻找下一个
//     // 直到找到比基准数小的数，游标停止递增
//     while (arr[leftPoint] <= temp && leftPoint < rightPoint) {
//       leftPoint++
//     }

//     // 如果左游标小于右游标，则交换两个数字的位置
//     if (leftPoint < rightPoint) {
//       var changeNumber = arr[leftPoint]
//       arr[leftPoint] = arr[rightPoint]
//       arr[rightPoint] = changeNumber
//     }
//     // 进行下一次循环，直到两个游标重合位置
//   }

//   // 重合之后，交换基准数
//   arr[left] = arr[leftPoint]
//   arr[leftPoint] = temp

//   // 递归操作左右两个数组
//   quickSort(arr, left, leftPoint - 1)
//   quickSort(arr, leftPoint + 1, right)

//   return arr
// }

// // 选择排序
// function selectionSort(arr) {
//   var len = arr.length
//   var minIndex, temp
//   console.time("选择排序耗时")
//   for (var i = 0; i < len - 1; i++) {
//     minIndex = i
//     for (var j = i + 1; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         //寻找最小的数
//         minIndex = j //将最小数的索引保存
//       }
//     }
//     temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//   }
//   console.timeEnd("选择排序耗时")
//   return arr
// }

// // 插入排序
// function binaryInsertionSort(array) {
//   if (Array.isArray(array)) {
//     console.time("二分插入排序耗时：")

//     for (var i = 1; i < array.length; i++) {
//       var key = array[i],
//         left = 0,
//         right = i - 1
//       while (left <= right) {
//         var middle = parseInt((left + right) / 2)
//         if (key < array[middle]) {
//           right = middle - 1
//         } else {
//           left = middle + 1
//         }
//       }
//       for (var j = i - 1; j >= left; j--) {
//         array[j + 1] = array[j]
//       }
//       array[left] = key
//     }
//     console.timeEnd("二分插入排序耗时：")

//     return array
//   } else {
//     return "array is not an Array!"
//   }
// }

// 二分查找
// 递归算法
// function binary_search(arr, low, high, key) {
//   if (low > high) {
//     return -1
//   }
//   var mid = parseInt((high + low) / 2)
//   if (arr[mid] == key) {
//     return mid
//   } else if (arr[mid] > key) {
//     high = mid - 1
//     return binary_search(arr, low, high, key)
//   } else if (arr[mid] < key) {
//     low = mid + 1
//     return binary_search(arr, low, high, key)
//   }
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86]
// var result = binary_search(arr, 0, 13, 10)
// alert(result) // 9 返回目标元素的索引值

// 二分补齐
// function leftPad(str, length, ch) {
//   let len = (length = str.length)
//   let total = ""
//   while (len) {
//     if (len % 2 == 1) total += ch
//     if (len == 1) return total + str
//     ch += ch // 0 00 0000
//   }
// }

// 遍历树
// /*深度优先遍历三种方式*/
// let deepTraversal1 = (node, nodeList = []) => {
//   if (node !== null) {
//     nodeList.push(node)
//     let children = node.children
//     for (let i = 0; i < children.length; i++) {
//       deepTraversal1(children[i], nodeList)
//     }
//   }
//   return nodeList
// }
// 广度优先
// let widthTraversal2 = node => {
//   let nodes = []
//   let stack = []
//   if (node) {
//     stack.push(node)
//     while (stack.length) {
//       let item = stack.shift()
//       let children = item.children
//       nodes.push(item)
//       // 队列，先进先出
//       // nodes = [] stack = [parent]
//       // nodes = [parent] stack = [child1,child2,child3]
//       // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
//       // nodes = [parent,child1,child2]
//       for (let i = 0; i < children.length; i++) {
//         stack.push(children[i])
//       }
//     }
//   }
//   return nodes
// }

// es5继承相关
// 1. 最主要认识三点，每个构造函数都有prototype（孩子）,孩子有老爸所有的方法遗产
// 2. 所有实例出来的对象都有一个_proto（即Father.prototype，里面有constructor标明它的构造函数是Father）
// Father.prototype.constructor ==> Father 用来指明爸爸是谁

// 3. 寄生组合继承本质就是将目标类的prototype设置成父类.prototype,这个prototype的constructor要改为目标类
// 然后子类在用Father.call（this）来初始化

// 综上
// 寄生组合继承
// function inherit(son, father) {
//   let obj = Object.create(father.prototype)
//   obj.constructor = son
//   son.prototype = obj
// }
// function Father(name) {
//   this.name = name
//   this.age = 44
// }
// // 定义原型链上的方法babaMethod
// // 为什么要将方法定义在原型上，定义在原型上的方法，所有的实例对象都共享
// // 不会出现没实列一个对象都重新创建一个这个方法
// Father.prototype.babaMethod = function () {
//   console.log(this.name)
// }
// let haha = new Father('爸爸')
// function Son() {
//   Father.call(this, '儿子')
//   this.age = '20'
// }
// inherit(Son, Father)

// let test = new Son()
// test.babaMethod()

// 微任务和宏任务，先微再宏，只不过一开始的script块也可以算是宏任务
// 宏任务：script中代码、setTimeout、setInterval、I/O、UI render。
// 微任务: promise.then、nexttick, Object.observe、MutationObserver。
// async function async1() {
//   console.log("async1 start")
//   await async2()
//   console.log("async1 end")
// }
// async function async2() {
//   console.log("async2")
// }
// console.log("script start")
// setTimeout(function() {
//   console.log("setTimeout")
// }, 0)
// async1()
// new Promise(function(resolve) {
//   console.log("promise1")
//   resolve()
// }).then(function() {
//   console.log("promise2")
// })
// console.log("script end")

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// 2.
// function sleep(time) {
//   let startTime = new Date()
//   while (new Date() - startTime < time) {}
//   console.log("1s over")
// }
// setTimeout(() => {
//   console.log("setTimeout - 1")
//   setTimeout(() => {
//     console.log("setTimeout - 1 - 1")
//     sleep(1000)
//   })
//   new Promise((resolve) => resolve()).then(() => {
//     console.log("setTimeout - 1 - then")
//     new Promise((resolve) => resolve()).then(() => {
//       console.log("setTimeout - 1 - then - then")
//     })
//   })
//   sleep(1000)
// })

// setTimeout(() => {
//   console.log("setTimeout - 2")
//   setTimeout(() => {
//     console.log("setTimeout - 2 - 1")
//     sleep(1000)
//   })
//   new Promise((resolve) => resolve()).then(() => {
//     console.log("setTimeout - 2 - then")
//     new Promise((resolve) => resolve()).then(() => {
//       console.log("setTimeout - 2 - then - then")
//     })
//   })
//   sleep(1000)
// })
// setTimeout - 1
// 1s over
// setTimeout - 1 - then
// setTimeout - 1 - then - then
// setTimeout - 2
// 1s over
// setTimeout - 2 - then
// setTimeout - 2 - then - then
// setTimeout - 1 - 1
// 1s over
// setTimeout - 2 - 1
// 1s over

// 实现flatten
// function flatten(arr) {
//   let arrs = [...arr]
//   let newArr = []
//   while (arrs.length) {
//     let item = arrs.shift()
//     if (Array.isArray(item)) {
//       arrs.unshift(...item)
//     } else {
//       newArr.push(item)
//     }
//   }
//   return newArr
// }
// // 递归实现
// function flatten(arr) {
//   let arrs = []
//   arr.map(item => {
//     if (Array.isArray(item)) {
//       arrs.push(...flatten(item))
//     } else {
//       arrs.push(item)
//     }
//   })
//   return arrs
// }
// 扩展将数组打平并且去重升序
// Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
//   return a - b
// })
// 递归解法
// function flap(arr = []) {
//   let res = []
//   digui(arr)
//   return res

//   function digui(tmp) {
//     tmp.forEach(item => {
//       if (Array.isArray(item)) {
//         digui(item)
//       } else {
//         if (!res.includes(item)) {
//           res.push(item)
//           res.sort((a, b) => a - b)
//         }
//       }
//     })
//   }
// }
// console.log("TCL: ", flap([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]))

// setState原理
// 1. 在生命周期或者节点on触发的事件才会触发react的batchUpdate函数，才会使得setState异步批量处理
// 其他情况下，比如setTimeout，或者addEventListner，setState回调里的setState都是同步的，立刻设置立刻update
// 2. setState(),第一个参数可以为函数也可以直接为对象，函数的话相当于在set之前可以做什么，然后再返回state对象
// 其中setState( (pre) => {
//    pre要特别注意，它代表这个语句之前的所有setState语句合并之后最新的一个state值，之后的setState它是不会计算的
//    return {counter:pre.counter+1}
// })
// 3. setState属性一旦更新就会触发willMount，然后再执行setState的第二个回调

// constructor(props) {
//   super(props)
//   this.state = {
//     a: 1,
//     b: 1000,
//     counter: 0
//   }
// }
// componentDidMount() {
//   setTimeout(() => {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//     console.log("TCL: 2", this.state.counter) // 6.  ==> 2
//   }, 300)
//   // 批量操作：对同一个key多次操作会合并，会执行最后一次
//   this.setState({ counter: this.state.counter + 1 })
//   this.setState({ counter: this.state.counter + 1 })
//   this.setState({ counter: this.state.counter + 1 }, () => {
//     console.log("TCL: 1", this.state.counter) // 4.  ==> 1
//   })
//   console.log("TCL: 3", this.state.counter) // 1.  ==> 0
//   this.setState(prev => {
//     console.log("TCL: 4", this.state.counter) // 2. ==> 0
//   })
//   setTimeout(() => {
//     console.log("TCL: 5", this.state.counter) // 5.  ==> 1
//   }, 280)
//   this.setState(pre => {
//     console.log("TCL: 6", pre.counter) // 3.  ==> 1
//   })
//   console.log("TCL: 7", this.state.counter)
//     TCL: 3 0
//     TCL: 7 0
//     TCL: 4 0
//     TCL: 6 1
//     willUpdate
//     didUdate
//     TCL: 1 1
//     TCL: 5 1
//     willUpdate
//     didUdate
//     TCL: 2 2
//   document.body.addEventListener("click", () => {
//     this.setState({
//       counter: 300
//     })
//     console.log("TCL: ", this.state.counter) // 结果300
//   })
// }

// onClickToSetA = () => {
//   setTimeout(() => {
//     this.setState(
//       {
//         a: ++this.state.a
//       },
//       () => {
//         console.log("0000")
//       }
//     )
//     console.log("1111")
//     this.setState(
//       {
//         b: Math.random()
//       },
//       () => {
//         console.log("2222")
//       }
//     )
//     console.log("3333")
//   }, 0)
//   //  willUpdate
//   //  didUdate
//   //  0000
//   //  1111
//   //  willUpdate
//   //  didUdate
//   //  2222
//   //  3333
// }
// componentWillUpdate() {
//   console.log("willUpdate")
// }
// componentDidUpdate() {
//   console.log("didUdate")
// }

// 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒
// function sleep1(time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }
// function sleep2(time) {
//   const start = Date.now()
//   let stop
//   while (true) {
//     stop = Date.now()
//     if (stop - start > time) break
//   }
// }

// async function exec() {
//   console.log("11111111111111111111111111111")
//   await sleep1(1000)
//   console.log("222222222222222222222222222222")
//   sleep2(1000)
//   console.log("333333333333333333333333333333")
// }
// exec()

// 类型转换
// 如果是+号的话，如果是直接跟一个值，就会先转为数字，如果是两值相加，就会先toString尽量转为字符串
// 如果是其他运算符的话，就尽量转为数字运算
// 1 + "1"   ==》 11
// 2 * "2"  ==》 4
// [1, 2] + [2, 1]  ==》 1，2，2，1
// "a" + + "b"  ==》 等于a +  (+ b) ==> a + NaN ==> aNaN

// 隐式转换，// 这题考察的应该是类型的隐式转换,考引用类型在比较运算符时候,隐式转换会调用本类型toString或valueOf方法.
// valueOf优于toString,有valueOf就不会执行toString

// 重写toString和valueOf
// 所有对象继承了两个转换方法：
// 第一个是toString()方法，改变一个对象或者函数的值
// 第二个是valueOf(),返回相应的原始值
// 问：
// var a = ?;
// if (a == 1 && a == 2 && a == 3) {
//   console.log(1)
// }

// 利用toString
// let a = {
//   i: 1,
//   toString() {
//     console.log("TCL: xixi")
//     return a.i++
//   }
// }
// 利用valueOf
// let a = {
//   i: 1,
//   valueOf () {
//     return a.i++
//   }
// }
// 数组这个就有点妖了
// var a = [1,2,3];
// a.join = a.shift;

// 对象借用数组的方法
// 数组会根据length来进行push操作。例如以上的obj会根据length==2 来更新下标，也就是push会从2（length==2，意味着在[0,1,***]后添加）开始
// 然而下标值又是key值，所以会把key值为2，3的value替换成1，2
// 然后打印出来的之所以是一个伪数组是因为这是开发者工具devtool的判断依据，如果有splice方法和length，devtools就会判断成数组
// var obj = {
//   "2": 3,
//   "3": 4,
//   length: 2,
//   splice: Array.prototype.splice,
//   push: Array.prototype.push
// }
// obj.push(1)
// obj.push(2)
// console.log(obj)
// res: [empty × 2, 1, 2, splice: ƒ, push: ƒ]

// 实现 (5).add(3).minus(2) 功能
// Number.prototype.add = function(n) {
//   return this.valueOf() + n
// }
// Number.prototype.minus = function(n) {
//   return this.valueOf() - n
// }

// proxy实现数据绑定
// const data = { count: 0 }
// const proxy = new Proxy(data, {
//   get(target, property) {
//     return target[property]
//   },
//   set(target, property, value) {
//     target[property] = value
//     render(value)
//   }
// })

// render(proxy.count)

// function render(value) {
//   document.getElementById("count").innerHTML = value
// }

// function increase() {
//   proxy.count += 1
// }

// function decrease() {
//   proxy.count -= 1
// }

// 对象键名转换
// 这题考察的是对象的键名的转换。
// 对象的键名只能是字符串和 Symbol 类型。
// 其他类型的键名会被转换成字符串类型。
// 对象转字符串默认会调用 toString 方法。
// example 1
// var a={}, b='123', c=123;
// a[b]='b';
// a[c]='c';
// console.log(a[b]);

// // example 2
// var a={}, b=Symbol('123'), c=Symbol('123');
// a[b]='b';
// a[c]='c';
// console.log(a[b]);

// // example 3
// var a={}, b={key:'123'}, c={key:'456'};
// a[b]='b';
// a[c]='c';
// console.log(a[b]);

// 转换成树
// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

// // 原始 list 如下
// let list =[
//     {id:1,name:'部门A',parentId:0},
//     {id:2,name:'部门B',parentId:0},
//     {id:3,name:'部门C',parentId:1},
//     {id:4,name:'部门D',parentId:1},
//     {id:5,name:'部门E',parentId:2},
//     {id:6,name:'部门F',parentId:3},
//     {id:7,name:'部门G',parentId:2},
//     {id:8,name:'部门H',parentId:4}
// ];
// const result = convert(list, ...);
// function convert(list) {
//   const res = []
//   const map = list.reduce((res, v) => ((res[v.id] = v), res), {})
//   for (const item of list) {
//     if (item.parentId === 0) {
//       res.push(item)
//       continue
//     }
//     if (item.parentId in map) {
//       const parent = map[item.parentId]
//       parent.children = parent.children || []
//       parent.children.push(item)
//     }
//   }
//   return res
// }

// 手动实现promise
// 简易版
// const PENDING = 1
// const FULFILLED = 2
// const REJECTED = 3
// class KPromise {
//   constructor(cb) {
//     this.state = PENDING // 完成后的传值
//     this.value = null
//     // 失败后的原因
//     this.reason = null
//     this.fulfilledCbs = []
//     this.rejectCbs = []
//     // this.fn = fn
//     let reslove = data => {
//       setTimeout(() => {
//         // 这个执行后，修改状态
//         if (this.state == PENDING) {
//           this.state = FULFILLED
//           this.value = data
//           this.fulfilledCbs.forEach(v => v(data))
//         }
//       })
//     }
//     let reject = reason => {
//       setTimeout(() => {
//         // 这个执行后，修改状态
//         if (this.state == PENDING) {
//           this.state = REJECTED
//           this.reason = reason
//           this.rejectCbs.forEach(v => v(reason))
//         }
//       })
//     }
//     cb(reslove, reject)
//   }
//   then(onFufilled, onRejected) {
//     if (typeof onFufilled == "function") {
//       // 成功回掉
//       this.fulfilledCbs.push(onFufilled)
//     }
//     if (typeof onRejected == "function") {
//       // 失败回掉
//       this.rejectCbs.push(onRejected)
//     }
//   }
// }
// let promise = new KPromise((resolve, reject) => {
//   if (2 < 4) {
//     resolve("hi")
//   } else {
//     reject("出错了")
//   }
// }).then(
//   data => {
//     console.log(data)
//   },
//   reason => {
//     throw new Error(reason)
//   }
// )

// 手动实现promise.race, promise.all
// 这些方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，
// 就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。

// Promise._race = arr =>
//   new Promise((resolve, reject) => {
//     arr.forEach(item => {
//       item.then(resolve, reject)
//     })
//   })
// Promise._all(list) {
//   return new Promise((resolve, reject) => {
//     let resValues = []
//     let counts = 0
//     for (let [i, p] of list) {
//       resolve(p).then(
//         res => {
//           counts++
//           resValues[i] = res
//           if (counts === list.length) {
//             resolve(resValues)
//           }
//         },
//         err => {
//           reject(err)
//         }
//       )
//     }
//   })
// }
// 实现promise.catch,promise.finally
// catch方法其实就是执行一下then的第二个回调
// catch(rejectFn) {
//   return this.then(undefined, rejectFn)
// }
// finally方法
// finally(callback) {
//   return this.then(
//     value => MyPromise.resolve(callback()).then(() => value),             // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
//     reason => MyPromise.resolve(callback()).then(() => { throw reason })  // reject同理
//   )
// }
//静态的resolve方法
// static resolve(value) {
//   if(value instanceof MyPromise) return value // 根据规范, 如果参数是Promise实例, 直接return这个实例
//   return new MyPromise(resolve => resolve(value))
// }
// //静态的reject方法
// static reject(reason) {
//   return new MyPromise((resolve, reject) => reject(reason))
// }

// 手动实现async/await
// function run(gen) {
//   var g = gen() //由于每次gen()获取到的都是最新的迭代器,因此获取迭代器操作要放在_next()之前,否则会进入死循环

//   function _next(val) {
//     //封装一个方法, 递归执行g.next()
//     var res = g.next(val) //获取迭代器对象，并返回resolve的值
//     if (res.done) return res.value //递归终止条件
//     res.value.then((val) => {
//       //Promise的then方法是实现自动迭代的前提
//       _next(val) //等待Promise完成就自动执行下一个next，并传入resolve的值
//     })
//   }
//   _next() //第一次执行
// }
// function run(gen) {
//   //把返回值包装成promise
//   return new Promise((resolve, reject) => {
//     var g = gen()

//     function _next(val) {
//       //错误处理
//       try {
//         var res = g.next(val)
//       } catch (err) {
//         return reject(err)
//       }
//       if (res.done) {
//         return resolve(res.value)
//       }
//       //res.value包装为promise，以兼容yield后面跟基本类型的情况
//       Promise.resolve(res.value).then(
//         (val) => {
//           _next(val)
//         },
//         (err) => {
//           //抛出错误
//           g.throw(err)
//         }
//       )
//     }
//     _next()
//   })
// }

// 豪华版实现promise
//Promise/A+规定的三种状态
// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// class MyPromise {
//   // 构造方法接收一个回调
//   constructor(executor) {
//     this._status = PENDING // Promise状态
//     this._value = undefined // 储存then回调return的值
//     this._resolveQueue = [] // 成功队列, resolve时触发
//     this._rejectQueue = [] // 失败队列, reject时触发

//     // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
//     let _resolve = (val) => {
//       //把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
//       const run = () => {
//         if (this._status !== PENDING) return // 对应规范中的"状态只能由pending到fulfilled或rejected"
//         this._status = FULFILLED // 变更状态
//         this._value = val // 储存当前value

//         // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
//         // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
//         while (this._resolveQueue.length) {
//           const callback = this._resolveQueue.shift()
//           callback(val)
//         }
//       }
//       setTimeout(run)
//     }
//     // 实现同resolve
//     let _reject = (val) => {
//       const run = () => {
//         if (this._status !== PENDING) return // 对应规范中的"状态只能由pending到fulfilled或rejected"
//         this._status = REJECTED // 变更状态
//         this._value = val // 储存当前value
//         while (this._rejectQueue.length) {
//           const callback = this._rejectQueue.shift()
//           callback(val)
//         }
//       }
//       setTimeout(run)
//     }
//     // new Promise()时立即执行executor,并传入resolve和reject
//     executor(_resolve, _reject)
//   }

//   // then方法,接收一个成功的回调和一个失败的回调
//   then(resolveFn, rejectFn) {
//     // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
//     typeof resolveFn !== 'function' ? (resolveFn = (value) => value) : null
//     typeof rejectFn !== 'function'
//       ? (rejectFn = (reason) => {
//           throw new Error(reason instanceof Error ? reason.message : reason)
//         })
//       : null

//     // return一个新的promise
//     return new MyPromise((resolve, reject) => {
//       // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
//       const fulfilledFn = (value) => {
//         try {
//           // 执行第一个(当前的)Promise的成功回调,并获取返回值
//           let x = resolveFn(value)
//           // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
//           x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
//         } catch (error) {
//           reject(error)
//         }
//       }

//       // reject同理
//       const rejectedFn = (error) => {
//         try {
//           let x = rejectFn(error)
//           x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
//         } catch (error) {
//           reject(error)
//         }
//       }

//       switch (this._status) {
//         // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
//         case PENDING:
//           this._resolveQueue.push(fulfilledFn)
//           this._rejectQueue.push(rejectedFn)
//           break
//         // 当状态已经变为resolve/reject时,直接执行then回调
//         case FULFILLED:
//           fulfilledFn(this._value) // this._value是上一个then回调return的值(见完整版代码)
//           break
//         case REJECTED:
//           rejectedFn(this._value)
//           break
//       }
//     })
//   }
// }

// 手动实现generator,
// 原理是yield会将代码大概转换成下面三个步骤，用switch来执行不同步骤的函数，核心点在于每次运行
// 后对上下文的保存，下次再使用时直接根据上下文执行下一步的函数，所以yield看起来想挂载了，其实并没有，只是保存了上下文
// 从而知道该执行哪一块的函数而已

// 1. 我们定义的function*生成器函数被转化为以上代码
// 2. 转化后的代码分为三大块：
// gen$(_context)由yield分割生成器函数代码而来
// context对象用于储存函数执行上下文
// invoke()方法定义next()，用于执行gen$(_context)来跳到下一步

// 3. 当我们调用g.next()，就相当于调用invoke()方法，执行gen$(_context)，进入switch语句，switch根据context的标识，执行对应的case块，return对应结果
// 当生成器函数运行到末尾（没有下一个yield或已经return），switch匹配不到对应代码块，就会return空值，这时g.next()返回{value: undefined, done: true}

// 生成器函数根据yield语句将代码分割为switch-case块，后续通过切换_context.prev和_context.next来分别执行各个case
// function gen$(_context) {
//   while (1) {
//     switch (_context.prev = _context.next) {
//       case 0:
//         _context.next = 2;
//         return 'result1';

//       case 2:
//         _context.next = 4;
//         return 'result2';

//       case 4:
//         _context.next = 6;
//         return 'result3';

//       case 6:
//       case "end":
//         return _context.stop();
//     }
//   }
// }

// // 低配版context
// var context = {
//   next:0,
//   prev: 0,
//   done: false,
//   stop: function stop () {
//     this.done = true
//   }
// }

// // 低配版invoke
// let gen = function() {
//   return {
//     next: function() {
//       value = context.done ? undefined: gen$(context)
//       done = context.done
//       return {
//         value,
//         done
//       }
//     }
//   }
// }

// 取中间数
// 这个在leetCode上有， 不考虑时间负责度的情况下 把两个数组合并 -> 排序 -> 单数取中间，双数取中间两个平均值

// // O(log(m+n))解法
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   let m = nums1.length
//   let n = nums2.length
//   let k1 = Math.floor((m + n + 1) / 2)
//   let k2 = Math.floor((m + n + 2) / 2)

//   return (
//     (findMedianSortedArraysCore(nums1, 0, nums2, 0, k1) +
//       findMedianSortedArraysCore(nums1, 0, nums2, 0, k2)) /
//     2
//   )
// }

// const findMedianSortedArraysCore = (nums1, i, nums2, j, k) => {
//   // 如果数组起始位置已经大于数组长度-1
//   // 说明已经是个空数组
//   // 直接从另外一个数组里取第k个数即可
//   if (i > nums1.length - 1) {
//     return nums2[j + k - 1]
//   }
//   if (j > nums2.length - 1) {
//     return nums1[i + k - 1]
//   }
//   // 如果k为1
//   // 就是取两个数组的起始值里的最小值
//   if (k === 1) {
//     return Math.min(nums1[i], nums2[j])
//   }
//   // 取k2为(k/2)或者数组1的长度或者数组2的长度的最小值
//   // 这一步可以避免k2大于某个数组的长度（长度为从起始坐标到结尾）
//   let k2 = Math.floor(k / 2)
//   let length1 = nums1.length - i
//   let length2 = nums2.length - j
//   k2 = Math.min(k2, length1, length2)

//   let value1 = nums1[i + k2 - 1]
//   let value2 = nums2[j + k2 - 1]

//   // 比较两个数组的起始坐标的值
//   // 如果value1小于value2
//   // 就舍弃nums1前i + k2部分
//   // 否则舍弃nums2前j + k2部分
//   if (value1 < value2) {
//     return findMedianSortedArraysCore(nums1, i + k2, nums2, j, k - k2)
//   } else {
//     return findMedianSortedArraysCore(nums1, i, nums2, j + k2, k - k2)
//   }
// }

// 函数传参，函数参数，形参，对象传参问题
// 函数的形参是值的传递，传递对象的话，函数接受的是这个对象的指针。

// 1. 函数形参如果是一个对象的话，相当于o只是一个复制的指针，指向那个对象，o的操作会影响那个对象
// 2. 当o的指向变了的时候，操作的东西都是在新指向的那个东西了，就跟旧对象无关了

// function changeObjProperty(o) {
//   o.siteUrl = "http://www.baidu.com"
//   o = new Object() //这是一个新的对象
//   o.siteUrl = "http://www.google.com"
// }
// let webSite = new Object()
// changeObjProperty(webSite)

// console.log(webSite.siteUrl)
//www.baidu.com

// input框中文输入问题
// 其实看过elementui框架源码的童鞋都应该知道，elementui是通过compositionstart & compositionend做的中文输入处理：
// 相关代码：
{
  /* <input
ref="input"
@compositionstart="handleComposition"
@compositionupdate="handleComposition"
@compositionend="handleComposition"
> */
}

// 递归实现翻转
// function fun(num) {
//   let num1 = num / 10
//   let num2 = num % 10
//   if (num1 < 1) {
//     return num
//   } else {
//     num1 = Math.floor(num1)
//     return `${num2}${fun(num1)}`
//   }
// }
// var a = fun(12345)
// console.log(a)
// console.log(typeof a)

// 连续赋值，点赋值
// var a = { n: 1 }
// var b = a
// a.x = a = { n: 2 }

// console.log(a.x)
// console.log(b.x)
// 结果:
// undefined
// {n:2}

// 首先，a和b同时引用了{n:2}对象，接着执行到a.x = a = {n：2}语句，
// 尽管赋值是从右到左的没错，但是.的优先级比 = 要高，所以这里首先执行a.x，
// 相当于为a（或者b）所指向的{ n: 1 } 对象新增了一个属性x，即此时对象将变为{ n: 1; x: undefined } 。
// 之后按正常情况，从右到左进行赋值，此时执行a = { n: 2 }的时候，a的引用改变，指向了新对象{ n：2 },
// 而b依然指向的是旧对象。之后执行a.x = { n：2}的时候，并不会重新解析一遍a，而是沿用最初解析a.x时候的a，也即旧对象，故此时旧对象的x的值为{ n：2 } ，
// 旧对象为 { n: 1; x: { n：2 } } ，它被b引用着。
// 后面输出a.x的时候，又要解析a了，此时的a是指向新对象的a，而这个新对象是没有x属性的，故访问时输出undefined；而访问b.x的时候，将输出旧对象的x的值，即{n:2}。

// yield
// func.next(),next可以指定yield语句初始值，也就是直接相当于把整个yield后面的东西替换成这个值就是了
// function* say() {
//   let a = yield "1"
//   console.log(a)
//   let b = yield "2"
//   console.log(b)
// }

// let it = say() // 返回迭代器

// console.log(it.next())
// // 输出 { value: '1', done: false }
// // a的值并非该返回值，而是下次next参数

// console.log(it.next({ value: "我是第一步的初始值" }))
// // 输出 { value:'我是第一步的初始值' }
// // 输出{ value: '2', done: false }

// console.log(it.next({ value: "我是第二步的初始值" }))
// // 输出 { value:'我是第二步的初始值' }
// // 输出{ value: undefined, done: true }

// pwa原理
// https://blog.csdn.net/weixin_33692284/article/details/88027509

// 对象数组去重
// const responseList = [
//   { id: 1, a: 1 },
//   { id: 2, a: 2 },
//   { id: 3, a: 3 },
//   { id: 1, a: 4 },
// ];
// const result = responseList.reduce((acc, cur) => {
//     const ids = acc.map(item => item.id);
//     return ids.includes(cur.id) ? acc : [...acc, cur];
// }, []);
// console.log(result); // -> [ { id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3} ]
// 4.2 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数
// function request(url, body, successCallback, errorCallback, maxCount = 3) {
//   return fetch(url, body)
//     .then(response => successCallback(response))
//     .catch(err => {
//       if (maxCount <= 0) return errorCallback("请求超时")
//       return request(url, body, successCallback, errorCallback, --maxCount)
//     })
// }

// // 调用
// request(
//   "https://some/path",
//   { method: "GET", headers: {} },
//   response => {
//     console.log(response.json())
//   },
//   err => console.error(err)
// )

// map(parseInt)问题
// 解惑["1", "2", "3"].map(parseInt) 为何返回[1, NaN, NaN]
// map(parseInt) 相当于map((item,index) => parseInt(item,index))
// parseInt函数的第二个参数，
// 如果是0或者没设置，则parseInt正常解析，
// 如果 < 2 或者 >36，则NaN
// 其他，则第一个参数减10加上第二个基数，比如parseInt('17',8) = 15 (因为7 + 8)

// 手动实现filter
// Array.prototype.filter = function(fn, context) {
//   if (typeof fn != "function") {
//     throw new TypeError(`${fn} is not a function`)
//   }
//   let arr = this
//   let reuslt = []
//   for (var i = 0; i < arr.length; i++) {
//     let temp = fn.call(context, arr[i], i, arr)
//     if (temp) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// 数组乱序
// 取巧的一种算法，但是每个位置乱序的概率不同
// function mixArr(arr) {
//   return arr.sort(() => {
//     return Math.random() - 0.5
//   })
// }

// 遍历树结构
// 样例数据
// let data = {
//   name: "jack",
//   child: [
//     { name: "jack1" },
//     {
//       name: "jack2",
//       child: [
//         {
//           name: "jack2-1",
//           child: { name: "jack2-1-1" }
//         },
//         {
//           name: "jack2-2"
//         }
//       ]
//     },
//     {
//       name: "jack3",
//       child: { name: "jack3-1" }
//     }
//   ]
// }

// function findMultiChildPerson(data) {
//   let nameList = []

//   function tmp(data) {
//     if (data.hasOwnProperty("child")) {
//       if (Array.isArray(data.child)) {
//         nameList.push(data.name)
//         data.child.forEach(child => tmp(child))
//       } else {
//         tmp(data.child)
//       }
//     }
//   }
//   tmp(data)
//   return nameList
// }

// 驼峰命名
// var s1 = "get-element-by-id"

// // 转化为 getElementById
// var f = function(s) {
//   return s.replace(/-\w/g, function(x) {
//     return x.slice(1).toUpperCase()
//   })
// }

// 解析urlquery为对象
// function parseParam(url) {
//   const paramsStr = /.+\?(.+)$/.exec(url)[1] // 将 ? 后面的字符串取出来
//   const paramsArr = paramsStr.split("&") // 将字符串以 & 分割后存到数组中
//   let paramsObj = {}
//   // 将 params 存到对象中
//   paramsArr.forEach(param => {
//     if (/=/.test(param)) {
//       // 处理有 value 的参数
//       let [key, val] = param.split("=") // 分割 key 和 value
//       val = decodeURIComponent(val) // 解码
//       val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否转为数字

//       if (paramsObj.hasOwnProperty(key)) {
//         // 如果对象有 key，则添加一个值
//         paramsObj[key] = [].concat(paramsObj[key], val)
//       } else {
//         // 如果对象没有这个 key，创建 key 并设置值
//         paramsObj[key] = val
//       }
//     } else {
//       // 处理没有 value 的参数
//       paramsObj[param] = true
//     }
//   })

//   return paramsObj
// }

// 实现eventListener

// 触发名为type的事件
// class EventEmeitter {
//   constructor() {
//     this._events = this._events || new Map(); // 储存事件/回调键值对
//     this._maxListeners = this._maxListeners || 10; // 设立监听上限
//   }
// }

// EventEmeitter.prototype.emit = function(type, ...args) {
//   let handler
//   handler = this._events.get(type)
//   if (Array.isArray(handler)) {
//     // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
//     for (let i = 0; i < handler.length; i++) {
//       if (args.length > 0) {
//         handler[i].apply(this, args)
//       } else {
//         handler[i].call(this)
//       }
//     }
//   } else {
//     // 单个函数的情况我们直接触发即可
//     if (args.length > 0) {
//       handler.apply(this, args)
//     } else {
//       handler.call(this)
//     }
//   }

//   return true
// }

// // 监听名为type的事件
// EventEmeitter.prototype.addListener = function(type, fn) {
//   const handler = this._events.get(type) // 获取对应事件名称的函数清单
//   if (!handler) {
//     this._events.set(type, fn)
//   } else if (handler && typeof handler === "function") {
//     // 如果handler是函数说明只有一个监听者
//     this._events.set(type, [handler, fn]) // 多个监听者我们需要用数组储存
//   } else {
//     handler.push(fn) // 已经有多个监听者,那么直接往数组里push函数即可
//   }
// }

// 统计字符出现最多次的字符
// let str = "abcabcabcbbccccc"
// let num = 0
// let char = ""

// // 使其按照一定的次序排列
// str = str
//   .split("")
//   .sort()
//   .join("")
// // "aaabbbbbcccccccc"

// // 定义正则表达式
// let re = /(\w)\1+/g
// str.replace(re, ($0, $1) => {
//   if (num < $0.length) {
//     num = $0.length
//     char = $1
//   }
// })
// console.log(`字符最多的是${char}，出现了${num}次`)

// 多行文本溢出
// @mixin ellipsis($rowCount: 1) {
//   @if $rowCount <=1 {
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }

//   @else {
//     min-width: 0;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: $rowCount;
//     /* autoprefixer: off */
//     -webkit-box-orient: vertical;
//   }
// }

// 千位符分割
// let str = '1475893475324234'
// console.log( str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
//   return s+','
// }) )
