<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [基础](#%E5%9F%BA%E7%A1%80)
  - [Js数据类型](#js%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
  - [判断对象是对象还是数组，判断是不是空对象](#%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%AF%B9%E8%B1%A1%E8%BF%98%E6%98%AF%E6%95%B0%E7%BB%84%E5%88%A4%E6%96%AD%E6%98%AF%E4%B8%8D%E6%98%AF%E7%A9%BA%E5%AF%B9%E8%B1%A1)
  - [数组相关，改变数组](#%E6%95%B0%E7%BB%84%E7%9B%B8%E5%85%B3%E6%94%B9%E5%8F%98%E6%95%B0%E7%BB%84)
  - [Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()区别](#objectprototypetostringcall--instanceof-%E4%BB%A5%E5%8F%8A-arrayisarray%E5%8C%BA%E5%88%AB)
  - [深拷贝](#%E6%B7%B1%E6%8B%B7%E8%B4%9D)
  - [判断类型，获取类型](#%E5%88%A4%E6%96%AD%E7%B1%BB%E5%9E%8B%E8%8E%B7%E5%8F%96%E7%B1%BB%E5%9E%8B)
  - [new相关实现new，new做了什么](#new%E7%9B%B8%E5%85%B3%E5%AE%9E%E7%8E%B0newnew%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88)
  - [分时，渲染大量节点优化](#%E5%88%86%E6%97%B6%E6%B8%B2%E6%9F%93%E5%A4%A7%E9%87%8F%E8%8A%82%E7%82%B9%E4%BC%98%E5%8C%96)
  - [防抖](#%E9%98%B2%E6%8A%96)
  - [节流](#%E8%8A%82%E6%B5%81)
  - [react实现防抖输入框](#react%E5%AE%9E%E7%8E%B0%E9%98%B2%E6%8A%96%E8%BE%93%E5%85%A5%E6%A1%86)
  - [正则相关](#%E6%AD%A3%E5%88%99%E7%9B%B8%E5%85%B3)
  - [this指向问题，点调用问题](#this%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98%E7%82%B9%E8%B0%83%E7%94%A8%E9%97%AE%E9%A2%98)
  - [经典foo问题](#%E7%BB%8F%E5%85%B8foo%E9%97%AE%E9%A2%98)
  - [手动实现bind](#%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0bind)
  - [手写实现call](#%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0call)
  - [手写实现apply](#%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0apply)
  - [继承相关，原型链相关](#%E7%BB%A7%E6%89%BF%E7%9B%B8%E5%85%B3%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%9B%B8%E5%85%B3)
  - [JavaScript的作⽤域链理解吗？✨](#javascript%E7%9A%84%E4%BD%9C%E2%BD%A4%E5%9F%9F%E9%93%BE%E7%90%86%E8%A7%A3%E5%90%97)
  - [继承的几种方式](#%E7%BB%A7%E6%89%BF%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F)
  - [ES5的继承和ES6的继承有什么区别](#es5%E7%9A%84%E7%BB%A7%E6%89%BF%E5%92%8Ces6%E7%9A%84%E7%BB%A7%E6%89%BF%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [实现promise,promise相关](#%E5%AE%9E%E7%8E%B0promisepromise%E7%9B%B8%E5%85%B3)
  - [手动实现promise.race,promise.all](#%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0promiseracepromiseall)
  - [实现promise.catch,promise.finally](#%E5%AE%9E%E7%8E%B0promisecatchpromisefinally)
  - [手动实现async/await](#%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0asyncawait)
  - [豪华版实现promise](#%E8%B1%AA%E5%8D%8E%E7%89%88%E5%AE%9E%E7%8E%B0promise)
  - [yield相关](#yield%E7%9B%B8%E5%85%B3)
  - [手动实现generator](#%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0generator)
  - [微任务，宏任务，先微再宏，只不过一开始的script块也可以算是宏任务](#%E5%BE%AE%E4%BB%BB%E5%8A%A1%E5%AE%8F%E4%BB%BB%E5%8A%A1%E5%85%88%E5%BE%AE%E5%86%8D%E5%AE%8F%E5%8F%AA%E4%B8%8D%E8%BF%87%E4%B8%80%E5%BC%80%E5%A7%8B%E7%9A%84script%E5%9D%97%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%AE%97%E6%98%AF%E5%AE%8F%E4%BB%BB%E5%8A%A1)
  - [node的事件循环机制，浏览器的循环机制和区别](#node%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6%E5%92%8C%E5%8C%BA%E5%88%AB)
  - [实现flatten，打平数组](#%E5%AE%9E%E7%8E%B0flatten%E6%89%93%E5%B9%B3%E6%95%B0%E7%BB%84)
  - [数组去重，扩展将数组打平并且去重升序](#%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E6%89%A9%E5%B1%95%E5%B0%86%E6%95%B0%E7%BB%84%E6%89%93%E5%B9%B3%E5%B9%B6%E4%B8%94%E5%8E%BB%E9%87%8D%E5%8D%87%E5%BA%8F)
- [设计模式](#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)
  - [1.单例模式（弹框用得多）](#1%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F%E5%BC%B9%E6%A1%86%E7%94%A8%E5%BE%97%E5%A4%9A)
  - [高阶函数实现AOP（面向切面编程，即各种中间件）,函数中间件](#%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0%E5%AE%9E%E7%8E%B0aop%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B%E5%8D%B3%E5%90%84%E7%A7%8D%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%87%BD%E6%95%B0%E4%B8%AD%E9%97%B4%E4%BB%B6)
  - [科利华,柯里化，部分求值，传入的参数先存起来，到最后才一次性求](#%E7%A7%91%E5%88%A9%E5%8D%8E%E6%9F%AF%E9%87%8C%E5%8C%96%E9%83%A8%E5%88%86%E6%B1%82%E5%80%BC%E4%BC%A0%E5%85%A5%E7%9A%84%E5%8F%82%E6%95%B0%E5%85%88%E5%AD%98%E8%B5%B7%E6%9D%A5%E5%88%B0%E6%9C%80%E5%90%8E%E6%89%8D%E4%B8%80%E6%AC%A1%E6%80%A7%E6%B1%82)
  - [策略模式](#%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F)
  - [代理模式，缓存代理](#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%BC%93%E5%AD%98%E4%BB%A3%E7%90%86)
- [算法](#%E7%AE%97%E6%B3%95)
  - [算法复杂度](#%E7%AE%97%E6%B3%95%E5%A4%8D%E6%9D%82%E5%BA%A6)
  - [归并排序](#%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F)
  - [快速排序（快排）](#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E5%BF%AB%E6%8E%92)
  - [原地快排](#%E5%8E%9F%E5%9C%B0%E5%BF%AB%E6%8E%92)
  - [选择排序](#%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)
  - [插入排序](#%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F)
  - [二分查找（递归）](#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E9%80%92%E5%BD%92)
  - [二分补齐](#%E4%BA%8C%E5%88%86%E8%A1%A5%E9%BD%90)
  - [遍历树](#%E9%81%8D%E5%8E%86%E6%A0%91)
  - [1.字符串隐藏，找出最少需要的硬币数，转换成可读性好的文本](#1%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%9A%90%E8%97%8F%E6%89%BE%E5%87%BA%E6%9C%80%E5%B0%91%E9%9C%80%E8%A6%81%E7%9A%84%E7%A1%AC%E5%B8%81%E6%95%B0%E8%BD%AC%E6%8D%A2%E6%88%90%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%A5%BD%E7%9A%84%E6%96%87%E6%9C%AC)
  - [正则解码](#%E6%AD%A3%E5%88%99%E8%A7%A3%E7%A0%81)
  - [找数组中最接近指定值得值，找最近](#%E6%89%BE%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9C%80%E6%8E%A5%E8%BF%91%E6%8C%87%E5%AE%9A%E5%80%BC%E5%BE%97%E5%80%BC%E6%89%BE%E6%9C%80%E8%BF%91)
  - [千位符分割](#%E5%8D%83%E4%BD%8D%E7%AC%A6%E5%88%86%E5%89%B2)
  - [Eatman连续调用闭包](#eatman%E8%BF%9E%E7%BB%AD%E8%B0%83%E7%94%A8%E9%97%AD%E5%8C%85)
  - [对象数组去重](#%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D)
  - [转换成树,树结构](#%E8%BD%AC%E6%8D%A2%E6%88%90%E6%A0%91%E6%A0%91%E7%BB%93%E6%9E%84)
  - [取中间数](#%E5%8F%96%E4%B8%AD%E9%97%B4%E6%95%B0)
  - [手动实现filter](#%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0filter)
  - [数组乱序](#%E6%95%B0%E7%BB%84%E4%B9%B1%E5%BA%8F)
  - [遍历树结构](#%E9%81%8D%E5%8E%86%E6%A0%91%E7%BB%93%E6%9E%84)
  - [驼峰命名](#%E9%A9%BC%E5%B3%B0%E5%91%BD%E5%90%8D)
  - [解析urlquery为对象](#%E8%A7%A3%E6%9E%90urlquery%E4%B8%BA%E5%AF%B9%E8%B1%A1)
  - [实现eventListener,实现emitter](#%E5%AE%9E%E7%8E%B0eventlistener%E5%AE%9E%E7%8E%B0emitter)
  - [统计字符出现最多次的字符](#%E7%BB%9F%E8%AE%A1%E5%AD%97%E7%AC%A6%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E6%AC%A1%E7%9A%84%E5%AD%97%E7%AC%A6)
  - [多行文本溢出](#%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA)
  - [Domdiff算法](#domdiff%E7%AE%97%E6%B3%95)
- [网络安全，http相关](#%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8http%E7%9B%B8%E5%85%B3)
  - [请求方法](#%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95)
  - [GET和POST有什么区别？](#get%E5%92%8Cpost%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [前端加密的常见场景和方法](#%E5%89%8D%E7%AB%AF%E5%8A%A0%E5%AF%86%E7%9A%84%E5%B8%B8%E8%A7%81%E5%9C%BA%E6%99%AF%E5%92%8C%E6%96%B9%E6%B3%95)
  - [https用哪些端口进行通信，这些端口分别有什么用](#https%E7%94%A8%E5%93%AA%E4%BA%9B%E7%AB%AF%E5%8F%A3%E8%BF%9B%E8%A1%8C%E9%80%9A%E4%BF%A1%E8%BF%99%E4%BA%9B%E7%AB%AF%E5%8F%A3%E5%88%86%E5%88%AB%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8)
- [杂项](#%E6%9D%82%E9%A1%B9)
  - [从输入URL到页面加载全过程，敲下url发生了什么](#%E4%BB%8E%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%85%A8%E8%BF%87%E7%A8%8B%E6%95%B2%E4%B8%8Burl%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88)
  - [flex相关](#flex%E7%9B%B8%E5%85%B3)
  - [V8的垃圾回收机制](#v8%E7%9A%84%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6)
  - [实现一个sleep函数](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AAsleep%E5%87%BD%E6%95%B0)
  - [类型转换,undefined==null](#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2undefinednull)
  - [隐式转换，隐式转换会调用本类型toString或valueOf方法.](#%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A2%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A2%E4%BC%9A%E8%B0%83%E7%94%A8%E6%9C%AC%E7%B1%BB%E5%9E%8Btostring%E6%88%96valueof%E6%96%B9%E6%B3%95)
  - [对象借用数组的方法](#%E5%AF%B9%E8%B1%A1%E5%80%9F%E7%94%A8%E6%95%B0%E7%BB%84%E7%9A%84%E6%96%B9%E6%B3%95)
  - [实现(5).add(3).minus(2) 功能](#%E5%AE%9E%E7%8E%B05add3minus2-%E5%8A%9F%E8%83%BD)
  - [proxy实现数据绑定,Object.defindProperty与proxy](#proxy%E5%AE%9E%E7%8E%B0%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9Aobjectdefindproperty%E4%B8%8Eproxy)
  - [对象键名转换](#%E5%AF%B9%E8%B1%A1%E9%94%AE%E5%90%8D%E8%BD%AC%E6%8D%A2)
  - [函数传参，函数参数，形参，对象传参问题](#%E5%87%BD%E6%95%B0%E4%BC%A0%E5%8F%82%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E5%BD%A2%E5%8F%82%E5%AF%B9%E8%B1%A1%E4%BC%A0%E5%8F%82%E9%97%AE%E9%A2%98)
  - [input框中文输入问题](#input%E6%A1%86%E4%B8%AD%E6%96%87%E8%BE%93%E5%85%A5%E9%97%AE%E9%A2%98)
  - [递归实现翻转,颠倒数组，实现reverse](#%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0%E7%BF%BB%E8%BD%AC%E9%A2%A0%E5%80%92%E6%95%B0%E7%BB%84%E5%AE%9E%E7%8E%B0reverse)
  - [连续赋值，点赋值](#%E8%BF%9E%E7%BB%AD%E8%B5%8B%E5%80%BC%E7%82%B9%E8%B5%8B%E5%80%BC)
  - [pwa原理](#pwa%E5%8E%9F%E7%90%86)
  - [实现请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数](#%E5%AE%9E%E7%8E%B0%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0%E5%8F%AF%E4%BB%A5%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E8%AF%B7%E6%B1%82%E6%AC%A1%E6%95%B0%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%88%99%E4%B8%8D%E5%86%8D%E8%AF%B7%E6%B1%82%E8%AF%B7%E6%B1%82%E5%A4%B1%E8%B4%A5%E5%88%99%E7%BB%A7%E7%BB%AD%E8%AF%B7%E6%B1%82%E7%9B%B4%E5%88%B0%E8%B6%85%E8%BF%87%E6%9C%80%E5%A4%A7%E6%AC%A1%E6%95%B0)
  - [map(parseInt)问题](#mapparseint%E9%97%AE%E9%A2%98)
  - [位运算，与运算](#%E4%BD%8D%E8%BF%90%E7%AE%97%E4%B8%8E%E8%BF%90%E7%AE%97)
  - [安卓手机图片默认点击放大的问题](#%E5%AE%89%E5%8D%93%E6%89%8B%E6%9C%BA%E5%9B%BE%E7%89%87%E9%BB%98%E8%AE%A4%E7%82%B9%E5%87%BB%E6%94%BE%E5%A4%A7%E7%9A%84%E9%97%AE%E9%A2%98)
  - [解决ios手机fixed问题键盘](#%E8%A7%A3%E5%86%B3ios%E6%89%8B%E6%9C%BAfixed%E9%97%AE%E9%A2%98%E9%94%AE%E7%9B%98)
  - [前端图片转base64，转格式，转blob，上传的总结](#%E5%89%8D%E7%AB%AF%E5%9B%BE%E7%89%87%E8%BD%ACbase64%E8%BD%AC%E6%A0%BC%E5%BC%8F%E8%BD%ACblob%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%80%BB%E7%BB%93)
  - [URL截取URL相关](#url%E6%88%AA%E5%8F%96url%E7%9B%B8%E5%85%B3)
  - [存储cookie存储对象](#%E5%AD%98%E5%82%A8cookie%E5%AD%98%E5%82%A8%E5%AF%B9%E8%B1%A1)
  - [rem适配，class匹配](#rem%E9%80%82%E9%85%8Dclass%E5%8C%B9%E9%85%8D)
  - [git相关](#git%E7%9B%B8%E5%85%B3)
  - [gitfork](#gitfork)
  - [snippet代码片段网站](#snippet%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5%E7%BD%91%E7%AB%99)
  - [Object.assign相关，深拷贝浅拷贝](#objectassign%E7%9B%B8%E5%85%B3%E6%B7%B1%E6%8B%B7%E8%B4%9D%E6%B5%85%E6%8B%B7%E8%B4%9D)
  - [redux和vuex的区别和设计思想](#redux%E5%92%8Cvuex%E7%9A%84%E5%8C%BA%E5%88%AB%E5%92%8C%E8%AE%BE%E8%AE%A1%E6%80%9D%E6%83%B3)
  - [为什么Vuex的mutation和Redux的reducer中不能做异步操作](#%E4%B8%BA%E4%BB%80%E4%B9%88vuex%E7%9A%84mutation%E5%92%8Credux%E7%9A%84reducer%E4%B8%AD%E4%B8%8D%E8%83%BD%E5%81%9A%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C)
  - [JSONP](#jsonp)
  - [模块化发展amd,cmd,commonjs,esmodule](#%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95amdcmdcommonjsesmodule)
  - [缓存相关，浏览器缓存，缓存机制](#%E7%BC%93%E5%AD%98%E7%9B%B8%E5%85%B3%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6)
  - [BFC相关，IFC，GFC,FFC](#bfc%E7%9B%B8%E5%85%B3ifcgfcffc)
  - [为什么用图片埋点打点](#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8%E5%9B%BE%E7%89%87%E5%9F%8B%E7%82%B9%E6%89%93%E7%82%B9)
  - [JavaScript的基本类型和复杂类型是储存在哪⾥的？](#javascript%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E6%98%AF%E5%82%A8%E5%AD%98%E5%9C%A8%E5%93%AA%E2%BE%A5%E7%9A%84)
  - [js按引用传参，js传参](#js%E6%8C%89%E5%BC%95%E7%94%A8%E4%BC%A0%E5%8F%82js%E4%BC%A0%E5%8F%82)
  - [call和apply,bind的区别是什么，哪个性能更好一些](#call%E5%92%8Capplybind%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%E5%93%AA%E4%B8%AA%E6%80%A7%E8%83%BD%E6%9B%B4%E5%A5%BD%E4%B8%80%E4%BA%9B)
  - [让div水平垂直居中](#%E8%AE%A9div%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
  - [前端如何进行seo优化](#%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8Cseo%E4%BC%98%E5%8C%96)
  - [css实现瀑布流](#css%E5%AE%9E%E7%8E%B0%E7%80%91%E5%B8%83%E6%B5%81)
  - [标准盒子模型和怪异盒模型](#%E6%A0%87%E5%87%86%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E5%92%8C%E6%80%AA%E5%BC%82%E7%9B%92%E6%A8%A1%E5%9E%8B)
  - [设置元素不可见](#%E8%AE%BE%E7%BD%AE%E5%85%83%E7%B4%A0%E4%B8%8D%E5%8F%AF%E8%A7%81)
  - [Defer和async的区别](#defer%E5%92%8Casync%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [css实现按比例显示](#css%E5%AE%9E%E7%8E%B0%E6%8C%89%E6%AF%94%E4%BE%8B%E6%98%BE%E7%A4%BA)
  - [hybrid](#hybrid)
  - [1px问题](#1px%E9%97%AE%E9%A2%98)
- [React相关](#react%E7%9B%B8%E5%85%B3)
  - [setState原理](#setstate%E5%8E%9F%E7%90%86)
  - [合成事件](#%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6)
  - [react浅比较，pureComponent的原理](#react%E6%B5%85%E6%AF%94%E8%BE%83purecomponent%E7%9A%84%E5%8E%9F%E7%90%86)
- [webpack相关](#webpack%E7%9B%B8%E5%85%B3)
  - [自定义插件，自定义plugin](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E4%BB%B6%E8%87%AA%E5%AE%9A%E4%B9%89plugin)
  - [webpack如何工作，工作流程](#webpack%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B)
  - [Webpack热更新](#webpack%E7%83%AD%E6%9B%B4%E6%96%B0)
- [Node相关](#node%E7%9B%B8%E5%85%B3)
  - [使用过的koa中间件](#%E4%BD%BF%E7%94%A8%E8%BF%87%E7%9A%84koa%E4%B8%AD%E9%97%B4%E4%BB%B6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 基础

## Js数据类型

基本数据类型：Boolean, String, Number, Null, Undefine, Symbol
引用数据类型：Object, Array, Function
typof 可以检测出基本数据类型（除了 null，typeof null 结果是 object，这个是 bug），会返回 string, boolean, number, object , function,undefined，

## 判断对象是对象还是数组，判断是不是空对象

if (typeof obj === 'object' && Array.isArray(obj)) else
、直接判断是对象还是数组
{}.toString.call( obj ) === "[object Object]"
{}.toString.call( obj ) === "[object Array]"

判断是不是空对象 `JSON.stringify(data) == "{}"`

## 数组相关，改变数组

改变数组：splice,push,pop,unshift,shift,sort,reverse,fill,copyWithin
不改变数组：slice,map,forEach,filter,some,reduce,find,concat,every,some,entries

```
arr.map 和arr.forEach的区别在于map方法会返回一个数组，而forEach只是单纯地进行操作

arr.map(item=>{对每一项数组执行方法并最终返回一个新数组})

arr.filter（x => { x>50 }）对每一项数据进行过滤

reduce
arr.reduce( (pre,next,index) => {
。。。。
return val（这个值将会作为pre的新的值）
} , 初始值)

slice截取
arr.slice( index,几项) 取出【index，几项）取出数组左闭右开的集合项，

splice，变化原数组
arr.splice( index, 选中的索引项以及后面几项要被覆盖，‘覆盖为新的什么值’)
删除: arr.splice(i,1)

Some,find,every
Some = find,只不过some返回true、false，find返回数据项，every对每一个进行检测，返回布尔值


Shift弹出返回第一个，unshift插入第一个
pop，push

concat，返回新数组
join 返回字符串
arr.flatMap（i） 打平几层
```

## Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()区别

Object.prototype.toString 适用于任何变量，instanceof，isArray 只能判断对象类型，原始类型不可，isArray 性能会稍微高点

## 深拷贝

```
  deepCopy(obj) {
    判断是否是简单数据类型，
    if (typeof obj == 'object') {
      复杂数据类型
      var result = obj.constructor == Array ? [] : {}
      for (let i in obj) {
        result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i]
      }
    } else {
      简单数据类型 直接 == 赋值
      var result = obj
    }
    return result
  }
```

## 判断类型，获取类型

```
getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
},
```

## new相关实现new，new做了什么

1.肯定要返回一个新对象的啦，所以第一步先创建个新的空对象， 2.这个对象也要继承基类所有父方法的啦，所以把的原型指向基类的原型对象 obj.**proto** = Base.prototype 3.这个对象创建完后，需要初始化，初始化就是借用爸爸来初始化啦，就是 Base.call(obj)了
自然而然 obj.prototype 原型就是初始化后的原型，直接返回 obj 就可以了
基本三步

```
_new(fn, ...args) {
  const obj = Object.create(fn.prototype)
  const ret = fn.apply(obj, args)
  return ret instanceof Object ? ret : obj
},
```

## 分时，渲染大量节点优化

分时函数,把 1 秒渲染 1000 个分成每 200 毫秒渲染 8 个

```
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
大量节点渲染优化，分时渲染，验证后发现直接用innerHTML性能比createDocumentFragment文档碎片好
var ary = []
for (var i = 1; i <= 1000; i++) {
  ary.push(i)
}
var renderFriendList = timeChunk(
  ary,
  function (n) {
    var div = document.createElement("div")
    div.innerHTML = n
    document.body.appendChild(div)
  },
  8
)
renderFriendList()

```

## 防抖

```
debounce(func, wait = 200) {
 缓存一个定时器id
 let timer = 0
 这里返回的函数是每次用户实际调用的防抖函数 如果已经设定过定时器了就清空上一次的定时器 开始一个新的定时器，延迟执行用户传入的方法
 return function () {
   let _this = this
   if (timer) clearTimeout(timer)
   timer = setTimeout(() => {
     func.apply(_this, arguments)
   }, wait)
 }
},

```

## 节流

```
throttle(fn, interval = 200) {
 let timer, 定时器
   firstTime = true 是否是第一次调用
 return function () {
   let _this = this
   if (firstTime) {
     如果是第一次调用，不需延迟执行
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
```

## react实现防抖输入框

```
function debounce(fn, wait, immediate) {
  let timer = null
  return function(...args) {
    let context = this
    if (immediate && !timer) {
      fn.apply(context, args)
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.callAjax = debounce(this.callAjax, 500, true)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    this.callAjax()
  }

  callAjax() {
    此处根据输入值调用服务端接口
    console.log(this.state.value)
  }

  render() {
    return <input type='text' value={this.state.value} onChange={this.handleChange} />
  }
}

```

## 正则相关

reg: test,exec,exec(eval(动态模板正则))
str: match

常用

1. str.replace(reg, (最终匹配的结果，结果里面的$1, $2 分组之类) => { return $1 + ' ' + $2})
2. str.match(reg) 返回一个结果数组['aaa','bbb','cc']，接下来就是数组的操作了
3. 匹配连续相同的字符，(\w)\1,()和\1 配合使用可以筛选连续的重复字符，
   然后(\w) \1 + 代表贪婪尽可能多匹配，不加代表非贪婪，只匹配两个，还可以(\w)\1{2,},匹配 2 次以上（不含 2 次）

```
let reg = /(\/\.*[\w]+)|(\/\.\.+)/g
let str = "/a/./b/../../c/"
console.log("TCL: test", reg.test(str)) true
console.log("TCL:match ", str.match(reg)) ["/a", "/b", "/..", "/..", "/c"]
let arr = []
while ((arr = reg.exec(str))) {
  reg.exec(str)  ["/a", "/a", undefined, index: 2, input: "/a/./b/../../c/", groups: undefined]
  console.log("TCL: arr", arr[0]) '/a'
}
正则表达式里面，括号是分组，括起来了的东西会成为$1,$2变量可直接用
let reg = /（(.*)）/g
let str = "2019-02 （2）"

string.replace(reg,'$1'),2019-02 2  $1必须直接作用于“”内，如果直接这里变成函数参数的话失效
string.replace(reg,函数（$1）) 不生效，下面写法把它解析出来才可以生效
string.replace(reg,（match, $1, $2）=> {  return ‘**’ + $1 + “***"} ) 2019-02 ***2***

经常会遇到动态拼接正则表达式的例子，正则配合模板语言的话要注意特殊符号要\\两个杠，然后用eval( )才能将它转正真的正则表达式
let reg=`/\\?${arg}=([^&]*)/gi`;
if(url.match(eval(reg))){
tmp=url.replace(eval(reg),"要替换的文本");

字符串中连续出现最多的字符和个数
let str = "abbkejsbccc78wqaaaa"

function test() {
  let reg = /(\w)\1+/g
  let match = str.match(reg)
  if (!match || match.length < 1) {
    console.log("TCL: 并没有找到连续相同的字符")
    return
  }
  let res = match.reduce((pre, next) => {
    if (next.length > pre.length) {
      return next
    } else {
      return pre
    }
  }, match[0])
  console.log("TCL: ", res[0])
  return res[0]
}
test()

```

## this指向问题，点调用问题

1. 普通函数
   a. 直接看有没有 new 或挥洒后端返者 call 绑定 this，没有的话下一步
   b. 直接看执行的时候前面是谁点调用的，默认就是 window
2. 箭头函数
   直接向上一层找，直接找到外面有一层是 "普通函数" (如果只是单纯的对象包着就算作平级的就要继续往上找)包着的，
   没有的话就代表是 window，this 指向就跟上一层的这个指向是一样的

```
var obj = {
  x: 22,
  aaa() {
    let fn = () => {
      console.log("aa", this)
    }
    fn()
  },
  bbb: () => {
    console.log("bb", this)
  },
  ccc: () => {
    let fn = () => {
      console.log("ccc", this)
    }
    fn()
  }
}
obj.aaa() this => obj
obj.bbb() this => window
obj.ccc() this => window

var student = {
  name: "若川",
  doSth: function() {
    console.log(this.name)
    return () => {
      console.log("arrowFn:", this.name)
    }
  }
}
var person = {
  name: "person"
}
student.doSth().call(person) '若川'  'arrowFn:' '若川'
student.doSth.call(person)() 'person' 'arrowFn:' 'person'

obj.methods.say()
obj.methods.say2()

const shape = {
  radius: 10,
  normal() {
    console.log("this1", this)
    return this.radius * 2
  },
  arrow: () => {
    console.log("TCL: ", this)
    return 2 * Math.PI * this.radius
  }
}
下列语句的返回值分别是什么？
正常函数下，判断this直接看函数执行前是谁点调用的，没有就是默认window

console.log((func => func())(shape.normal)) NaN
console.log((s => s.normal())(shape)) 20
console.log((s => s.arrow())(shape)) NaN this => window
console.log("TCL:箭头 ", shape.arrow()) NaN
const c = new shape.normal() shape.normal is not a constructor，应该吧normal改写成普通的normal：function(){}而不能用简写的normal()

```

## 经典foo问题

[https://www.cnblogs.com/laojun/p/8287399.html](https://www.cnblogs.com/laojun/p/8287399.html)

```
function Foo() {
  console.log("TCL: ", this)
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}

var getName = function() {
  console.log(4)
}

function getName() {
  console.log(5)
}

输出以下的输出结果

函数Foo的静态方法
console.log("TCL: Foo -> Foo", Foo)

Foo.getName() 2

function getName有提前声明的规则，声明后被var getName= 。。覆盖，则getName为4
getName() 4

Foo()的return this为window，window.getName 在Foo里面被覆盖，则输出1
Foo().getName() 1

同上，因调用了Foo();window的getName被覆盖
getName() 1
依然只是调用了Foo对象上的getName,又因为Foo.getNname，所以相当于
function a(){console.log(2)};
new a();
new Foo.getName() 2

先执行了new Foo()；返回一个对象，这个对象的getName为prototype上的getName,相当于(new Foo()).getName();
new Foo().getName() 3
new new Foo().getName() 3

<!-- 额外练习 -->
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
-- 4  2  1
```

## 手动实现bind

```
Function.prototype.bind = function(ctx) {
  var self = this
  return function() {
    return self.apply(ctx, arguments
  }
}

```

## 手写实现call

```
Function.prototype.call = function(context) {
  var context = context || window; 因为传进来的context有可能是null
  context.fn = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
      args.push("arguments[" + i + "]"); 不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错
  }
  args = args.join(",");

  var result = eval("context.fn(" + args + ")"); 相当于执行了context.fn(arguments[1], arguments[2]);

  delete context.fn;
  return result; 因为有可能this函数会有返回值return
}

```

## 手写实现apply

```
Function.prototype.apply2 = function(context, arr) {
  var context = context || window; 因为传进来的context有可能是null
  context.fn = this;
  var args = [];
  var params = arr || [];
  for (var i = 0; i < params.length; i++) {
      args.push("params[" + i + "]"); 不这么做的话 字符串的引号会被自动去掉 变成了变量 导致报错
  }
  args = args.join(",");

  var result = eval("context.fn(" + args + ")"); 相当于执行了context.fn(arguments[1], arguments[2]);

  delete context.fn;
  return result; 因为有可能this函数会有返回值return
}

```

## 继承相关，原型链相关

1. 最主要认识三点，每个构造函数都有 prototype（孩子）,孩子有老爸所有的方法遗产
2. 所有实例出来的对象都有一个\_proto（即 Father.prototype，里面有 constructor 标明它的构造函数是 Father）
   Father.prototype.constructor ==> Father 用来指明爸爸是谁
3. 寄生组合继承本质就是将目标类的 prototype 设置成父类.prototype,这个 prototype 的 constructor 要改为目标类
   然后子类在用 Father.call（this）来初始化

![原型链](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-proto.png)

```
综上
寄生组合继承
function inherit(son, father) {
  let obj = Object.create(father.prototype)
  obj.constructor = son
  son.prototype = obj
}
function Father(name) {
  this.name = name
  this.age = 44
}
定义原型链上的方法babaMethod
为什么要将方法定义在原型上，定义在原型上的方法，所有的实例对象都共享
不会出现没实列一个对象都重新创建一个这个方法
Father.prototype.babaMethod = function () {
  console.log(this.name)
}
let haha = new Father('爸爸')
function Son() {
  Father.call(this, '儿子')
  this.age = '20'
}
inherit(Son, Father)

let test = new Son()
test.babaMethod()

```

## JavaScript的作⽤域链理解吗？✨

JavaScript 属于静态作⽤域，即声明的作⽤域是根据程序正⽂在编译时就确定的，有时也称为词法作⽤域。
其本质是 JavaScript 在执⾏过程中会创造可执⾏上下⽂，可执⾏上下⽂中的词法环境中含有外部词法环境的引⽤，我们
可以通过这个引⽤获取外部词法环境的变量、声明等，这些引⽤串联起来⼀直指向全局的词法环境，因此形成了作⽤域
链。

## 继承的几种方式

- 原型链继承
  基本思想：利用原型让一个引用类型继承另一个引用类型的属性和方法，即让原型对象等于另一个类型的实例，Son.prototype = new Father()
  缺点：最主要的问题来自包含引用类型值的原型，它会被所有实例共享
  第二个问题是，创造子类型的实例时，不能向超类型的构造函数中传递参数

- 借用构造函数继承
  基本思想：在子类型构造函数的内部调用超类型构造函数，通过使用 apply()和 call()方法可以在将来新创建的对象上执行构造函数 `function Son() { Father.call(this) }`
  优点：可以传参
  缺点：方法都在构造函数中定义，函数无法复用；在超类型中定义的方法，子类型不可见，结果所有类型都只能使用构造函数模式

- 组合继承
  上面两种的结合，使用原型链实现对原型属性和方法的继承，用借用构造函数模式实现对实例属性的继承。

  ```
  function Subtype(name,age){
      \\继承属性
      Supertype.call(this,name);
      this.age  = age;
  }
  \\继承方法
  Subtype.prototype = new Supertype();
  Subtype.prototype.constructor = Subtype;
  ```

  优点：既通过在原型上定义方法实现了函数复用，又能保证每个实例都有自己的属性
  缺点：无论在什么情况下，都会调用两次超类型构造函数，一次是在创建子类型原型的时候，一次是在子类型构造函数的内部

- 原型式继承
  object.create(父类实例，可选参：复写的属性)
  优：可以直接根据已有的对象创建新对象
  缺：创造两个相似的对象，但是包含引用类型的值的属性始终会共享响应的值

- 寄生式继承
  思想：与原型式继承紧密相关的一种思路，它实质上把原型继承的过程封装起来，直接 Object.create(father)，然后直接给它新增一些属性增强对象，最后再返回对象。
  缺：使用寄生式继承来为对象添加函数，会因为做不到函数复用而降低效率，这个与构造函数模式类似

- 寄生组合式继承
  思想：本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型
  只调用了一次 supertype 构造函数，因此避免在 subtype.prototype 上创建不必要的，多余的属性，与此同时，原型链还能保持不变，还能正常使用 instanceof 和 isPrototypeOf()，因此，寄生组合式继承被认为是引用类型最理想的继承范式。

## ES5的继承和ES6的继承有什么区别

1. ES5 先创建子类，在实例化父类并添加到子类 this 中
   【关键：father.call(son, args)）即是实例化子类，然后实例化父类，将 son.protyotype 指向父类实例】
2. ES6 先创建父类，在实例化子集中通过调用 super 方法访问父级后，在通过修改 this 实现继承
   【在 class extend 后，子的 constructor 里面需要 super（）一下，这个过程其实是 super 先实例化父类，然后再用子类自己的构造器去修改这个对象，
   所以如果不 super，子类是获取不到 this 的，因为 this 的前提是要 super 出来这个父类实例，此外，因为是直接实例父类的，所以这也就决定了 class 的继承可以直接继承内置对象】

## 实现promise,promise相关

```
const PENDING = 1
const FULFILLED = 2
const REJECTED = 3
class KPromise {
  constructor(cb) {
    this.state = PENDING // 完成后的传值
    this.value = null
    // 失败后的原因
    this.reason = null
    this.fulfilledCbs = []
    this.rejectCbs = []
    // this.fn = fn
    let reslove = data => {
      setTimeout(() => {
        // 这个执行后，修改状态
        if (this.state == PENDING) {
          this.state = FULFILLED
          this.value = data
          this.fulfilledCbs.forEach(v => v(data))
        }
      })
    }
    let reject = reason => {
      setTimeout(() => {
        // 这个执行后，修改状态
        if (this.state == PENDING) {
          this.state = REJECTED
          this.reason = reason
          this.rejectCbs.forEach(v => v(reason))
        }
      })
    }
    cb(reslove, reject)
  }
  then(onFufilled, onRejected) {
    if (typeof onFufilled == "function") {
      // 成功回掉
      this.fulfilledCbs.push(onFufilled)
    }
    if (typeof onRejected == "function") {
      // 失败回掉
      this.rejectCbs.push(onRejected)
    }
  }
}
let promise = new KPromise((resolve, reject) => {
  if (2 < 4) {
    resolve("hi")
  } else {
    reject("出错了")
  }
}).then(
  data => {
    console.log(data)
  },
  reason => {
    throw new Error(reason)
  }
)

```

## 手动实现promise.race,promise.all

这些方法接受一个数组作为参数，p1、p2、p3 都是 Promise 实例，如果不是，
就会先调用下面讲到的 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。

```
Promise._race = arr =>
  new Promise((resolve, reject) => {
    arr.forEach(item => {
      item.then(resolve, reject)
    })
  })
Promise._all(list) {
  return new Promise((resolve, reject) => {
    let resValues = []
    let counts = 0
    for (let [i, p] of list) {
      resolve(p).then(
        res => {
          counts++
          resValues[i] = res
          if (counts === list.length) {
            resolve(resValues)
          }
        },
        err => {
          reject(err)
        }
      )
    }
  })
}

```

## 实现promise.catch,promise.finally

catch 方法其实就是执行一下 then 的第二个回调

```
catch(rejectFn) {
  return this.then(undefined, rejectFn)
}
finally方法
finally(callback) {
  return this.then(
    value => MyPromise.resolve(callback()).then(() => value),
    // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
    reason => MyPromise.resolve(callback()).then(() => { throw reason })
    // reject同理
  )
}
静态的resolve方法
static resolve(value) {
  if(value instanceof MyPromise) return value // 根据规范, 如果参数是Promise实例, 直接return这个实例
  return new MyPromise(resolve => resolve(value))
}
//静态的reject方法
static reject(reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}

```

## 手动实现async/await

```
function run(gen) {
  var g = gen() //由于每次gen()获取到的都是最新的迭代器,因此获取迭代器操作要放在_next()之前,否则会进入死循环

  function _next(val) {
    //封装一个方法, 递归执行g.next()
    var res = g.next(val) //获取迭代器对象，并返回resolve的值
    if (res.done) return res.value //递归终止条件
    res.value.then((val) => {
      //Promise的then方法是实现自动迭代的前提
      _next(val) //等待Promise完成就自动执行下一个next，并传入resolve的值
    })
  }
  _next() //第一次执行
}
function run(gen) {
  //把返回值包装成promise
  return new Promise((resolve, reject) => {
    var g = gen()

    function _next(val) {
      //错误处理
      try {
        var res = g.next(val)
      } catch (err) {
        return reject(err)
      }
      if (res.done) {
        return resolve(res.value)
      }
      //res.value包装为promise，以兼容yield后面跟基本类型的情况
      Promise.resolve(res.value).then(
        (val) => {
          _next(val)
        },
        (err) => {
          //抛出错误
          g.throw(err)
        }
      )
    }
    _next()
  })
}

```

## 豪华版实现promise

```
Promise/A+规定的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING Promise状态
    this._value = undefined 储存then回调return的值
    this._resolveQueue = [] 成功队列, resolve时触发
    this._rejectQueue = [] 失败队列, reject时触发

    由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      const run = () => {
        if (this._status !== PENDING) return 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED 变更状态
        this._value = val 储存当前value

        这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    实现同resolve
    let _reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) return 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED 变更状态
        this._value = val 储存当前value
        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject)
  }

  then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? (resolveFn = (value) => value) : null
    typeof rejectFn !== 'function'
      ? (rejectFn = (reason) => {
          throw new Error(reason instanceof Error ? reason.message : reason)
        })
      : null

    return一个新的promise
    return new MyPromise((resolve, reject) => {
      把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = (value) => {
        try {
          执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value)
          分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      reject同理
      const rejectedFn = (error) => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      switch (this._status) {
        当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break
        当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value) this._value是上一个then回调return的值(见完整版代码)
          break
        case REJECTED:
          rejectedFn(this._value)
          break
      }
    })
  }
}

```

## yield相关

func.next(),next 可以指定 yield 语句初始值，也就是直接相当于把整个 yield 后面的东西替换成这个值就是了
function\* say() {
let a = yield "1"
console.log(a)
let b = yield "2"
console.log(b)
}

let it = say() 返回迭代器

console.log(it.next())
输出 { value: '1', done: false }
a 的值并非该返回值，而是下次 next 参数

console.log(it.next({ value: "我是第一步的初始值" }))
输出 { value:'我是第一步的初始值' }
输出{ value: '2', done: false }

console.log(it.next({ value: "我是第二步的初始值" }))
输出 { value:'我是第二步的初始值' }
输出{ value: undefined, done: true }

## 手动实现generator

原理是 yield 会将代码大概转换成下面三个步骤，用 switch 来执行不同步骤的函数，核心点在于每次运行
后对上下文的保存，下次再使用时直接根据上下文执行下一步的函数，所以 yield 看起来想挂载了，其实并没有，只是保存了上下文
从而知道该执行哪一块的函数而已

1. 我们定义的 function\*生成器函数被转化为以上代码
2. 转化后的代码分为三大块：
   gen$(_context)由yield分割生成器函数代码而来
context对象用于储存函数执行上下文
invoke()方法定义next()，用于执行gen$(\_context)来跳到下一步

3. 当我们调用 g.next()，就相当于调用 invoke()方法，执行 gen\$(\_context)，进入 switch 语句，switch 根据 context 的标识，执行对应的 case 块，return 对应结果
   当生成器函数运行到末尾（没有下一个 yield 或已经 return），switch 匹配不到对应代码块，就会 return 空值，这时 g.next()返回{value: undefined, done: true}

生成器函数根据 yield 语句将代码分割为 switch-case 块，后续通过切换\_context.prev 和\_context.next 来分别执行各个 case

```
function gen$(_context) {
  while (1) {
    switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return 'result1';

      case 2:
        _context.next = 4;
        return 'result2';

      case 4:
        _context.next = 6;
        return 'result3';

      case 6:
      case "end":
        return _context.stop();
    }
  }
}

低配版context
var context = {
  next:0,
  prev: 0,
  done: false,
  stop: function stop () {
    this.done = true
  }
}

低配版invoke
let gen = function() {
  return {
    next: function() {
      value = context.done ? undefined: gen$(context)
      done = context.done
      return {
        value,
        done
      }
    }
  }
}

```

## 微任务，宏任务，先微再宏，只不过一开始的script块也可以算是宏任务

宏任务：script 中代码、setTimeout、setInterval、I/O、UI render。
微任务: promise.then、nexttick, Object.observe、MutationObserver。

很多人有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务。
所以正确的一次 Event loop 顺序是这样的

1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码

<!-- todo -->

## node的事件循环机制，浏览器的循环机制和区别

Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个 while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

1. 浏览器的很简单，直接先执行同步代码，然后再去执行异步栈里面的任务，先微再宏，【一个代码块里先微再宏，setTimeout 的回调也算是一个代码块】
2. node 的 eventLoop
   在 node 11 版本中，node 下 Event Loop 已经与浏览器趋于相同【和浏览器一样】
   较低版本有所不同【较低版本中】
   同步代码 — 任务 loop
3. Timers（执行到点的 setTimeout()、setInterval()的回调 ）
4. I/O 回调
5. poll 轮询阶段，会适当阻塞执行 I/O 事件以及事件回调，但如果等待超过了某个 timer 的极限等待时间，就会返回 timers 阶段去执行 timers 事件
6. Check 阶段，回调里面有 setImmediate 的话会优先执行
7. close 回调，关闭 socket 之类

porcess.nextTicked 会比其他任务更快

```
async function async1() {
  console.log("async1 start")
  await async2()
  console.log("async1 end")
}
async function async2() {
  console.log("async2")
}
console.log("script start")
setTimeout(function() {
  console.log("setTimeout")
}, 0)
async1()
new Promise(function(resolve) {
  console.log("promise1")
  resolve()
}).then(function() {
  console.log("promise2")
})
console.log("script end")

script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

2.
function sleep(time) {
  let startTime = new Date()
  while (new Date() - startTime < time) {}
  console.log("1s over")
}
setTimeout(() => {
  console.log("setTimeout - 1")
  setTimeout(() => {
    console.log("setTimeout - 1 - 1")
    sleep(1000)
  })
  new Promise((resolve) => resolve()).then(() => {
    console.log("setTimeout - 1 - then")
    new Promise((resolve) => resolve()).then(() => {
      console.log("setTimeout - 1 - then - then")
    })
  })
  sleep(1000)
})

setTimeout(() => {
  console.log("setTimeout - 2")
  setTimeout(() => {
    console.log("setTimeout - 2 - 1")
    sleep(1000)
  })
  new Promise((resolve) => resolve()).then(() => {
    console.log("setTimeout - 2 - then")
    new Promise((resolve) => resolve()).then(() => {
      console.log("setTimeout - 2 - then - then")
    })
  })
  sleep(1000)
})
setTimeout - 1
1s over
setTimeout - 1 - then
setTimeout - 1 - then - then
setTimeout - 2
1s over
setTimeout - 2 - then
setTimeout - 2 - then - then
setTimeout - 1 - 1
1s over
setTimeout - 2 - 1
1s over

```

## 实现flatten，打平数组

- 普通实现

```
function flatten(arr) {
  let arrs = [...arr]
  let newArr = []
  while (arrs.length) {
    let item = arrs.shift()
    if (Array.isArray(item)) {
      arrs.unshift(...item)
    } else {
      newArr.push(item)
    }
  }
  return newArr
}

```

- 递归实现

```
function flatten(arr) {
  let arrs = []
  arr.map(item => {
    if (Array.isArray(item)) {
      arrs.push(...flatten(item))
    } else {
      arrs.push(item)
    }
  })
  return arrs
}

```

## 数组去重，扩展将数组打平并且去重升序

Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
return a - b （降序是 b - a）
})

# 设计模式

## 1.单例模式（弹框用得多）

```
let getSingle = function(fn) {
  let instance
  return function() {
    return instance || (instance = fn.apply(this, arguments))
  }
}

```

## 高阶函数实现AOP（面向切面编程，即各种中间件）,函数中间件

```
Function.prototype.before = function(beforeFn) {
  let _this = this
  return function() {
    beforeFn.apply(this, arguments)
    return _this.apply(this, arguments)
  }
}
Function.prototype.after = function(afterFn) {
  let _this = this
  return function() {
    let ret = _this.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}

let func = function() {
  console.log("TCL: ", 2)
}
func = func
  .before(function() {
    console.log("TCL: ", 1)
  })
  .after(function() {
    console.log("TCL: ", 3)
  })

func()


```

## 科利华,柯里化，部分求值，传入的参数先存起来，到最后才一次性求

1. 柯里化函数，首先第一层的函数可以理解是一个闭包变量，可存储的，
2. 然后再 return 一个函数，这个函数的函数参数便是接下来一层的函数，只要做相应的处理即可，最后还要返回这个函数
3. 递归去按同样的逻辑解析剩下来所有参数，自己看一下下面的 a,b 打印就知道了

- 常见 add 柯里化

```
function add(a) {
  console.log("TCL: a", a)
  function sum(b) {
    console.log("TCL: b", b)
    使用闭包
    a = a + b 累加
    return sum
  }
  sum.toString = function() {
    重写toString()方法
    return a
  }
  return sum 返回一个函数
}

console.log("TCL: ", add(1)) 1
console.log("TCL: ", add(1)(2)) 3
console.log("TCL: ", add(1)(2)(3)) 6
console.log("TCL: ", add(1)(2)(3)(4)) 10

```

- 通用柯里化函数

```
function curry(fn) {
  return function curried() {
    var args = [].slice.call(arguments)
    arguments ==> [传入参数，length:长度]  例如：【1，2，3，length:0]
    之所以写上面那句是为了把长度去掉，变成纯传入参数的数组
    结果： 【1，2，3】

    return args.length >= fn.length
      ? fn.apply(null, args)
      : function() {
          var rest = [].slice.call(arguments)
          return curried.apply(null, args.concat(rest))
        }
  }
}

let curry = fn => {
  let curried = (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    } else {
      return (...rest) => {
        return curried.apply(null, args.concat(rest))
      }
    }
  }
  return curried
}

function foo(a, b, c, d) {
  return a + b + c + d
}
let testCurry = curry(foo)
console.log("TCL: ", testCurry(1, 2, 3, 6))
console.log("TCL: ", testCurry(1)(2)(3, 6))
console.log("TCL: ", testCurry(1)(2)(3)(6))

```

## 策略模式

## 代理模式，缓存代理

a.保护代理，不直接访问
b.虚拟代理，在真正需要的时候再加载然后代理
缓存代理，构建一个代理函数，每次都保存计算的结果

```
let mult = (...args) => {
  let a = 1
  for (let i = 0; i < args.length; i++) {
    a = a * args[i]
  }
  return a
}
let createProxyFactory = fn => {
  let cache = {}
  return (...args) => {
    let nums = args.join(",")
    if (cache[nums]) {
      console.log("from cache ", cache[nums])
      return cache[nums]
    } else {
      cache[nums] = fn.apply(this, args)
      return cache[nums]
    }
  }
}

let proxyMult = createProxyFactory(mult)

console.log("TCL: ", proxyMult(1, 2, 3, 4))
console.log("TCL: ", proxyMult(1, 2, 3, 4))
```

# 算法

## 算法复杂度

![算法复杂度](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-suanfa.png)

## 归并排序

```
function mergeSort(arr) {
  采用自上而下的递归方法
  var len = arr.length
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []
  console.time("归并排序耗时")
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())

  while (right.length) result.push(right.shift())
  console.timeEnd("归并排序耗时")
  return result
}

```

## 快速排序（快排）

```
function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat([pivot], quick_sort(right))
}

```

## 原地快排

```
var quickSort = function(arr, left, right) {
  <!-- 如果左边界比右边界大，返回结果，排序结束 -->
  if (left > right) {
    return
  }

  <!-- 默认值处理，如果有传入left和right参数，就赋值这个参数，否则就赋值后面的默认值 -->
  left = left || 0
  right = right || arr.length - 1

  <!-- 定义移动的左游标和右游标 -->
  var leftPoint = left
  var rightPoint = right

  <!-- 定义一个基准数 -->
  var temp = arr[left]

  <!-- 判断左右游标是否重合，如果重合，循环结束 -->
  while (leftPoint != rightPoint) {
    <!-- 基准数在左边，因此从右边开始一个个扫描
    从右到左，寻找小于基准数的数，且左游标要小于右游标
    如果数字大于基准数（证明不符合条件），寻找下一个
    直到找到比基准数小的数，游标停止递减 -->
    while (arr[rightPoint] >= temp && leftPoint < rightPoint) {
      rightPoint--
    }
    <!-- 从左到右，寻找大于基准数的数，且左游标要小于右游标
    如果数字小于基准数（证明不符合条件），寻找下一个
    直到找到比基准数小的数，游标停止递增 -->
    while (arr[leftPoint] <= temp && leftPoint < rightPoint) {
      leftPoint++
    }

    <!-- 如果左游标小于右游标，则交换两个数字的位置 -->
    if (leftPoint < rightPoint) {
      var changeNumber = arr[leftPoint]
      arr[leftPoint] = arr[rightPoint]
      arr[rightPoint] = changeNumber
    }
    <!-- 进行下一次循环，直到两个游标重合位置 -->
  }

  <!-- 重合之后，交换基准数 -->
  arr[left] = arr[leftPoint]
  arr[leftPoint] = temp

  <!-- 递归操作左右两个数组 -->
  quickSort(arr, left, leftPoint - 1)
  quickSort(arr, leftPoint + 1, right)

  return arr
}


```

## 选择排序

```
function selectionSort(arr) {
  var len = arr.length
  var minIndex, temp
  console.time("选择排序耗时")
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        寻找最小的数
        minIndex = j 将最小数的索引保存
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.timeEnd("选择排序耗时")
  return arr
}
```

## 插入排序

```
function binaryInsertionSort(array) {
  if (Array.isArray(array)) {
    console.time("二分插入排序耗时：")

    for (var i = 1; i < array.length; i++) {
      var key = array[i],
        left = 0,
        right = i - 1
      while (left <= right) {
        var middle = parseInt((left + right) / 2)
        if (key < array[middle]) {
          right = middle - 1
        } else {
          left = middle + 1
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j]
      }
      array[left] = key
    }
    console.timeEnd("二分插入排序耗时：")

    return array
  } else {
    return "array is not an Array!"
  }
}

```

## 二分查找（递归）

```
function binary_search(arr, low, high, key) {
  if (low > high) {
    return -1
  }
  var mid = parseInt((high + low) / 2)
  if (arr[mid] == key) {
    return mid
  } else if (arr[mid] > key) {
    high = mid - 1
    return binary_search(arr, low, high, key)
  } else if (arr[mid] < key) {
    low = mid + 1
    return binary_search(arr, low, high, key)
  }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86]
var result = binary_search(arr, 0, 13, 10)
alert(result) 9 返回目标元素的索引值

```

## 二分补齐

```
function leftPad(str, length, ch) {
  let len = (length = str.length)
  let total = ""
  while (len) {
    if (len % 2 == 1) total += ch
    if (len == 1) return total + str
    ch += ch // 0 00 0000
  }
}

```

## 遍历树

- 深度优先遍历三种方式

```
let deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    let children = node.children
    for (let i = 0; i < children.length; i++) {
      deepTraversal1(children[i], nodeList)
    }
  }
  return nodeList
}

```

- 广度优先

```
let widthTraversal2 = node => {
  let nodes = []
  let stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let item = stack.shift()
      let children = item.children
      nodes.push(item)
      队列，先进先出
      nodes = [] stack = [parent]
      nodes = [parent] stack = [child1,child2,child3]
      nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
      nodes = [parent,child1,child2]
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }
  return nodes
}
```

## 1.字符串隐藏，找出最少需要的硬币数，转换成可读性好的文本

https:juejin.im/post/5e92eb5b6fb9a03c8966dc88

```
coinChange([1, 2, 5], 11); 3
coinChange([2, 4], -1) -1
coinChange([1, 2, 4, 5, 10], 100) 10
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
}
```

## 正则解码

```
decode() {
  let sindex = (eindex = -1)
  let count = -1
  let substr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '[') {
      sindex = i
      if (!isNaN(parseInt(str[i - 1]))) {
        let reg = /(\d)+$/g
        reg.test(str.slice(0,i))
        count = RegExp.$1
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
```

## 找数组中最接近指定值得值，找最近

找最接近目标的值，找最近
直接将目标插入数组，排序，然后 indexOf()找到目标值，然后比较左右两个谁最近就好了

```

findNearest(arr, target) {
  这一步是深拷贝，目的是为了不影响原数组
  let arr = JSON.parse(JSON.stringify(tmp))
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
```

## 千位符分割

```
let str = '1475893475324234'
console.log( str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
  return s+','
}) )

```

## Eatman连续调用闭包

```
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
        console.log(`Eat ${item}~`)
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

```

## 对象数组去重

const responseList = [
{ id: 1, a: 1 },
{ id: 2, a: 2 },
{ id: 3, a: 3 },
{ id: 1, a: 4 },
];
const result = responseList.reduce((acc, cur) => {
const ids = acc.map(item => item.id);
return ids.includes(cur.id) ? acc : [...acc, cur];
}, []);
console.log(result); -> [ { id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3} ]

## 转换成树,树结构

以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
原始 list 如下

```
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);
function convert(list) {
  const res = []
  const map = list.reduce((res, v) => ((res[v.id] = v), res), {})
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item)
      continue
    }
    if (item.parentId in map) {
      const parent = map[item.parentId]
      parent.children = parent.children || []
      parent.children.push(item)
    }
  }
  return res
}
```

## 取中间数

这个在 leetCode 上有， 不考虑时间负责度的情况下 把两个数组合并 -> 排序 -> 单数取中间，双数取中间两个平均值

O(log(m+n))解法
/\*\*

- @param {number[]} nums1
- @param {number[]} nums2
- @return {number}
  \*/

```
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let k1 = Math.floor((m + n + 1) / 2)
  let k2 = Math.floor((m + n + 2) / 2)

  return (
    (findMedianSortedArraysCore(nums1, 0, nums2, 0, k1) +
      findMedianSortedArraysCore(nums1, 0, nums2, 0, k2)) /
    2
  )
}

const findMedianSortedArraysCore = (nums1, i, nums2, j, k) => {
  如果数组起始位置已经大于数组长度-1
  说明已经是个空数组
  直接从另外一个数组里取第k个数即可
  if (i > nums1.length - 1) {
    return nums2[j + k - 1]
  }
  if (j > nums2.length - 1) {
    return nums1[i + k - 1]
  }
  如果k为1
  就是取两个数组的起始值里的最小值
  if (k === 1) {
    return Math.min(nums1[i], nums2[j])
  }
  取k2为(k/2)或者数组1的长度或者数组2的长度的最小值
  这一步可以避免k2大于某个数组的长度（长度为从起始坐标到结尾）
  let k2 = Math.floor(k / 2)
  let length1 = nums1.length - i
  let length2 = nums2.length - j
  k2 = Math.min(k2, length1, length2)

  let value1 = nums1[i + k2 - 1]
  let value2 = nums2[j + k2 - 1]

  比较两个数组的起始坐标的值
  如果value1小于value2
  就舍弃nums1前i + k2部分
  否则舍弃nums2前j + k2部分
  if (value1 < value2) {
    return findMedianSortedArraysCore(nums1, i + k2, nums2, j, k - k2)
  } else {
    return findMedianSortedArraysCore(nums1, i, nums2, j + k2, k - k2)
  }
}

```

## 手动实现filter

```
Array.prototype.filter = function(fn, context) {
  if (typeof fn != "function") {
    throw new TypeError(`${fn} is not a function`)
  }
  let arr = this
  let reuslt = []
  for (var i = 0; i < arr.length; i++) {
    let temp = fn.call(context, arr[i], i, arr)
    if (temp) {
      result.push(arr[i])
    }
  }
  return result
}

```

## 数组乱序

取巧的一种算法，但是每个位置乱序的概率不同

```
function mixArr(arr) {
  return arr.sort(() => {
    return Math.random() - 0.5
  })
}

```

## 遍历树结构

样例数据

```
let data = {
  name: "jack",
  child: [
    { name: "jack1" },
    {
      name: "jack2",
      child: [
        {
          name: "jack2-1",
          child: { name: "jack2-1-1" }
        },
        {
          name: "jack2-2"
        }
      ]
    },
    {
      name: "jack3",
      child: { name: "jack3-1" }
    }
  ]
}

function findMultiChildPerson(data) {
  let nameList = []

  function tmp(data) {
    if (data.hasOwnProperty("child")) {
      if (Array.isArray(data.child)) {
        nameList.push(data.name)
        data.child.forEach(child => tmp(child))
      } else {
        tmp(data.child)
      }
    }
  }
  tmp(data)
  return nameList
}

```

## 驼峰命名

var s1 = "get-element-by-id"

// 转化为 getElementById

```
var f = function(s) {
  return s.replace(/-\w/g, function(x) {
    return x.slice(1).toUpperCase()
  })
}

```

## 解析urlquery为对象

```
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1] // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split("&") // 将字符串以 & 分割后存到数组中
  let paramsObj = {}
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      let [key, val] = param.split("=") // 分割 key 和 value
      val = decodeURIComponent(val) // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val)
      } else {
        // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val
      }
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = true
    }
  })

  return paramsObj
}

```

## 实现eventListener,实现emitter

触发名为 type 的事件

```
class EventEmeitter {
  constructor() {
    this._events = this._events || new Map(); // 储存事件/回调键值对
    this._maxListeners = this._maxListeners || 10; // 设立监听上限
  }
}

EventEmeitter.prototype.emit = function(type, ...args) {
  let handler
  handler = this._events.get(type)
  if (Array.isArray(handler)) {
    // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
    for (let i = 0; i < handler.length; i++) {
      if (args.length > 0) {
        handler[i].apply(this, args)
      } else {
        handler[i].call(this)
      }
    }
  } else {
    // 单个函数的情况我们直接触发即可
    if (args.length > 0) {
      handler.apply(this, args)
    } else {
      handler.call(this)
    }
  }

  return true
}

// 监听名为type的事件
EventEmeitter.prototype.addListener = function(type, fn) {
  const handler = this._events.get(type) // 获取对应事件名称的函数清单
  if (!handler) {
    this._events.set(type, fn)
  } else if (handler && typeof handler === "function") {
    // 如果handler是函数说明只有一个监听者
    this._events.set(type, [handler, fn]) // 多个监听者我们需要用数组储存
  } else {
    handler.push(fn) // 已经有多个监听者,那么直接往数组里push函数即可
  }
}

```

## 统计字符出现最多次的字符

```
let str = "abcabcabcbbccccc"
let num = 0
let char = ""

// 使其按照一定的次序排列
str = str
  .split("")
  .sort()
  .join("")
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g
str.replace(re, ($0, $1) => {
  if (num < $0.length) {
    num = $0.length
    char = $1
  }
})
console.log(`字符最多的是${char}，出现了${num}次`)

```

## 多行文本溢出

```
@mixin ellipsis($rowCount: 1) {
  @if $rowCount <=1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @else {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $rowCount;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
  }
}

```

## Domdiff算法

https://segmentfault.com/a/1190000018914249
给组件加 key，用 key 来控制组件的刷新，key 改变组件就刷新，这样开发代码会很好

diff 策略
React 用 三大策略 将 O(n^3)复杂度 转化为 O(n)复杂度

1. 策略一（tree diff）：
   只比较同级同层节点，UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。

2. 策略二（component diff）：

- 如果是同一类型的组件，按照原策略继续比较 Virtual DOM 树即可，对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切知道这点，那么就可以节省大量的 diff 运算时间。因此，React 允许用户通过 shouldComponentUpdate()来判断该组件是否需要进行 diff 算法分析，但是如果调用了 forceUpdate 方法，shouldComponentUpdate 则失效。
- 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。

3. 策略三（element diff）：
   加上 key 的话对性能是翻天覆地的优化，对于同一层级的一组子节点，通过唯一 id 区分。同级比较，节点的比较有五种情况

   ![domdiff](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-domdiff.png)

# 网络安全，http相关

## 请求方法

HTTP1.0 定义了三种请求⽅法： GET, POST 和 HEAD ⽅法
HTTP1.1 新增了五种请求⽅法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT
这些⽅法的具体作⽤是什么？
GET: 通常⽤于请求服务器发送某些资源
HEAD: 请求资源的头部信息, 并且这些头部与 HTTP GET ⽅法请求时返回的⼀致. 该请求⽅法的⼀个使⽤场景是在
下载⼀个⼤⽂件前先获取其⼤⼩再决定是否要下载, 以此可以节约带宽资源
OPTIONS: ⽤于获取⽬的资源所⽀持的通信选项
POST: 发送数据给服务器
PUT: ⽤于新增资源或者使⽤请求中的有效负载替换⽬标资源的表现形式
DELETE: ⽤于删除指定的资源
PATCH: ⽤于对资源进⾏部分修改
CONNECT: HTTP/1.1 协议中预留给能够将连接改为管道⽅式的代理服务器
TRACE: 回显服务器收到的请求，主要⽤于测试或诊断

## GET和POST有什么区别？

数据传输⽅式不同：GET 请求通过 URL 传输数据，⽽ POST 的数据通过请求体传输。
安全性不同：POST 的数据因为在请求主体内，所以有⼀定的安全性保证，⽽ GET 的数据在 URL 中，通过历史记
录，缓存很容易查到数据信息。
数据类型不同：GET 只允许 ASCII 字符，⽽ POST ⽆限制
GET ⽆害： 刷新、后退等浏览器操作 GET 请求是⽆害的，POST 可能重复提交表单
特性不同：GET 是安全（这⾥的安全是指只读特性，就是使⽤这个⽅法不会引起服务器状态变化）且幂等（幂等的
概念是指同⼀个请求⽅法执⾏多次和仅执⾏⼀次的效果完全相同），⽽ POST 是⾮安全⾮幂等

## 前端加密的常见场景和方法

前端密码传输过程中如果不加密，在日志中就可以拿到用户的明文密码，对用户安全不太负责。

几种方法：

1. 前端使用 Base64 / Unicode+1 等方式加密成非明文，后端解开之后再存它的 MD5/MD6 。
2. 直接使用 MD5/MD6 之类的方式取 Hash ，让后端存 Hash 的 Hash
3. 使用 https
4. 将文本内容进行展示层加密，利用字体的引用特点，把拿给爬虫的数据变成“乱码”
   > [《Web 端反爬虫技术方案》](https://juejin.im/post/5b6d579cf265da0f6e51a7e0)

## https用哪些端口进行通信，这些端口分别有什么用

- 443 端口用来验证服务器端和客户端的身份，比如验证证书的合法性
- 80 端口用来传输数据（在验证身份合法的情况下，用来数据传输）

# 杂项

## 从输入URL到页面加载全过程，敲下url发生了什么

1. 首先做 DNS 查询，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来
2. 接下来是 TCP 握手，应用层会下发数据给传输层，这里 TCP 协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP 地址，并且指示了数据传输中如何跳转路由器。然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了
3. TCP 握手结束后会进行 TLS 握手，然后就开始正式的传输数据
4. 数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务端会响应一个 HTML 文件
5. 首先浏览器会判断状态码是什么，如果是 200 那就继续解析，如果 400 或 500 的话就会报错，如果 300 的话会进行重定向，这里会有个重定向计数器，避免过多次的重定向，超过次数也会报错
6. 浏览器开始解析文件，如果是 gzip 格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件
7. 文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。如果遇到 script 标签的话，会判断是否存在 async 或者 defer ，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML 解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS 执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0 协议的话会极大的提高多图的下载效率。
8. 初始的 HTML 被完全加载和解析后会触发 DOMContentLoaded 事件
9. CSSOM 树和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定页面元素的布局、样式等等诸多方面的东西
10. 在生成 Render 树的过程中，浏览器就开始调用 GPU 绘制，合成图层，将内容显示在屏幕上了

## flex相关

flex 实现左右宽度固定，中间用 flex1 的时候，如果要处理文本溢出，需要加上 min-width:0 以及 width:0 设置宽度

## V8的垃圾回收机制

V8 的内存图内存机制,主要将内存分为新生代和老生代两块。新生代中的对象存活时间较短的对象，老生代中的对象存活时间较长，或常驻内存的对象。

新生代采用 Scavenge 算法进行垃圾回收，将内存一分为二，分为 from(使用中)，to（闲置）两部分，每次回收时只从 from 复制活的对象到 to 中，然后清掉死的，然后交换 from 和 to
老生代采用标记清除算法，遍历标记活的值，只清理死的对象

问题：标记清除算法会带来内存碎片问题，解决的方法是每次标记死亡后，将活的对象往一端靠拢，然后清掉外面没用的值

闭包和全局变量会造成 v8 无法立即回收内存

常见内存泄漏原因以及排查方法
闭包，全局变量，node 的事件监听，当同一个事件重复监听忘记移除时会出现，排查：尽可能模拟排查，实在不行可以用 heapdump 保存内存快照排查

## 实现一个sleep函数

```
function sleep1(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
function sleep2(time) {
  const start = Date.now()
  let stop
  while (true) {
    stop = Date.now()
    if (stop - start > time) break
  }
}

async function exec() {
  console.log("11111111111111111111111111111")
  await sleep1(1000)
  console.log("222222222222222222222222222222")
  sleep2(1000)
  console.log("333333333333333333333333333333")
}
exec()

```

## 类型转换,undefined==null

1. 如果是直接+号跟一个值，就会先转为数字，比如+"1" === 1
2. 如果是两值相加，就会先 toString 尽量转为字符串
3. 如果是其他运算符的话，就尽量转为数字运算

```
1 + "1" ==》 11
2 * "2" ==》 4
[1, 2] + [2, 1] ==》 1，2，2，1
"a" + + "b" ==》 等于 a + (+ b) ==> a + NaN ==> aNaN
```

null 和 undefined 和谁==都是 false，除了 null == undefined,这个比较特殊

## 隐式转换，隐式转换会调用本类型toString或valueOf方法.

这题考察的应该是类型的隐式转换,考引用类型在比较运算符时候,
valueOf 优于 toString,有 valueOf 就不会执行 toString
重写 toString 和 valueOf
所有对象继承了两个转换方法：
第一个是 toString()方法，改变一个对象或者函数的值
第二个是 valueOf(),返回相应的原始值

```
问：
var a = ?;
if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}

利用toString
let a = {
  i: 1,
  toString() {
    console.log("TCL: xixi")
    return a.i++
  }
}
利用valueOf
let a = {
  i: 1,
  valueOf () {
    return a.i++
  }
}
数组这个就有点妖了
var a = [1,2,3];
a.join = a.shift;

```

## 对象借用数组的方法

数组会根据 length 来进行 push 操作。例如以上的 obj 会根据 length==2 来更新下标，也就是 push 会从 2（length==2，意味着在[0,1,***]后添加）开始
然而下标值又是 key 值，所以会把 key 值为 2，3 的 value 替换成 1，2
然后打印出来的之所以是一个伪数组是因为这是开发者工具 devtool 的判断依据，如果有 splice 方法和 length，devtools 就会判断成数组

```
var obj = {
  "2": 3,
  "3": 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
res: [empty × 2, 1, 2, splice: ƒ, push: ƒ]

```

## 实现(5).add(3).minus(2) 功能

Number.prototype.add = function(n) {
return this.valueOf() + n
}
Number.prototype.minus = function(n) {
return this.valueOf() - n
}

## proxy实现数据绑定,Object.defindProperty与proxy

Object.defineProperty 与 proxy

1. Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
2. Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。
3. Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

```
const data = { count: 0 }
const proxy = new Proxy(data, {
  get(target, property) {
    return target[property]
  },
  set(target, property, value) {
    target[property] = value
    render(value)
  }
})

render(proxy.count)

function render(value) {
  document.getElementById("count").innerHTML = value
}

function increase() {
  proxy.count += 1
}

function decrease() {
  proxy.count -= 1
}

```

## 对象键名转换

这题考察的是对象的键名的转换。
对象的键名只能是字符串和 Symbol 类型。
其他类型的键名会被转换成字符串类型。
对象转字符串默认会调用 toString 方法。

```
example 1
var a={}, b='123', c=123;
a[b]='b';
a[c]='c';
console.log(a[b]);

example 2
var a={}, b=Symbol('123'), c=Symbol('123');
a[b]='b';
a[c]='c';
console.log(a[b]);

example 3
var a={}, b={key:'123'}, c={key:'456'};
a[b]='b';
a[c]='c';
console.log(a[b]);

```

## 函数传参，函数参数，形参，对象传参问题

函数的形参是值的传递，传递对象的话，函数接受的是这个对象的指针。

1. 函数形参如果是一个对象的话，相当于 o 只是一个复制的指针，指向那个对象，o 的操作会影响那个对象
2. 当 o 的指向变了的时候，操作的东西都是在新指向的那个东西了，就跟旧对象无关了

```
function changeObjProperty(o) {
  o.siteUrl = "http:www.baidu.com"
  o = new Object() 这是一个新的对象
  o.siteUrl = "http:www.google.com"
}
let webSite = new Object()
changeObjProperty(webSite)

console.log(webSite.siteUrl)
www.baidu.com
```

## input框中文输入问题

其实看过 elementui 框架源码的童鞋都应该知道，elementui 是通过 compositionstart & compositionend 做的中文输入处理：
相关代码：
{
/\* <input
ref="input"
@compositionstart="handleComposition"
@compositionupdate="handleComposition"
@compositionend="handleComposition"

> \*/
> }

## 递归实现翻转,颠倒数组，实现reverse

```
function fun(num) {
  let num1 = num / 10
  let num2 = num % 10
  if (num1 < 1) {
    return num
  } else {
    num1 = Math.floor(num1)
    return `${num2}${fun(num1)}`
  }
}
var a = fun(12345)
console.log(a)
console.log(typeof a)

```

## 连续赋值，点赋值

var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

console.log(a.x)
console.log(b.x)
结果:
undefined
{n:2}

首先，a 和 b 同时引用了{n:2}对象，接着执行到 a.x = a = {n：2}语句，
尽管赋值是从右到左的没错，但是.的优先级比 = 要高，所以这里首先执行 a.x，
相当于为 a（或者 b）所指向的{ n: 1 } 对象新增了一个属性 x，即此时对象将变为{ n: 1; x: undefined } 。
之后按正常情况，从右到左进行赋值，此时执行 a = { n: 2 }的时候，a 的引用改变，指向了新对象{ n：2 },
而 b 依然指向的是旧对象。之后执行 a.x = { n：2}的时候，并不会重新解析一遍 a，而是沿用最初解析 a.x 时候的 a，也即旧对象，故此时旧对象的 x 的值为{ n：2 } ，
旧对象为 { n: 1; x: { n：2 } } ，它被 b 引用着。
后面输出 a.x 的时候，又要解析 a 了，此时的 a 是指向新对象的 a，而这个新对象是没有 x 属性的，故访问时输出 undefined；而访问 b.x 的时候，将输出旧对象的 x 的值，即{n:2}。

## pwa原理

https:blog.csdn.net/weixin_33692284/article/details/88027509

## 实现请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数

```
function request(url, body, successCallback, errorCallback, maxCount = 3) {
  return fetch(url, body)
    .then(response => successCallback(response))
    .catch(err => {
      if (maxCount <= 0) return errorCallback("请求超时")
      return request(url, body, successCallback, errorCallback, --maxCount)
    })
}

// 调用
request(
  "https://some/path",
  { method: "GET", headers: {} },
  response => {
    console.log(response.json())
  },
  err => console.error(err)
)

```

## map(parseInt)问题

解惑["1", "2", "3"].map(parseInt) 为何返回[1, NaN, NaN]
map(parseInt) 相当于 map((item,index) => parseInt(item,index))
parseInt 函数的第二个参数，
如果是 0 或者没设置，则 parseInt 正常解析，
如果 < 2 或者 >36，则 NaN
其他，则第一个参数减 10 加上第二个基数，比如 parseInt('17',8) = 15 (因为 7 + 8)

## 位运算，与运算

用位运算与运算代替除法和求摩会有一点性能的提升
左乘右除与摩尔
5>>2 相当于 5 除以 2 的 2 次方也就是 5/4
5<<2 相当于 5 乘以 2 的 2 次方也就是 5\*4
5 & 1 相当于 5 摩 2

## 安卓手机图片默认点击放大的问题

给 img 加上 pointer-events: none
https://www.jianshu.com/p/3c0525f3f996

## 解决ios手机fixed问题键盘

https://blog.csdn.net/zyg1515330502/article/details/79207334

```
inputLoseFocus () {
  setTimeout(() => {
    // 获取clientHeight直接触发重绘，用来解决键盘收起时底部空白的问题
    document.body.clientHeight
    // 下面这个scrollTo也是用来解决键盘回收问题，不过亲测没用，并且会导致直接滑到顶部，所以注释掉
    // window.scrollTo(0, 0)
    // document.documentElement.scrollTop = document.body.scrollTop = 0
  }, 100)
},
```

## 前端图片转base64，转格式，转blob，上传的总结

https://blog.csdn.net/wangzhanzheng/article/details/78923013

## URL截取URL相关

https://www.cnblogs.com/zhabayi/p/6419938.html

```
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
```

## 存储cookie存储对象

https://www.cnblogs.com/DSC1991/p/9232325.html

```
// 设置过期时间，以毫秒为单位，比如存1秒:1*1000,1小时:1*60*60*1000,1天:1*24*60*60*1000
setCookie(name, value, time='', path='/', domain='') {
    var exp = new Date();
    exp.setTime(exp.getTime() + time)
    let expires = time ? ";expires="+exp.toGMTString() : ''
    let tmp = value ? escape(value) : ""
    document.cookie = name + "=" + tmp + expires + ";path=" + path + (domain ? `;domain=${domain}` : "");
},
getCookie(key) {
    let value;
    let cookies = document.cookie.split(';');
    for (let i = 0, len = cookies.length; i < len; i++) {
        let cur = cookies[i];
        if (key.trim() === cur.split('=')[0].trim()) {
            value = cur.split('=')[1];
            break;
        }
    }
    return value ? unescape(value) : '';
},
delCookie(name) { 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 60 * 60 * 1000); 
    var cval = getCookie(name); 
    if (cval != null) 
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/"; 
},

```

## rem适配，class匹配

`[class^="iconfont-"], [class*=" iconfont-"]`

```
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport">
<meta content="telephone=no" name="format-detection">
<script>
(function(doc, win) {
 var docEl = doc.documentElement,
   resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
   recalc = function() {
     var clientWidth = docEl.clientWidth;
     docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
   };
 if (!doc.addEventListener) {
   return;
 }
 win.addEventListener(resizeEvt, recalc, false);
 doc.addEventListener('DOMContentLoaded', recalc, false);
 recalc()
})(document, window)
</script>
```

## git相关

- 工作树：工作目录，空间即是工作树，
- 索引：/.git/index 是个庞大的二进制文件，记录着每条分支的详细信息，时间蹉什么的
- HEAD: 指向当前分支最后一次操作的提交的引用和指针

```
git pull = git fetch + git merge
回退：git reset —hard 提交号，然后直接git push -f强制推送即可

打标签：gt tag =>  git tag test，然后再sourcetree上可以看到标签
标签直接检出，然后git checkout -b 新分支名，检出一条分支
或者右键查看标签信息（git show 标签名）查看提交号，直接回退

变基rebase: git rebase -i head~7 修剪最近7个分叉,s合并，e修改信息，期间如果有中断的话直接git add .,git commit -m ’’,git rebase —continue继续即可，git rebase —abort放弃变基也可以
git rebase origin/test正确，git rebase origin test 错误

挑拣：git cherry-pick commitid 将随便的一个提交检出然后合到自己的分支上

暂存：git stash, git stash pop

git reflog 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）
例如执行 git reset --hard HEAD~1，退回到上一个版本，用git log则是看不出来被删除的commitid，用git reflog则可以看到被删除的commitid，我们就可以买后悔药，恢复到被删除的那个版本。
```

## gitfork

1. 进入项目的 Gitlab 主页，  点击 fork 按钮
2. 统一将主仓库命名为 upstream：git remote rename origin upstream
3. 添加新的远端仓库：git remote add origin fork 出来的仓库地址
   执行之后，git remote -v 查看本地关联的所有远端仓库：
   之后的开发步骤跟之前一样，创建分支，开发。
   唯一的区别是：开发完毕，push 代码时推送到个人的 origin 仓库，而不是 upstream 仓库。
   代码通过 PR 合并到 upstream 分支，以后会禁用直接往 upstream 仓库 push 分支。
   更新代码
   拉取 upstream 仓库所有更新：git fetch upstream
   拉取 upstream 仓库 master 分支的更新：git fetch upstream master
   拉取所有远端仓库的所有更新：git fetch --all
   多人协同办公
   如果两个人，RD1 和   RD2 协同开发，需要往同一个分支提交代码怎么办？
   此时，可以两人的代码都提交到 RD1 仓库中的分支 featureA。
   对 RD2 来说，需要在本地关联 RD1 的仓库：git remote add RD1 xxx
   开发完毕，不是往 upstream 仓库提 PR，而是往 RD1 仓库的 featureA 分支。

## snippet代码片段网站

快速生成 snippet 用户代码片段
推荐一个网站, 快速生成 snippets https://snippet-generator.app/

## Object.assign相关，深拷贝浅拷贝

缺点：assign 只能对第一层进行深拷贝，第一层的东西直接覆盖目标，也就是说如果目标有个属性是对象的，会直接整个都被覆盖掉

```
let tmpa = { txt: 'nih', obj: { haha: 666 } }
let tmpb = {
  obj: {
    test: 666
  }
}
let res = Object.assign({}, tmpa, tmpb)  // 第二层之后的对象都是直接覆盖不是深拷贝的
res: {
   obj: {
     test: 666
   }
   txt: 'nih'
}
```

## redux和vuex的区别和设计思想

1. 第一层都是 dispatch，redux dispatch 直接派发到 reducer，vuex dispatch 是派发 actions,commit 才是最终提交

2. redux 很包容，不依赖任何框架，哪里都能用，而 vuex 依赖于 vue

v-model 和 vuex 一起使用

```
computed: {
    message: {
        set (value) {
            this.$store.dispatch('updateMessage', value);
        },
        get () {
            return this.$store.state.obj.message
        }
    }
}
mutations: {
    UPDATE_MESSAGE (state, v) {
        state.obj.message = v;
    }
}
actions: {
    update_message ({ commit }, v) {
        commit('UPDATE_MESSAGE', v);
    }
}
```

## 为什么Vuex的mutation和Redux的reducer中不能做异步操作

因为更改 state 的函数必须是纯函数，纯函数既是统一输入就会统一输出，没有任何副作用；如果是异步则会引入额外的副作用，导致更改后的 state 不可预测；

## JSONP

可以解决跨域，用 script src 去发请求，然后在 query 加上一个 callback 回调函数（也可以不叫 callback，只是约定），这样请求后端就会最后运行 callback 函数
![jsonp](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/jsonp.png)

## 模块化发展amd,cmd,commonjs,esmodule

![模块化发展](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-module.png)

## 缓存相关，浏览器缓存，缓存机制

https://juejin.im/post/5c22ee806fb9a049fb43b2c5?utm_source=gold_browser_extension

- 调用 Service Worker 的 fetch 事件响应
- 查看 memory cache
- 查看 disk cache。这里又细分：
  1. 如果有强制缓（Cache-control 和 Expires 强制控制缓存时间）存且未失效，则使用强制缓存，不请求服务器。这时的状态码全部是 200
  2. 如果有强制缓存但已失效，使用对比协商缓存，比较后确定 304 还是 200（ETag 和 If-None-Match > Last-Modified & If-Modified-Since）
- 发送网络请求，等待网络响应
- 把响应内容存入 disk cache (如果 HTTP 头信息配置可以存的话)
- 把响应内容 的引用 存入 memory cache (无视 HTTP 头信息的配置)
- 把响应内容存入 Service Worker 的 Cache Storage (如果 Service Worker 的脚本调用了 cache.put())

Memory cache，即时的，几乎所有请求都会进来，不过一关即消，
Disk cache,持久的，请求进来后，如果以后再次请求的话会从 disk cache 里面拿

![缓存](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-cache.png)

选择合适的缓存策略,对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略

- 对于某些不需要缓存的资源，可以使用 Cache-control: no-store ，表示该资源不需要缓存
- 对于频繁变动的资源，可以使用 Cache-Control: no-cache 并配合 ETag 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。
- 对于代码文件来说，通常使用 Cache-Control: max-age=31536000 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。

## BFC相关，IFC，GFC,FFC

1. BFC（Block formatting contexts）：块级格式上下文

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

2. IFC（Inline formatting contexts）：内联格式上下文

IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同，IFC 中时不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排列。

水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。

3. GFC（GrideLayout formatting contexts）：网格布局格式化上下文

当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

4. FFC（Flex formatting contexts）:自适应格式上下文
   display 值为 flex 或者 inline-flex 的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少 safari 和 chrome 还是 OK 的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。

## 为什么用图片埋点打点

1. 能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
2. 触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
3. 跨域友好
4. 执行过程无阻塞
5. 相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
6. GIF 的最低合法体积最小（最小的 BMP 文件需要 74 个字节，PNG 需要 67 个字节，而合法的 GIF，只需要 43 个字节

## JavaScript的基本类型和复杂类型是储存在哪⾥的？

基本类型储存在栈中，但是⼀旦被闭包引⽤则成为常住内存，会储存在内存堆中。
复杂类型会储存在内存堆中。

## js按引用传参，js传参

Js 传对象时，按共享传递，本质上还是按值传递，如果传入一个对象，会复制对象的引用地址然后传进来，在函数内改变对象的某一个属性，则外部对象也会改变，但是如果直接把对象赋值为另一个值，则外部对象不会改变，这种现象是，复杂类型的传递其实本质上也是传的值，不过传的是引用的内存地址值，如果改变的是栈内同一个地址，则会同步变化，如果是直接改成别的值，地址不一样自然不相互影响，

## call和apply,bind的区别是什么，哪个性能更好一些

1. apply 传数组，call 不固定, bind 作用一样，不过是返回一个新的函数
2. call 比 apply 的性能要好，平常可以多用 call, call 传入参数的格式正是内部所需要的格式

## 让div水平垂直居中

```
<div class="parent">
  <div class="child"></div>
</div>
div.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

div.parent {
    position: relative;
}
div.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* 或者 */
div.child {
    width: 50px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -5px;
}
/* 或 */
div.child {
    width: 50px;
    height: 10px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
div.parent {
    display: grid;
}
div.child {
    justify-self: center;
    align-self: center;
}
```

## 前端如何进行seo优化

- 合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可；description 把页面内容高度概括，不可过分堆砌关键词；keywords 列举出重要关键词。
- 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页
- 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，保证重要内容一定会被抓取
- 重要内容不要用 js 输出：爬虫不会执行 js 获取内容
- 少用 iframe：搜索引擎不会抓取 iframe 中的内容
- 非装饰性图片必须加 alt
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标

## css实现瀑布流

两行 css 如下:

```
<style scoped>
  .waterfall-container {

     /*分几列*/

    column-count: 2;
  }
  .waterfall-item {

     /*不留白，不知道什么意思可以取消这个样式试试*/

    break-inside: avoid;
  }

</style>
/*列间距，可有可无，默认30px*/
/*column-gap: 0;*/

```

## 标准盒子模型和怪异盒模型

现代浏览器默认都是标准盒模型，宽度不包含 padding 和 border，而 IE 怪异盒子模型（即 box-sizing:border-box）很多情况下比较有用，是宽度包含 padding 和 border

## 设置元素不可见

分析比较 opacity: 0、visibility: hidden、display: none
Display:none 会导致重排，其他两个只是改变可见度，其中 visibility: hidden 没有连带性，也就是说最外层即使设置 visibility: hidden，只要子孙设置 visibility: visable，照样可以看到，其他两个的话只要设置那么子孙怎样都不会显示

## Defer和async的区别

加了 defer 和 async 的脚本会和 dom 渲染同时下载，区别点在于 defer（异步）会下载后 dom 渲染完后再执行，而 asycn 则加载完后立即执行
默认： dom 加载 — 加载脚本 — 运行脚本 — 再进行接下来的 dom 加载
而加载 defer 和 async 后，代表脚本加载和 dom 渲染操作并行执行，dom 加载和脚本加载同时进行，不同点是，defer 下，脚本加载后会等到 dom 完全加载完后再执行，而 async 则脚本加载完后立即执行

## css实现按比例显示

```
vw 会把视口的宽度平均分为100份
.square {
    width: 10vw;
    height: 10vw;
    background: red;
}
方法2：利用margin或者padding的百分比计算是参照父元素的width属性
.square {
    width: 10%;
    padding-bottom: 10%;
    height: 0; // 防止内容撑开多余的高度
    background: red;
}

```

## hybrid

https://juejin.im/post/5cc26dfef265da037b611738#heading-7

## 1px问题

![1px](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-1px.png)
box-shadow: 0 -1px 1px -1px #e5e5e5, //上边线
1px 0 1px -1px #e5e5e5, //右边线
0 1px 1px -1px #e5e5e5, //下边线
-1px 0 1px -1px #e5e5e5; //左边线

# React相关

## setState原理

1. 在生命周期或者节点 on 触发的事件才会触发 react 的 batchUpdate 函数，才会使得 setState 异步批量处理
   其他情况下，比如 setTimeout，或者 addEventListner，setState 回调里的 setState 都是同步的，立刻设置立刻 update
2. setState(),第一个参数可以为函数也可以直接为对象，函数的话相当于在 set 之前可以做什么，然后再返回 state 对象
   其中 setState( (pre) => {
   pre 要特别注意，它代表这个语句之前的所有 setState 语句合并之后最新的一个 state 值，之后的 setState 它是不会计算的
   return {counter:pre.counter+1}
   })
3. setState 属性一旦更新就会触发 willMount，然后再执行 setState 的第二个回调

```
constructor(props) {
  super(props)
  this.state = {
    a: 1,
    b: 1000,
    counter: 0
  }
}
componentDidMount() {
  setTimeout(() => {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log("TCL: 2", this.state.counter) 6.  ==> 2
  }, 300)
  批量操作：对同一个key多次操作会合并，会执行最后一次
  this.setState({ counter: this.state.counter + 1 })
  this.setState({ counter: this.state.counter + 1 })
  this.setState({ counter: this.state.counter + 1 }, () => {
    console.log("TCL: 1", this.state.counter) 4.  ==> 1
  })
  console.log("TCL: 3", this.state.counter) 1.  ==> 0
  this.setState(prev => {
    console.log("TCL: 4", this.state.counter) 2. ==> 0
  })
  setTimeout(() => {
    console.log("TCL: 5", this.state.counter) 5.  ==> 1
  }, 280)
  this.setState(pre => {
    console.log("TCL: 6", pre.counter) 3.  ==> 1
  })
  console.log("TCL: 7", this.state.counter)
    TCL: 3 0
    TCL: 7 0
    TCL: 4 0
    TCL: 6 1
    willUpdate
    didUdate
    TCL: 1 1
    TCL: 5 1
    willUpdate
    didUdate
    TCL: 2 2
  document.body.addEventListener("click", () => {
    this.setState({
      counter: 300
    })
    console.log("TCL: ", this.state.counter) 结果300
  })
}

onClickToSetA = () => {
  setTimeout(() => {
    this.setState(
      {
        a: ++this.state.a
      },
      () => {
        console.log("0000")
      }
    )
    console.log("1111")
    this.setState(
      {
        b: Math.random()
      },
      () => {
        console.log("2222")
      }
    )
    console.log("3333")
  }, 0)
   willUpdate
   didUdate
   0000
   1111
   willUpdate
   didUdate
   2222
   3333
}
componentWillUpdate() {
  console.log("willUpdate")
}
componentDidUpdate() {
  console.log("didUdate")
}

```

## 合成事件

如果 DOM 上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React 为了避免这类 DOM 事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。

1. 当用户在为 onClick 添加函数时，React 并没有将 Click 时间绑定在 DOM 上面。
2. 而是在 document 处监听所有支持的事件，当事件发生并冒泡至 document 处时，React 将事件内容封装交给中间层 SyntheticEvent（负责所有事件合成）
3. 所以当事件触发的时候，对使用统一的分发函数 dispatchEvent 将指定函数执行。

## react浅比较，pureComponent的原理

比较两个 props 的步骤：
关键的一个 is 方法只能精准判断基本数据类型，对于引用类型的话直接都是不等的

1. 首先对基本数据类型进行比较，用===再处理 null !== null 以及+0 === -0 的特殊情况
2. 对数据类型的比较，先对键值长度进行比较，然后对每个属性进行比较，每个属性的比较的话只能基本类型可以精准比较，但如果是引用类型的话就不能精准比较了，比如，[0,1,2] === [0,1,2] // false
3. 综上，浅比较只会针对 props 第一层进行判断，属性如果是引用类型的话直接就不相等的，就不能达到 pure 的效果，也就是说属性如果有数组或者对象这种的话基本用 pure 是没用的

所以，如果是那种传进来的属性是一个数据对象的话还是要自己用 shouldComponentUpdate 来自己判断

![pure](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-pure.png)

# webpack相关

## 自定义插件，自定义plugin

插件系统是 Webpack 成功的一个关键性因素。在编译的整个生命周期中，Webpack 会触发许多事件钩子，Plugin 可以监听这些事件，根据需求在相应的时间点对打包内容进行定向的修改。

```
1. 一个最简单的 plugin 是这样的:
class Plugin{
   // 注册插件时，会调用 apply 方法
   // apply 方法接收 compiler 对象
   // 通过 compiler 上提供的 Api，可以对事件进行监听，执行相应的操作
   apply(compiler){
       // compilation 是监听每次编译循环
       // 每次文件变化，都会生成新的 compilation 对象并触发该事件
     compiler.plugin('compilation',function(compilation) {})
   }
}
2. 注册插件:

// webpack.config.js
module.export = {
  plugins:[
    new Plugin(options),
  ]
}

```

## webpack如何工作，工作流程

工作流程 (加载 - 编译 - 输出)

- 1、读取配置文件，按命令 初始化 配置参数，创建 Compiler 对象；
- 2、调用插件的 apply 方法 挂载插件 监听，然后从入口文件开始执行编译；
- 3、按文件类型，调用相应的 Loader 对模块进行 编译，并在合适的时机点触发对应的事件，调用 Plugin 执行，最后再根据模块 依赖查找 到所依赖的模块，递归执行第三步；
- 4、将编译后的所有代码包装成一个个代码块 (Chuck)， 并按依赖和配置确定 输出内容。这个步骤，仍然可以通过 Plugin 进行文件的修改;
- 5、最后，根据 Output 把文件内容一一写入到指定的文件夹中，完成整个过程；

打包风格
commonJs 的 require 风格

## Webpack热更新

1. 当修改了一个或多个文件； 2.文件系统接收更改并通知 webpack；
2. webpack 重新编译构建一个或多个模块，并通知 HMR 服务器进行更新；
3. HMR Server 使用 webSocket 通知 HMR runtime 需要更新，HMR 运行时通过 HTTP 请求更新 jsonp；
4. HMR 运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

# Node相关

## 使用过的koa中间件

koa.js 并没有内置 Request Body 的解析器，当我们需要解析请求体时需要加载额外的中间件，官方提供的 koa-bodyparser 是个很不错的选择，支持 x-www-form-urlencoded, application/json 等格式的请求体，但不支持 form-data 的请求体，需要借助 formidable 这个库，也可以直接使用 koa-body 或 koa-better-body
Koa-views 支持模板引擎
Koa-session
Koa-helmet 增加头盔
Koa-compress 类 gzip 一样的压缩
koa-convert 用来兼容 koa2 以下版本的写法
