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
- [亮点优化，性能优化/代码优化化，webpack优化](#%E4%BA%AE%E7%82%B9%E4%BC%98%E5%8C%96%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96%E5%8C%96webpack%E4%BC%98%E5%8C%96)
- [前端日志监控，异常上报，性能监控](#%E5%89%8D%E7%AB%AF%E6%97%A5%E5%BF%97%E7%9B%91%E6%8E%A7%E5%BC%82%E5%B8%B8%E4%B8%8A%E6%8A%A5%E6%80%A7%E8%83%BD%E7%9B%91%E6%8E%A7)
  - [日志监控](#%E6%97%A5%E5%BF%97%E7%9B%91%E6%8E%A7)
  - [性能监控](#%E6%80%A7%E8%83%BD%E7%9B%91%E6%8E%A7)
  - [日志上报](#%E6%97%A5%E5%BF%97%E4%B8%8A%E6%8A%A5)
- [设计模式](#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)
  - [1.单例模式（弹框用得多）](#1%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F%E5%BC%B9%E6%A1%86%E7%94%A8%E5%BE%97%E5%A4%9A)
  - [高阶函数实现AOP（面向切面编程，即各种中间件）,函数中间件](#%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0%E5%AE%9E%E7%8E%B0aop%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B%E5%8D%B3%E5%90%84%E7%A7%8D%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%87%BD%E6%95%B0%E4%B8%AD%E9%97%B4%E4%BB%B6)
  - [科利华,柯里化，部分求值，传入的参数先存起来，到最后才一次性求](#%E7%A7%91%E5%88%A9%E5%8D%8E%E6%9F%AF%E9%87%8C%E5%8C%96%E9%83%A8%E5%88%86%E6%B1%82%E5%80%BC%E4%BC%A0%E5%85%A5%E7%9A%84%E5%8F%82%E6%95%B0%E5%85%88%E5%AD%98%E8%B5%B7%E6%9D%A5%E5%88%B0%E6%9C%80%E5%90%8E%E6%89%8D%E4%B8%80%E6%AC%A1%E6%80%A7%E6%B1%82)
  - [策略模式](#%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F)
  - [代理模式，缓存代理](#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E7%BC%93%E5%AD%98%E4%BB%A3%E7%90%86)
- [算法相关和数据结构](#%E7%AE%97%E6%B3%95%E7%9B%B8%E5%85%B3%E5%92%8C%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
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
  - [观察者和发布订阅模式的区别](#%E8%A7%82%E5%AF%9F%E8%80%85%E5%92%8C%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB)
- [http相关](#http%E7%9B%B8%E5%85%B3)
  - [网络模型，7层模型，tcp,udp,socket](#%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B7%E5%B1%82%E6%A8%A1%E5%9E%8Btcpudpsocket)
  - [三次握手，HTTPS握手过程中，客户端如何验证证书的合法性](#%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8Bhttps%E6%8F%A1%E6%89%8B%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%A6%82%E4%BD%95%E9%AA%8C%E8%AF%81%E8%AF%81%E4%B9%A6%E7%9A%84%E5%90%88%E6%B3%95%E6%80%A7)
  - [四次挥手](#%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B)
  - [中间人攻击过程如下：](#%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB%E8%BF%87%E7%A8%8B%E5%A6%82%E4%B8%8B)
  - [http1,http1.1,http2,http1/2](#http1http11http2http12)
  - [网络安全，网络攻击，网络防御](#%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E7%BD%91%E7%BB%9C%E9%98%B2%E5%BE%A1)
  - [网络防御，加密算法](#%E7%BD%91%E7%BB%9C%E9%98%B2%E5%BE%A1%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95)
  - [返回头](#%E8%BF%94%E5%9B%9E%E5%A4%B4)
  - [请求方法](#%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95)
  - [301和302](#301%E5%92%8C302)
  - [GET和POST有什么区别？](#get%E5%92%8Cpost%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [前端加密的常见场景和方法](#%E5%89%8D%E7%AB%AF%E5%8A%A0%E5%AF%86%E7%9A%84%E5%B8%B8%E8%A7%81%E5%9C%BA%E6%99%AF%E5%92%8C%E6%96%B9%E6%B3%95)
  - [https用哪些端口进行通信，这些端口分别有什么用](#https%E7%94%A8%E5%93%AA%E4%BA%9B%E7%AB%AF%E5%8F%A3%E8%BF%9B%E8%A1%8C%E9%80%9A%E4%BF%A1%E8%BF%99%E4%BA%9B%E7%AB%AF%E5%8F%A3%E5%88%86%E5%88%AB%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8)
- [文件上传，断点上传，分片上传，断点传输](#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%96%AD%E7%82%B9%E4%B8%8A%E4%BC%A0%E5%88%86%E7%89%87%E4%B8%8A%E4%BC%A0%E6%96%AD%E7%82%B9%E4%BC%A0%E8%BE%93)
- [老码农的心得](#%E8%80%81%E7%A0%81%E5%86%9C%E7%9A%84%E5%BF%83%E5%BE%97)
  - [从输入URL到页面加载全过程，敲下url发生了什么](#%E4%BB%8E%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E5%85%A8%E8%BF%87%E7%A8%8B%E6%95%B2%E4%B8%8Burl%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88)
  - [flex相关](#flex%E7%9B%B8%E5%85%B3)
  - [为什么for性能高于forEach](#%E4%B8%BA%E4%BB%80%E4%B9%88for%E6%80%A7%E8%83%BD%E9%AB%98%E4%BA%8Eforeach)
  - [跨页面通信方式](#%E8%B7%A8%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F)
  - [实现一个sleep函数](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AAsleep%E5%87%BD%E6%95%B0)
  - [为什么for性能高于forEach](#%E4%B8%BA%E4%BB%80%E4%B9%88for%E6%80%A7%E8%83%BD%E9%AB%98%E4%BA%8Eforeach-1)
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
  - [addEventListener第三个参数,addEventlistenter相关，capture，事件捕获，冒泡](#addeventlistener%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0addeventlistenter%E7%9B%B8%E5%85%B3capture%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7%E5%86%92%E6%B3%A1)
  - [hybrid](#hybrid)
  - [1px问题](#1px%E9%97%AE%E9%A2%98)
  - [Ts工具,ts实用工具](#ts%E5%B7%A5%E5%85%B7ts%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7)
  - [栈模拟队列，队列模拟栈](#%E6%A0%88%E6%A8%A1%E6%8B%9F%E9%98%9F%E5%88%97%E9%98%9F%E5%88%97%E6%A8%A1%E6%8B%9F%E6%A0%88)
  - [Mvvm，mvc区别](#mvvmmvc%E5%8C%BA%E5%88%AB)
  - [为什么要用transform而不用margin](#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8transform%E8%80%8C%E4%B8%8D%E7%94%A8margin)
  - [Href和src的区别](#href%E5%92%8Csrc%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [Position相关，布局相关](#position%E7%9B%B8%E5%85%B3%E5%B8%83%E5%B1%80%E7%9B%B8%E5%85%B3)
  - [前端如何进行seo优化](#%E5%89%8D%E7%AB%AF%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8Cseo%E4%BC%98%E5%8C%96-1)
  - [eslint](#eslint)
  - [短路求值，不利用第三个值来交换值](#%E7%9F%AD%E8%B7%AF%E6%B1%82%E5%80%BC%E4%B8%8D%E5%88%A9%E7%94%A8%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%80%BC%E6%9D%A5%E4%BA%A4%E6%8D%A2%E5%80%BC)
  - [图片二值化，图形算法，正片叠底](#%E5%9B%BE%E7%89%87%E4%BA%8C%E5%80%BC%E5%8C%96%E5%9B%BE%E5%BD%A2%E7%AE%97%E6%B3%95%E6%AD%A3%E7%89%87%E5%8F%A0%E5%BA%95)
  - [阻止页面滚动](#%E9%98%BB%E6%AD%A2%E9%A1%B5%E9%9D%A2%E6%BB%9A%E5%8A%A8)
  - [移动端初始化样式，完美阻止ios回弹效果，inobounce](#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%88%9D%E5%A7%8B%E5%8C%96%E6%A0%B7%E5%BC%8F%E5%AE%8C%E7%BE%8E%E9%98%BB%E6%AD%A2ios%E5%9B%9E%E5%BC%B9%E6%95%88%E6%9E%9Cinobounce)
  - [sass循环](#sass%E5%BE%AA%E7%8E%AF)
  - [动态挂载节点,动态添加节点，js创建节点](#%E5%8A%A8%E6%80%81%E6%8C%82%E8%BD%BD%E8%8A%82%E7%82%B9%E5%8A%A8%E6%80%81%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9js%E5%88%9B%E5%BB%BA%E8%8A%82%E7%82%B9)
- [webpack相关](#webpack%E7%9B%B8%E5%85%B3)
  - [常用插件](#%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6)
  - [自定义loader](#%E8%87%AA%E5%AE%9A%E4%B9%89loader)
  - [webpack原理，实现webpack](#webpack%E5%8E%9F%E7%90%86%E5%AE%9E%E7%8E%B0webpack)
  - [自定义插件，自定义plugin](#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E4%BB%B6%E8%87%AA%E5%AE%9A%E4%B9%89plugin)
  - [webpack如何工作，工作流程](#webpack%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B)
  - [匹配文件夹下所有特定后缀的文件，webpackCopy复制前先压缩所有的js](#%E5%8C%B9%E9%85%8D%E6%96%87%E4%BB%B6%E5%A4%B9%E4%B8%8B%E6%89%80%E6%9C%89%E7%89%B9%E5%AE%9A%E5%90%8E%E7%BC%80%E7%9A%84%E6%96%87%E4%BB%B6webpackcopy%E5%A4%8D%E5%88%B6%E5%89%8D%E5%85%88%E5%8E%8B%E7%BC%A9%E6%89%80%E6%9C%89%E7%9A%84js)
  - [Webpack热更新](#webpack%E7%83%AD%E6%9B%B4%E6%96%B0)
  - [babel-pollyfill和babel-transform-runtime区别](#babel-pollyfill%E5%92%8Cbabel-transform-runtime%E5%8C%BA%E5%88%AB)
  - [import和require的区别](#import%E5%92%8Crequire%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [webpack优化](#webpack%E4%BC%98%E5%8C%96)
  - [Webpack5和webpack4的区别](#webpack5%E5%92%8Cwebpack4%E7%9A%84%E5%8C%BA%E5%88%AB)
- [Node相关](#node%E7%9B%B8%E5%85%B3)
  - [V8的垃圾回收机制，内存机制，内存相关](#v8%E7%9A%84%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E5%86%85%E5%AD%98%E6%9C%BA%E5%88%B6%E5%86%85%E5%AD%98%E7%9B%B8%E5%85%B3)
  - [node单线程，node特性，事件驱动，非阻塞I/O](#node%E5%8D%95%E7%BA%BF%E7%A8%8Bnode%E7%89%B9%E6%80%A7%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E9%9D%9E%E9%98%BB%E5%A1%9Eio)
  - [node的readFile和readFileSync的区别](#node%E7%9A%84readfile%E5%92%8Creadfilesync%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [fs和fs-extra](#fs%E5%92%8Cfs-extra)
  - [node实现多进程](#node%E5%AE%9E%E7%8E%B0%E5%A4%9A%E8%BF%9B%E7%A8%8B)
  - [node进程间通信](#node%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1)
  - [exports.xxx=xxx和Module.exports={}有什么区别吗](#exportsxxxxxx%E5%92%8Cmoduleexports%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E5%90%97)
  - [Nodejs加载模块机制](#nodejs%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97%E6%9C%BA%E5%88%B6)
  - [node调用java,node调用接口](#node%E8%B0%83%E7%94%A8javanode%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3)
  - [使用过的koa中间件](#%E4%BD%BF%E7%94%A8%E8%BF%87%E7%9A%84koa%E4%B8%AD%E9%97%B4%E4%BB%B6)
  - [实现koa，关键的中间件机制，compose](#%E5%AE%9E%E7%8E%B0koa%E5%85%B3%E9%94%AE%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BB%B6%E6%9C%BA%E5%88%B6compose)
  - [实现限量重启，比如我最多让其在1分钟内重启5次，超过了就报警给运维](#%E5%AE%9E%E7%8E%B0%E9%99%90%E9%87%8F%E9%87%8D%E5%90%AF%E6%AF%94%E5%A6%82%E6%88%91%E6%9C%80%E5%A4%9A%E8%AE%A9%E5%85%B6%E5%9C%A81%E5%88%86%E9%92%9F%E5%86%85%E9%87%8D%E5%90%AF5%E6%AC%A1%E8%B6%85%E8%BF%87%E4%BA%86%E5%B0%B1%E6%8A%A5%E8%AD%A6%E7%BB%99%E8%BF%90%E7%BB%B4)
  - [实现一个node子进程被杀死，然后自动重启代码的思路](#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AAnode%E5%AD%90%E8%BF%9B%E7%A8%8B%E8%A2%AB%E6%9D%80%E6%AD%BB%E7%84%B6%E5%90%8E%E8%87%AA%E5%8A%A8%E9%87%8D%E5%90%AF%E4%BB%A3%E7%A0%81%E7%9A%84%E6%80%9D%E8%B7%AF)
  - [buffer模块](#buffer%E6%A8%A1%E5%9D%97)
  - [node的问题](#node%E7%9A%84%E9%97%AE%E9%A2%98)
  - [用nodejs，将base64转化成png文件](#%E7%94%A8nodejs%E5%B0%86base64%E8%BD%AC%E5%8C%96%E6%88%90png%E6%96%87%E4%BB%B6)
  - [node开发脚手架](#node%E5%BC%80%E5%8F%91%E8%84%9A%E6%89%8B%E6%9E%B6)
  - [基于vue-cli3创建自己的UI组件库，开发npm包，开发脚手架](#%E5%9F%BA%E4%BA%8Evue-cli3%E5%88%9B%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84ui%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BC%80%E5%8F%91npm%E5%8C%85%E5%BC%80%E5%8F%91%E8%84%9A%E6%89%8B%E6%9E%B6)
  - [开发Node脚手架](#%E5%BC%80%E5%8F%91node%E8%84%9A%E6%89%8B%E6%9E%B6)
  - [移除脚手架，脚手架删除，脚手架查找](#%E7%A7%BB%E9%99%A4%E8%84%9A%E6%89%8B%E6%9E%B6%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%A0%E9%99%A4%E8%84%9A%E6%89%8B%E6%9E%B6%E6%9F%A5%E6%89%BE)
- [Eggjs](#eggjs)
- [微信开发](#%E5%BE%AE%E4%BF%A1%E5%BC%80%E5%8F%91)
  - [鉴权](#%E9%89%B4%E6%9D%83)
  - [微信开发流程](#%E5%BE%AE%E4%BF%A1%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B)
- [React相关](#react%E7%9B%B8%E5%85%B3)
  - [setState原理](#setstate%E5%8E%9F%E7%90%86)
  - [合成事件](#%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6)
  - [react浅比较，pureComponent的原理](#react%E6%B5%85%E6%AF%94%E8%BE%83purecomponent%E7%9A%84%E5%8E%9F%E7%90%86)
  - [react性能优化，react优化](#react%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96react%E4%BC%98%E5%8C%96)
  - [JSX](#jsx)
  - [React复用，组件逻辑复用，react各组件比较](#react%E5%A4%8D%E7%94%A8%E7%BB%84%E4%BB%B6%E9%80%BB%E8%BE%91%E5%A4%8D%E7%94%A8react%E5%90%84%E7%BB%84%E4%BB%B6%E6%AF%94%E8%BE%83)
  - [React16后的生命周期，react16相关](#react16%E5%90%8E%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9Freact16%E7%9B%B8%E5%85%B3)
  - [react16版本的reconciliation阶段和commit阶段是什么](#react16%E7%89%88%E6%9C%AC%E7%9A%84reconciliation%E9%98%B6%E6%AE%B5%E5%92%8Ccommit%E9%98%B6%E6%AE%B5%E6%98%AF%E4%BB%80%E4%B9%88)
  - [React.children.map迭代出来的节点是不能直接修改属性的，可以配合React.cloneElement进行扩展修改](#reactchildrenmap%E8%BF%AD%E4%BB%A3%E5%87%BA%E6%9D%A5%E7%9A%84%E8%8A%82%E7%82%B9%E6%98%AF%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E4%BF%AE%E6%94%B9%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E9%85%8D%E5%90%88reactcloneelement%E8%BF%9B%E8%A1%8C%E6%89%A9%E5%B1%95%E4%BF%AE%E6%94%B9)
  - [ForwardingRefs有什么用](#forwardingrefs%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8)
  - [自己封装antDesign的表单，](#%E8%87%AA%E5%B7%B1%E5%B0%81%E8%A3%85antdesign%E7%9A%84%E8%A1%A8%E5%8D%95)
  - [react16新增](#react16%E6%96%B0%E5%A2%9E)
  - [类似v-html一样解析html](#%E7%B1%BB%E4%BC%BCv-html%E4%B8%80%E6%A0%B7%E8%A7%A3%E6%9E%90html)
  - [绑定事件](#%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6)
  - [高阶Hoc](#%E9%AB%98%E9%98%B6hoc)
  - [react-router](#react-router)
  - [react生命周期](#react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
  - [复合组件,react插槽](#%E5%A4%8D%E5%90%88%E7%BB%84%E4%BB%B6react%E6%8F%92%E6%A7%BD)
  - [reacthooks](#reacthooks)
  - [reactcontext](#reactcontext)
  - [redux原理,react-redux原理，redux-thunk原理](#redux%E5%8E%9F%E7%90%86react-redux%E5%8E%9F%E7%90%86redux-thunk%E5%8E%9F%E7%90%86)
  - [redux中间件机制，middleware](#redux%E4%B8%AD%E9%97%B4%E4%BB%B6%E6%9C%BA%E5%88%B6middleware)
  - [redux相关](#redux%E7%9B%B8%E5%85%B3)
  - [redux和mobx的区别](#redux%E5%92%8Cmobx%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [react-redux](#react-redux)
  - [redux-thunk](#redux-thunk)
  - [redux-saga](#redux-saga)
  - [React 的 O(n3)和 O(n)怎么计算出来的](#react-%E7%9A%84-on3%E5%92%8C-on%E6%80%8E%E4%B9%88%E8%AE%A1%E7%AE%97%E5%87%BA%E6%9D%A5%E7%9A%84)
  - [Rn的原理](#rn%E7%9A%84%E5%8E%9F%E7%90%86)
  - [reactssr掘金好文](#reactssr%E6%8E%98%E9%87%91%E5%A5%BD%E6%96%87)
  - [Egg + React + SSR 服务端渲染](#egg--react--ssr-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93)
  - [Next](#next)
- [Umi+Dva](#umidva)
  - [所有配置](#%E6%89%80%E6%9C%89%E9%85%8D%E7%BD%AE)
  - [运行时配置](#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE)
  - [start](#start)
  - [结构](#%E7%BB%93%E6%9E%84)
  - [mock](#mock)
  - [路由](#%E8%B7%AF%E7%94%B1)
  - [umi-env配置文件区分环境](#umi-env%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8C%BA%E5%88%86%E7%8E%AF%E5%A2%83)
  - [配合dva使用](#%E9%85%8D%E5%90%88dva%E4%BD%BF%E7%94%A8)
  - [按需加载](#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)
- [Vue相关](#vue%E7%9B%B8%E5%85%B3)
  - [vue在v-for时给每项元素绑定事件需要用事件代理吗？为什么？](#vue%E5%9C%A8v-for%E6%97%B6%E7%BB%99%E6%AF%8F%E9%A1%B9%E5%85%83%E7%B4%A0%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6%E9%9C%80%E8%A6%81%E7%94%A8%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [vue技巧](#vue%E6%8A%80%E5%B7%A7)
  - [Vue.use和Vue.mixin开发插件](#vueuse%E5%92%8Cvuemixin%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)
  - [封装插件](#%E5%B0%81%E8%A3%85%E6%8F%92%E4%BB%B6)
  - [实现Vue-router](#%E5%AE%9E%E7%8E%B0vue-router)
  - [封装插件异步按需引入](#%E5%B0%81%E8%A3%85%E6%8F%92%E4%BB%B6%E5%BC%82%E6%AD%A5%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)
- [自动化测试](#%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95)
- [一些源码包的架构设计](#%E4%B8%80%E4%BA%9B%E6%BA%90%E7%A0%81%E5%8C%85%E7%9A%84%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1)
  - [jquery的架构](#jquery%E7%9A%84%E6%9E%B6%E6%9E%84)
- [数据库](#%E6%95%B0%E6%8D%AE%E5%BA%93)
  - [mongoDB](#mongodb)
  - [mongoose](#mongoose)

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
<!-- 加上控制每个周期的第一次是否运行 -->
debounce(func, wait = 200, needRunAtFirst = true) {
  // 缓存一个定时器id
  let timer = 0,
    shouldRunImmediate = needRunAtFirst,
    firstClickTime = Date.now()
  // 这里返回的函数是每次用户实际调用的防抖函数 // 如果已经设定过定时器了就清空上一次的定时器 // 开始一个新的定时器，延迟执行用户传入的方法
  return function() {
    let _this = this
    if (shouldRunImmediate) {
      func.apply(_this, arguments)
      firstClickTime = Date.now()
      shouldRunImmediate = false
    } else if (needRunAtFirst && Date.now() - firstClickTime < wait) {
      return false
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(_this, arguments)
        shouldRunImmediate = needRunAtFirst
      }, wait)
    }
  }
}
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
function debounce(func, wait = 200, needRunAtFirst = true){
  let timer = 0
  let firstTime = needRunAtFirst
  return function () {
    let _this = this
    if (firstTime) {
      func.apply(_this, arguments)
      firstTime = false
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(_this, arguments)
        firstTime = needRunAtFirst
      }, wait)
    }
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

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-proto.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-proto.png

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

Async await 如何通过同步实现异步， async 包住的函数实际上相当于一个 Generator 函数，通过 yield 和 next 实现暂停和继续向下调用

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
    <!-- 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行 -->
    typeof resolveFn !== 'function' ? (resolveFn = (value) => value) : null
    typeof rejectFn !== 'function'
      ? (rejectFn = (reason) => {
          throw new Error(reason instanceof Error ? reason.message : reason)
        })
      : null

    <!-- return一个新的promise -->
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

      <!-- reject同理 -->
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

# 亮点优化，性能优化/代码优化化，webpack优化

1. webpack：

- alias: 缓存目录，避免重复寻址；
- **UglifyJsPlugin**: 压缩、混淆代码；**optimize-css-assets-webpack-plugin**: CSS 代码去重；
- 打包分割(Bundle Splitting)：使用 **webpack-bundle-analyzer**: 代码分析，**打包分析**，结合 optimization 里面进行 splitChunks 代码分割；此外，optimization 官网上还有其他优化项，具体项目具体决定 https://webpack.js.org/plugins/split-chunks-plugin/
- **dllPlugin 和 DLLReferencePlugin** 动态链接库，将不变的包打包成静态库，配合 AddAssetHtmlPlugin({ filepath:路径 })插入到 html 中
- 代码分割（Code Splitting）：路由懒加载和按需加载
  1. 使用动态 **import** 或者 require.ensure 语法
  2. 使用 babel-plugin-import 插件按需引入一些组件库
- Tree shaking 摇树，webpack5 内置摇树而且还会对模块内也进行摇树 `usedExports: true`
- 缓存：_Cache-loader_ 或者 _HardSourceWebpackPlugin_,webpack5 不再需要，webpack5 直接可以开启持久性缓存,babel-loader 可以直接加 **cacheDirectory** 缓存下来
- 多核多线程：**threadLoader 和 happypack**
- includes/exclude: 指定搜索范围/排除不必要的搜索范围；alias: 缓存目录，避免重复寻址；
- 按需引入 pollyfill 兼容 API，用 **babel-pollyfill 或者 babel-transform-runtime,**使用和区别看下面解说
- **speed-measure-webpack-plugin** 分析编译具体耗时，打包分析，速度分析
- 分离 css，**purgecss-webpack-plugin 和 mini-css-extract-plugin** 配合使用
- **terser-webpack-plugin** 多进程并行压缩代码，不过没必要单独装，现在 webpack 默认有了
- Module 选项配置 **noParse**，对一些没有 AMD/commonJS 规范的包不进行转化和解析，比如 noParse: /jquery|lodash/
- 使用 **IgnorePlugin** 忽略一些语言包，比如 moment 的本地语言包这些，可以忽略后，按需引入自己需要的语言包
- **Externals**，可将一些 cdn 包直接用外链形式引入
- 生产关闭 source-map
- 使用 **fast-sass-loader** 和 fast-css-loader，fast-sass-loader 原理是去重编译，舍弃 sourceMap 提升性能（因此也不支持@import 语法），fast-css-loader 也是剔除了 sourceMap 以及用正则和一些小技巧来实现 css 解析
- **CompressionWebpackPlugin** 开启 Gzip

1. 工具：

- 用谷歌浏览器的 Lighthouse 先检查网站，先修复减少问题资源大小
- 用谷歌 performance 工具火山图查看性能瓶颈

3. 大小：

- Js 打包，css 压缩，图片压缩，雪碧图，小图用 url-loader 转 base64，nginx 开 gzip,前端 accept-encoding:gzip 允许开启 gzip

4. 缓存：运用浏览器缓存和 cdn，服务端可以用 redis 之类
5. 首屏渲染优化：路由懒加载，服务端渲染，代码分包，骨架屏（HTMLWebpackPlugin 里面可以插入骨架图），css 分离 cssExtract

6. 代码：

- 防抖，节流
- 多用备忘录缓存和策略设计模式编写代码，避免太多 if else
- Css 在头部 head 里面，js 放在 body 后面
- 使用 动画属性 实现动画，动画时脱离文档流，开启硬件加速，优先使用 css 动画；
- 使用 <link> 替代原生 @import；
- 减少重绘与回流:
  - 多次操作合并为一次；
  - 减少对计算属性的访问；
    - 例如 offsetTop， getComputedStyle 等
    - 因为浏览器需要获取最新准确的值，因此必须立即进行重排，这样会破坏了浏览器的队列整合，尽量将值进行缓存使用；
  - 大量操作时，可将 dom 脱离文档流或者隐藏，待操作完成后再重新恢复；
  - 使用 DocumentFragment / cloneNode / replaceChild 进行操作；
- 使用事件委托，避免大量的事件绑定；

# 前端日志监控，异常上报，性能监控

## 日志监控

1. window.onError
2. 跨端脚本无法准确捕获异常
解决方案：对 script 标签增加一个 crossorigin=”anonymous”，并且服务器添加 Access-Control-Allow-Origin。
<script src="http://cdn.xxx.com/index.js" crossorigin="anonymous"></script>
3. 开发环境下开启 source-map 可以定位错误文件
4. Vue 捕获异常
   Vue.config.errorHandler

在 React 中，可以使用 ErrorBoundary 组件包括业务组件的方式进行异常捕获，配合 React 16.0+新出的 componentDidCatch API，可以实现统一的异常捕获和日志上报。

## 性能监控

1. DOMContentLoaded 统计首屏时间
   document.addEventListener('DOMContentLoaded', function() { console.log("DOM 挂载时间: ", Date.now() - timerStart); // 性能日志上报 });
2. window.performance

## 日志上报

- 一种是构造空的 Image 对象的方式，其原因是请求图片并不涉及到跨域的问题；
  var url = 'xxx';
  new Image().src = url;
  复制代码
- 利用 Ajax 上报日志，必须对日志服务器接口开启跨域请求头部 Access-Control-Allow-Origin:\*，这里 Ajax 就并不强制使用 GET 请求了，即可克服 URL 长度限制的问题。
  if (XMLHttpRequest) {
  var xhr = new XMLHttpRequest();
  xhr.open('post', 'https://log.xxx.com', true); // 上报给 node 中间层处理
  xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求头
  xhr.send(JSON.stringify(errorObj)); // 发送参数
  }

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

# 算法相关和数据结构

## 算法复杂度

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-suanfa.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-suanfa.png

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

   ![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-domdiff.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-domdiff.png

## 观察者和发布订阅模式的区别

总体来说很相似，但观察者模式更是我直接观察你，做出响应，而发布订阅模式多需要一个中间代理，我发布事件，代理记录下来，别人订阅触发事件，代理做触发

# http相关

## 网络模型，7层模型，tcp,udp,socket

TCP,UDP 是运输层的(TCP 连接需要保证数据完整性和有序性,UDP 不需要保证完整有序性，只管发送就好)
TCP 拥塞控制
拥塞处理和流量控制不同，后者是作用于接收方，保证接收方来得及接受数据。而前者是作用于网络，防止过多的数据拥塞网络，避免出现网络负载过大的情况。
拥塞处理包括了四个算法，分别为：慢开始（窗口慢慢指数级扩大），拥塞避免（慢慢降低调整窗口），快速重传，快速恢复。

介于运输层和应用层（http 协议）之间的一个抽象接口就是 socket（套接字编程），简单来讲就是一个抽象的说法，用于封装成 api 然后连接两个层的东西

HTTP 是应用层协议，定义的是传输数据的内容的规范，

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/http-modal.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/http-modal.png

## 三次握手，HTTPS握手过程中，客户端如何验证证书的合法性

1. 【你好，我要连接了】客户端使用 https 的 url 访问 web 服务器,要求与服务器建立 ssl 连接
2. 【 你好，我收到了，你可以开始连接了，我把我的认证报文给你，里面有公钥证书】web 服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端
3. 【 好，我确认了证书了，没问题，我也用你的公钥生成了随机秘钥串（pre-master secret 算法生成）给你了，开始连接】客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥，利用公钥将会话秘钥加密, 并传送给服务端
4. 服务端利用自己的私钥解密出会话秘钥，之后服务器与客户端使用秘钥加密传输

## 四次挥手

1. 第一次挥手：【我客户端没有数据要发给你了】客户端发送一个 FIN=M，用来关闭客户端到服务器端的数据传送，客户端进入 FIN_WAIT_1 状态。意思是说"我客户端没有数据要发给你了"，但是如果你服务器端还有数据没有发送完成，则不必急着关闭连接，可以继续发送数据。
2. 第二次挥手：【你的请求我收到了，但是我还没准备好，您等一下】服务器端收到 FIN 后，先发送 ack=M+1，告诉客户端，你的请求我收到了，但是我还没准备好，请继续你等我的消息。这个时候客户端就进入 FIN_WAIT_2 状态，继续等待服务器端的 FIN 报文。
3. 第三次挥手： 【我这边好了，数据也发完了，准备关了】当服务器端确定数据已发送完成，则向客户端发送 FIN=N 报文，告诉客户端，好了，我这边数据发完了，准备好关闭连接了。服务器端进入 LAST_ACK 状态。
4. 第四次挥手：【我不确定你真的关了，所以我试探性发一句再问你关了吗，如果你没回答证明你关了】客户端收到 FIN=N 报文后，就知道可以关闭连接了，但是他还是不相信网络，怕服务器端不知道要关闭，所以发送 ack=N+1 后进入 TIME_WAIT 状态，如果 Server 端没有收到 ACK 则可以重传。服务器端收到 ACK 后，就知道可以断开连接了。客户端等待了 2MSL 后依然没有收到回复，则证明服务器端已正常关闭，那好，我客户端也可以关闭连接了。最终完成了四次握手。

## 中间人攻击过程如下：

1. 服务器向客户端发送公钥。
2. 攻击者截获公钥，保留在自己手上。
3. 然后攻击者自己生成一个【伪造的】公钥，发给客户端。
4. 客户端收到伪造的公钥后，生成加密 hash 值发给服务器。
5. 攻击者获得加密 hash 值，用自己的私钥解密获得真秘钥。
6. 同时生成假的加密 hash 值，发给服务器。
7. 服务器用私钥解密获得假秘钥。
8. 服务器用加秘钥加密传输信息

## http1,http1.1,http2,http1/2

> HTTP1.0 【一个请求就要单独开一条连接，复用极差】

tcp 连接无法复用，因为没有头部标志来源什么的，导致一个网页里面如果有多少请求就会再单独建立多少条 tcp 连接，而不是在一条连接上完成，不支持文件断点传输，效率极差

> HTTP1.1 【keep-alive 开启长连接，然后可以将多请求串一串，一个下载完再去下载下一个】：

Pipeling 解决方式为，若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；支持久连接，HTTP 1.1 在继承了 HTTP 1.0 优点的基础上，也克服了 HTTP 1.0 的性能问题。比如请求头增加 host 字段标志来源，这样就能判断同一页面多个请求都是同一个对象，Connection 请求头的值为 Keep-Alive 时，代表持续连接，连接后不立即关闭，从而实现在复用 tcp 连接，只在一条连接就可以加载完成页面内所有连接，此外 HTTP 1.1 还提供了与身份认证、状态管理和 Cache 缓存等机制相关的请求头和响应头, 一些状态码 404 什么的，一般同域同时请求限制都在 4-10 个

> HTTP2.0 【同一条连接，不像 1.1 那样要一个接一个下载，可以在一条连接上同时多个下载,还有支持服务端推送，首部压缩】

多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；服务端推送，比如在请求 index.html 的时候，服务端会顺便把 index.html 需要的静态资源 main.js 一起返回，首部压缩，减少信息大小

二进制分帧
http2.0 所有数据流都在一个连接通道里，数据会被切分成很多小块，能实现低延迟和高吞吐量，由于单通道去请求数据，所以网络阻塞会小很多，丢包恢复更快

## 网络安全，网络攻击，网络防御

1. xss 攻击

- queryString 进行 urlEncode 处理
- 浏览器默认 x-xss-protection
- CSP(content-security-policy)内容安全协议，只允许加载本站的东西，
  ctx.set('Content-Security-Policy','default-src self')
- 重要的东西进行，比如 cookie setHttpOnly
- 将用户输入以及注入的节点进行特殊符转义，

2. csrf 跨站请求伪造

- 禁止第三方携带 cookie，有兼容性问题所以不推荐
- referrer check, 后端判断请求的 referral
- 验证码
- sessionId 不在 URL 中暴露，仅存在 cookie 中

> Csrf 同源伪造
> 为什么 cookie 可以被 csrf 劫持，而 token 不会
> 简单来说，就是因为 csrf 多是利用 form 进行同源请求的，但这种请求只能携带同源 cookie，不会携带 token，后端接口一般都会根据 token 和 cookie 做对比判断的，如果请求没有 token 自然知道是黑客

1. click injecting(点击劫持，视觉欺诈)

- x-frame-options:设置 SAMEORIGIN 只在同域下可以用 iframe，或者添加域名白名单

4. SQL 注入

- 限制前端数据库操作权限，不用拼接字符串操作数据库
- 后端检查出入数据，正则匹配处理
- 对特殊字符转义，loadash 库都能处理

5. 请求劫持，http 劫持，dns 劫持（直接把你重定向）

- 比如运营商劫持，升级 https

6. DDOS（不是一种攻击，是一类攻击的总称，发生在网络传输各个环节）

- 备份网站
- 用一些高防 ip，比如阿里云之类，服务器，防火墙
- 带宽扩容+cdn

7. HTTP 首部注入

- 在 http 首部通过插入换行符号来伪造 set-cookie 头部

8. 权限控制

- SSO 单点登录
- OAuth 授权
- sessionId 加密处理

## 网络防御，加密算法

1. 设置头部信息

如非必要不开启 CORS
定义详细的白名单，不使用通配符，仅配置所需要的头
配置 Vary: Origin 头部
如非必要不使用 Access-Control-Allow-Credentials
限制缓存的时间

```
res.setHeader({
'Access-Control-Allow-Credentials', 'true'
"Access-Control-Allow-Origin": "http://localhost:3000",
"Access-Control-Allow-Headers": "X-Token,Content-Type",
"Access-Control-Allow-Methods": "PUT"
})
```

2. 密码安全

- 用 crypto, 分 md5 加密和 sha1 加密（md5 本来是不能反推的，但可以用彩虹表来收集所有简单的密码，从而反推出来，加盐可以防止被破解）
- 人机检测

```
const crypto = require('crypto')
const hash = (type, str) => crypto.createHash(type).update(str).digest('hex')

const md5 = str => hash('md5',str)
const sha1 = str => hash('sha1',str)
<!-- 加盐 -->
const encryptPassword = (salt, password) => md5(salt + 'abced@#4@%#$7' + password)
const psw = '11111'
console.log('md5', md5(psw))
console.log('sha1', sha1(psw))
module.exports = encryptPassword

```

2. 密码学

- 对称算法
  DES 拿到钥匙即可破解，所以单纯的对称加密不安全，通常都是对对称加密的秘钥进行非对称加密，然后给别人
- 非对称
  1. RSA（大质数），背包算法，Rabin,D-H,ECC(比特币的椭圆曲线加密)
  2. 公钥和私钥，公钥加密，私钥解密，私钥无法解开说明公钥无效 （抗抵赖，计算复杂，性能比对称算法慢几倍）
- 摘要算法（哈希算法）sha1,md5

3. 传输安全 https = http + ssl 购买证书
4. Node.js 安全框架
   koa-helmet 给网址加头盔

```
  参数出现在HTML内容或属性浏览器会拦截
  ctx.set('X-XSS-Protection', 1) // 默认开启，会开启现代浏览器对跨站脚本的过滤
  ctx.set('Content-Security-Policy', "default-src 'self'")  // 只信任同源的网站，防止受到跨站脚本攻击
  ctx.set('X-FRAME-OPTIONS', 'DENY')  // 防止点击劫持
  指定content-type明确返回类型，防止浏览器使用MIME=sniffing来确定响应的类型

```

5. CSP 策略
   设置 default-src,img-src，connect-src,child-crc,script-src 等的安全性

## 返回头

1. 通用字段名

- Cache-Control（控制缓存行为: Cache-control 和 Expires 强制控制缓存时间
- Connection（逐跳首部、连接的管理）: Keep-Alive 保持长连接
- Date（创建报文的日期时间）
- Pragma（报文指令）: no-cache，那时 cache-control 还没出来，就用这个
- Transfer-Encoding（指定报文传输主体的编码方式）
- Upgrade（升级为其他协议）
- Via（走过哪些代理器）
- Warning（错误通知）

2. 请求首部字段，请求头

- Accept（用户代理可以处理的媒体类型）
- Accept-Charset（优先的字符集）
- Accept-Encoding（优先的内容编码）：gzip, deflate, cpmpress, identity,最左边优先级越高
- Authorization（Web 认证信息）
- if-Match（比较实体标记（ETag））：强缓存失效后直接用协商缓存，etag + if-no-match 优先级 > if-Modified-Since + Last-Modified
- if-Modified-Since（比较资源的更新时间）
- User-Agent（客户端的信息）
- Range（实体的字节范围请求）： <unit>=<range-start>-<range-end>, <range-start>-<range-end>
- Referer（来源）
- TE（传输编码的优先级）
- Except（期待服务器的特定行为）
- Host

3. 响应头

- Accept-Ranges（是否接受字节范围请求）：none | bytes
- ETag（资源的匹配信息）
- Age（推算资源创建经过的时间）
- Location（令客户端重定向至指定 UPI）
- Proxy-Authenticate（代理服务器对客户端的认证信息）
- WWW-Authenticate（服务器对客户端的认证信息）
- Server（HTTP 服务器的安装信息）
- Vary（代理服务器的管理信息）：简单来说就是可以使代理服务器更智能，更加容易区分哪些请求是可以直接从代理服务器自己这里返回的而不用每次都到源服务器那里去，假设 vary: Accept-Encoding,代表着如果下次客户端请求还是有带这个 Accept-Encoding 头的，直接代理服务器自己返回

4. 实体首部，实体头

- Allow（资源可支持的 HTTP 方法）
- Content-Type（实体主体的媒体类型）
- Expires（实体主体过期的日期时间）
- Last-Modified（资源的最后修改日期时间）
- Content-Encoding（实体主体适用的编码方式）
- Content-Language
- Content-Length
- Content-Location（替代对应资源的 URI）
- Content-MD5（实体主体的报文摘要）
- Content-Range（实体主体的位置范围）

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

## 301和302

http 状态码 301 永久重定向，302 临时重定向
301 重定向是永久的重定向，a 到 b, 搜索引擎抓取的地址和内容会完全变成 b
302 重定向只是暂时的重定向，a 到 b，搜索引擎识别的是旧地址，但内容是新地址的内容，即会认为链接是 a，但内容是 b 的内容

## GET和POST有什么区别？

- GET 请求在浏览器回退和刷新时是无害的，而 POST 请求会告知用户数据会被重新提交；
- GET 请求可以收藏为书签，POST 请求不可以收藏为书签；
- GET 请求可以被缓存，POST 请求不可以被缓存，除非在响应头中包含合适的 Cache-Control/Expires 字段，但是不建议缓存 POST 请求，其不满足幂等性，每次调用都会对服务器资源造成影响；
- GET 请求一般不具有请求体，因此只能进行 url 编码，而 POST 请求支持多种编码方式。
- GET 请求的参数可以被保留在浏览器的历史中，POST 请求不会被保留；
- GET 请求因为是向 URL 添加数据，不同的浏览器厂商，代理服务器，web 服务器都可能会有自己的长度限制，而 POST 请求无长度限制；
  (7) GET 请求只允许 ASCII 字符，POST 请求无限制，支持二进制数据；
  (8) GET 请求的安全性较差，数据被暴露在浏览器的 URL 中，所以不能用来传递敏感信息，POST 请求的安全性较好，数据不会暴露在 URL 中；
  (9) GET 请求具有幂等性(多次请求不会对资源造成影响)，POST 请求不幂等；
  (10) GET 请求一般不具有请求体，请求中一般不包含 100-continue 协议，所以只会发一次请求，而 POST 请求在发送数据到服务端之前允许双方"握手"，客户端先发送 Expect:100-continue 消息，询问服务端是否愿意接收数据，接收到服务端正确的 100-continue 应答后才会将请求体发送给服务端，服务端再响应 200 返回数据。（幂等的概念是指同⼀个请求⽅法执⾏多次和仅执⾏⼀次的效果完全相同），⽽ POST 是⾮安全⾮幂等

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

# 文件上传，断点上传，分片上传，断点传输

https://juejin.im/post/5da14778f265da5bb628e590

- 文件上传原理
- 最原始的文件上传
- 使用 koa2 作为服务端写一个文件上传接口
- 单文件上传和上传进度
- 多文件上传和上传进度
- 拖拽上传
- 剪贴板上传
- 大文件上传之分片上传
- 大文件上传之断点续传
- node 端文件上传

1. 分片+stream 传输，维护一个分片列表
2. 断点续传+文件秒传
3. 抽样计算整个文件 hash，防止文件重复，为了文件秒传做基础
4. 分片都传输成功后，以追加方式合并流文件

# 老码农的心得

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

## 为什么for性能高于forEach

- for 循环没有任何额外的函数调用栈和上下文；
- forEach 函数签名实际上是
  array.forEach(function(currentValue, index, arr), thisValue)
  它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；

## 跨页面通信方式

1. window.open window.postMessage
2. websocket
3. Service worker
4. localStorage window.onstorage
5. shared Worker, indexedDB, cookie 用 setInterval 轮询

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

## 为什么for性能高于forEach

- for 循环没有任何额外的函数调用栈和上下文；
- forEach 函数签名实际上是
  array.forEach(function(currentValue, index, arr), thisValue)
  它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能

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

null 和 undefined 和谁 == 都是 false，除了 null == undefined :true,这个比较特殊，不过 null === undefined 为 false

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
这份 rem.js 可以完美兼容所有的机型，如果是简易版计算字体大小的话，会出现一些系统字体设置到从而带来的问题

```
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport">
<meta content="telephone=no" name="format-detection">
<script>
!(function(doc, win, designWidth, rem2px) {
  var docEl = doc.documentElement,
    defaultFontSize = adapt(designWidth, rem2px),
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth =
        win.innerWidth ||
        doc.documentElement.clientWidth ||
        doc.body.clientWidth
      if (!clientWidth) return
      if (clientWidth < 750) {
        docEl.style.fontSize =
          (((clientWidth / designWidth) * rem2px) / defaultFontSize) * 100 + '%'
      } else {
        docEl.style.fontSize = '625%'
      }
    }
  if (!doc.addEventListener) return
  recalc()
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
  function adapt(designWidth, rem2px) {
    var d = window.document.createElement('div')
    d.style.width = '1rem'
    d.style.display = 'none'
    var head = window.document.getElementsByTagName('head')[0]
    head.appendChild(d)
    var defaultFontSize = parseFloat(
      window.getComputedStyle(d, null).getPropertyValue('width')
    )
    return defaultFontSize
  }
})(document, window, 750, 100)
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
![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/jsonp.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/jsonp.png

## 模块化发展amd,cmd,commonjs,esmodule

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-module.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-module.png

- commonJs node.js 的规范，require，同步的，会阻塞
- amd 规范 代表：requireJs 异步的 require 请求，可以并行加载多个文件，
- umd 兼容 amd 和 comonjs 的语法
- cmd 规范 代表：seaJs， 支持动态引入依赖文件
- es6 模块化规范 import，export

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

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-cache.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-cache.png

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

## addEventListener第三个参数,addEventlistenter相关，capture，事件捕获，冒泡

https://www.jianshu.com/p/9a75744b523d

- 事件模型：
  **开始捕获** window -> document -> documentElement -> body -> wrapper -> 目标 **开始冒泡** -> wrapper -> body -> documentElement -> document -> window
  每次点击每个元素都会经历捕获和冒泡两个阶段，addEventListener 第三个参数默认都是 false，将事件绑在冒泡阶段运行，低版本 ie 没 addEventListener，有 attachEvent，attachEvent 不能指定绑定事件发生在捕获阶段还是冒泡阶段

- addEventListener 第三个参数默认 false 冒泡，设置为 true 就捕获阶段执行，
  也可以是一个对象，三个默认都是 false，{ capture:是不是在捕获阶段就执行, once 是不是只执行一次，passive 是不是一定会触发浏览器默认事件，比如滚动 }
  **节点可以同时设置两个事件，addEventListener true 和 false，来设置捕获和冒泡阶段的事件**
  passive 为 true 时才有意义，可以保证穿透，禁止一切 preventDefault 事件，chrom 为了性能，在 touchstart，touchmove 针对 window,document,document.body 设置为 true，因为 dom 渲染可能会触发 preventDefault 来阻塞渲染进程，设置为 true 的话就保证滑动不会被打断

- e.stopPropagation()阻止事件传播，
  既可以是在冒泡阶段，也可以是在捕获阶段.e.stopPropagation()很少用到在捕获阶段去阻止事件的传播，大家就以为 e.stopPropagation()只能阻止事件在冒泡阶段传播。

- e.preventDefault()可以阻止事件的默认行为发生，
  默认行为是指：点击 a 标签就转跳到其他页面、拖拽一个图片到浏览器会自动打开、点击表单的提交按钮会提交表单等等，因为有的时候我们并不希望发生这些事情，所以需要阻止默认行为。

## hybrid

https://juejin.im/post/5cc26dfef265da037b611738#heading-7

## 1px问题

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-1px.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-1px.png

box-shadow
0 -1px 1px -1px #e5e5e5, //上边线
1px 0 1px -1px #e5e5e5, //右边线
0 1px 1px -1px #e5e5e5, //下边线
-1px 0 1px -1px #e5e5e5; //左边线

## Ts工具,ts实用工具

http://www.typescriptlang.org/docs/handbook/utility-types.html#partialt

- Partial<T>
- Readonly<T>
- Record<K,T>
- Pick<T,K>
- Omit<T,K>
- Exclude<T,U>
- Extract<T,U>
- NonNullable<T>
- Parameters<T>
- ConstructorParameters<T>
- ReturnType<T>
- InstanceType<T>
- Required<T>
- ThisParameterType
- OmitThisParameter
- ThisType<T>

## 栈模拟队列，队列模拟栈

1. 栈模拟队列
   两个栈 stack1,stack2
   入队在 stack1，出队在 stack2。如果入队时 stack2 不为空，那么 stack2 必须先清空（数据转移至 stack1）。如果出队时 stack2 不为空，直接出栈。如果 stack2 为空，则需要把 stack1 中的数据全部转移到 stack2 中
2. 队列模拟栈
   两个队列 q1，q2
   入栈在 q1,。q2 作为一个缓冲队列。
   出栈时，将 q1 除最后一个外，全部入队列 q2。q1 出队即是出栈。

## Mvvm，mvc区别

mvc 下，视图只是视图，视图的更新渲染什么都交给 controller 层去做，controller 层是承上启下的作用，是单向的，这会造成 controller 层很庞大冗余
mvvm 下，m 还是模型，v 还是视图，vm 视图模型是中间桥梁，它有两个作用，一是将模型转为视图，即将后端数据进行数据绑定变成视图，二是将视图转为模型，比如输入框输入的值通过双向绑定改变值，这就是双向绑定，mvvm 下是双向的

## 为什么要用transform而不用margin

transform 不会发生重绘，是用重新复合生成一个新的帧，而 margin 会，比较耗性能

## Href和src的区别

Href 只是代表文件内关联关系，src 则是加载目标资源，会卡住进程直至下载完

## Position相关，布局相关

1. position: static
   static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性。
2. position: relative
   relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。
3. position: absolute
   absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：

- 设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者 absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素。
- 如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位。

3. position: fixed
   可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。
4. inherit
   继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性。
5. Sticky
   position 属性中最有意思的就是 sticky 了，设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。

## 前端如何进行seo优化

- 合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可；description 把页面内容高度概括，不可过分堆砌关键词；keywords 列举出重要关键词。
- 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页
- 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，保证重要内容一定会被抓取
- 重要内容不要用 js 输出：爬虫不会执行 js 获取内容
- 少用 iframe：搜索引擎不会抓取 iframe 中的内容
- 非装饰性图片必须加 alt
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标

## eslint

1. 配置 eslint-loader

```
{
test: /\.(js|vue)$/,
loader: 'eslint-loader',
enforce: 'pre',
include: [resolve('src')],
options: {
formatter: require('eslint-friendly-formatter')
}
},
```

2. 新建.eslintrc.js

```
module.exports = {
  root: true,
  // 改版解析规则应该这样配置
  parserOptions: {
    parser: "babel-eslint"
  },
  // 在Vue项目里面要配置Vue的lint插件，单纯配standard是不足够的，会解析不了vue文件
  extends: ["plugin:vue/essential", "standard"],
  // 配置需要检查的文件，需要安装对应的插件，跟着提示来就可以了
  plugins: ["html", "vue"],
  rules: {
    // 自定义个别规则写在这，0忽略，1警告，2报错
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // 方法名和括号之前不需要空格
    "space-before-function-paren": 0,
    // 将”未使用的变量“调整为警告级别，原为错误级别，更多规则请看官网
    "no-unused-vars": 1,
    // 结尾是不是要分号
    semi: ["error", "never"],
    // 单引号还是双引号
    quotes: ["error", "double"]
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    // "no-console": ["off"],
    // curly: ["error"],
    // "no-floating-decimal": ["error"],
    // "no-undef": ["error"],
    // "no-unused-vars": [
    //   "error",
    //   {
    //     vars: "local",
    //     args: "none"
    //   }
    // ],
    // "no-var": "error",
    // indent: [
    //   "error",
    //   4,
    //   {
    //     SwitchCase: 1
    //   }
    // ],
    // "comma-dangle": ["error", "never"],

    // "brace-style": [
    //   "error",
    //   "1tbs",
    //   {
    //     allowSingleLine: true
    //   }
    // ],
    // "array-bracket-spacing": ["error", "never"],
    // "block-spacing": ["error", "always"],
    // "arrow-parens": ["error", "always"],
    // "arrow-spacing": [
    //   "error",
    //   {
    //     before: true,
    //     after: true
    //   }
    // ],
    // "no-duplicate-imports": [
    //   "error",
    //   {
    //     includeExports: true
    //   }
    // ],
    // "space-in-parens": ["error", "never"],
    // "quote-props": ["error", "as-needed"],
    // "keyword-spacing": [
    //   "error",
    //   {
    //     before: true,
    //     after: true
    //   }
    // ],
    // "key-spacing": ["error"]
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    worker: true,
    mocha: true,
    phantomjs: true,
    serviceworker: true
  }
}

```

3. 安装提示要安装的插件，然后加上修复 lint 命令

```
"lint": "eslint --fix --ext .js,.vue src”

"eslint": "^7.0.0",
"eslint-config-standard": "^14.1.1",
"eslint-friendly-formatter": "^4.0.1",
"eslint-loader": "^4.0.2",
"eslint-plugin-html": "^6.0.2",
"eslint-plugin-import": "^2.20.2",
"eslint-plugin-node": "^11.1.0",
"eslint-plugin-promise": "^4.2.1",
"eslint-plugin-standard": "^4.0.1",
"eslint-plugin-vue": "^6.2.2",
```

## 短路求值，不利用第三个值来交换值

- 短路求值 arr.push(item || (item=666))
- 取整,|0 即可 `let val = 1.12312|0`
- 不利用第三个值来交换两个值

```
let num1 = 5,num2 = 6
<!-- 利用数组来换值 -->
num1 = [num2, num2 = num1][0]
```

## 图片二值化，图形算法，正片叠底

```
<canvas id="canvas"></canvas>
<img class="img-test" ref="imgNode" id="img" src="./icon-aalp.png" />

window.onload = () => {
  var canvas = document.getElementById("canvas")
  var c = canvas.getContext("2d")
  let imgNode = this.$refs.imgNode
  canvas.width = imgNode.width
  canvas.height = imgNode.height
  c.drawImage(imgNode, 0, 0, canvas.width, canvas.height)
  showInfo(c)
}

function showInfo(c) {
  var imgData = c.getImageData(0, 0, canvas.width, canvas.height)
  console.log("showInfo -> imgData", imgData)
  var index = 255 / 2 //阈值
  for (var i = 0; i < imgData.data.length; i += 4) {
    var R = imgData.data[i] //R(0-255)
    var G = imgData.data[i + 1] //G(0-255)
    var B = imgData.data[i + 2] //B(0-255)
    var Alpha = imgData.data[i + 3] //Alpha(0-255)
    var sum = (R + G + B) / 3
    if (Alpha === 0) {
      continue
    }
    if (sum < index) {
      imgData.data[i] = 132
      imgData.data[i + 1] = 123
      imgData.data[i + 2] = 178
      imgData.data[i + 3] = Alpha
    } else {
      imgData.data[i] = 0
      imgData.data[i + 1] = 0
      imgData.data[i + 2] = 0
      imgData.data[i + 3] = 0
    }
  }
  c.putImageData(imgData, 0, 0)
}
```

## 阻止页面滚动

```
shouldPageScroll(can = true) {
  if (can) {
    document.body.removeEventListener('touchmove', this.preventDefultScroll)
  } else {
    document.body.addEventListener('touchmove', this.preventDefultScroll, {
      passive: false
    })
  }
}
```

## 移动端初始化样式，完美阻止ios回弹效果，inobounce

**最佳实践是方案一和方案二一起使用，可以解决所有 ios 机型的回弹以及滚动之类的问题**

1. 方案一：使用 inobounce,inobounce 会禁用掉 ios 的回弹，但也意味着整个页面不能滑动，如果需要滑动的页面，则需要对滚动区域设置固定的高度，即 height、max-height，同时也要设置 overflow: auto，实现页面滑动。为防止 iOS 端页面滚动发生卡顿现象，需要对滚动区域设置 -webkit-overflow-scrolling: touch 属性

https://zhuanlan.zhihu.com/p/142216988?from_voters_page=true

2. 方案二（推荐）： body 设置为相对布局

```
<body>
    <!-- 内容区 -->
    <div id="app"></div>
</body>

/* 基本样式 */
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  box-sizing: border-box;
  position: relative;
}
/* 超出滚动 */
#app {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

子页面用全屏类

.full-page {
  // 正常情况可以滚动，而且高度是自动扩充的，不会像100vh一样出现下面多出一点的情况
  width: 100%;
  min-height: 100%;
  background: white;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  overflow: auto;
  // 禁止滑动
  &.full-noscroll {
    overflow: hidden;
  }
  // 给定的高度，在容器内可以滚动，但切记要给容器添加一个最小高度
  &.full-overscroll {
    overflow: scroll;
    -webkit-overflow-scrolling: auto !important; // 设置为auto的话可以用来解决ios下position:fixed的一些元素的定位问题
  }
}
```

## sass循环

```
@for $i from 1 through 4 {
  @for $j from 1 through 7 {
    &_#{$i}_#{$j} {
      bottom: $i + rem;
      left: $j + rem;
    }
  }
}
```

## 动态挂载节点,动态添加节点，js创建节点

- 第一种，直接用 render 渲染组件

```
export default function(Component, props) {
  const instance = new Vue({
      render(h) {
          return h(Component, {props})
      }
  }).$mount();
  // 将生成dom元素追加至body
  document.body.appendChild(instance.$el);
  const comp = instance.$children[0];
  comp.remove = () => {
      // 从body中移除dom
      document.body.removeChild(instance.$el);
      instance.$destroy();
  }
  return comp;
}

```

- 第二种 new Vue.extend({})

```
const Modal = Vue.extend({
template:
  "<baseLogin v-model='showLogin' :redirectUrl='redirectUrl'></baseLogin>",
components: { baseLogin },
data() {
  return {
    showLogin: false,
    redirectUrl: redirect
  }
},
methods: {}
})
this._phoneLoginModalDom = new Modal({ el, store, router })
```

<!-- endhejie -->

# webpack相关

## 常用插件

- ProvidePlugin: 自动加载模块；
- html-webpack-plugin: 加载 html 文件，并引入 css / js 文件；
- extract-text-webpack-plugin / mini-css-extract-plugin: 抽离样式，生成 css 文件；
- DefinePlugin: 定义全局变量；
- compression-webpack-plugin: 使用 gzip 压缩 js 和 css；
- EnvironmentPlugin: 定义环境变量

## 自定义loader

Schema-utils 校验入参，loderUtils 获取 loader 的 options 参数

```
const loaderUtils = require("loader-utils")
const schemaValidata = require("schema-utils")

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string"
    }
  }
}

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  schemaValidata(schema, options)
  return source.replace(/World/g, options.name)

  <!-- 直接return source是同步的操作同步的返回，如果要支持异步的话可以以回调的方式调用 -->
  let _res = transform(source)
  <!-- 第一种，异步loader，someAsyncOperation是webpack自带的函数，可以直接调用 -->
  someAsyncOperation(null, function(err,res){
    callback(null,_res,sourceMap)
  })
  <!-- 第二种，同步形式返回，加上sourceMap -->
  this.callback(null,_res,sourceMap)
  <!-- 第三种，单纯同步返回处理后的语言 -->
  return _res
}

使用：
test: /\.(mov|mp4)$/,
use: [{
  loader: 'file-loader',
  options: {
    name: utils.assetsPath('img/[name].[ext]')
  }
}],

```

test: /[\\/]node_modules[\\/]/,
// 当 webpack 处理文件路径时，它们始终包含/在 Unix 系统和\Windows 上。这就是为什么[\\/]在{cacheGroup}
// .test 字段中使用 in 来表示路径分隔符的原因。/ 或\in { cacheGroup }.test 会在跨平台使用时引起问题。

## webpack原理，实现webpack

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/webpack-study.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/webpack-study.png

## 自定义插件，自定义plugin

插件系统是 Webpack 成功的一个关键性因素。在编译的整个生命周期中，Webpack 会触发许多事件钩子，Plugin 可以监听这些事件，根据需求在相应的时间点对打包内容进行定向的修改。

```

1. 一个最简单的 plugin 是这样的:
class Plugin{
   // 注册插件时，会调用 apply 方法
   // apply 方法接收 compiler 对象
   // 通过 compiler 上提供的 Api，可以对事件进行监听，执行相应的操作
   apply(compiler){
     compiler.hooks钩子有几个常用的，emit（即将打包），compile（编译中）,done(已经打包完成)
     compiler.plugin('done',compilation[编译结果] => {})

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

## 匹配文件夹下所有特定后缀的文件，webpackCopy复制前先压缩所有的js

chainWebpack 中有时会有一种场景，比如复制前先压缩所有特定文件夹下的 js 文件，可用**代替所有子目录，
skeleton/**/\*.js 代表匹配所有 skeleton 文件夹下所有的 js 文件

```
// 复制静态骨架屏的文件前先进行压缩
config.plugin('copy').tap(args => {
  args[0][0].ignore.push('skeleton/**/*.js')
  args[0].push({
    from: resolve('public/skeleton/**/*.js'),
    to: resolve('dist/'),
    context: 'public/',
    ignore: ['.DS_Store'],
    transform: function(content) {
      return Uglify.minify(content.toString()).code //压缩js文件
    }
  })
  return args
})
```

## Webpack热更新

1. 当修改了一个或多个文件； 2.文件系统接收更改并通知 webpack；
2. webpack 重新编译构建一个或多个模块，并通知 HMR 服务器进行更新；
3. HMR Server 使用 webSocket 通知 HMR runtime 需要更新，HMR 运行时通过 HTTP 请求更新 jsonp；
4. HMR 运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

## babel-pollyfill和babel-transform-runtime区别

pollyfill：优点全局受用，新增属性会作用在原型链上，全能，能避免一些不必要的错误，不过比较大
Babel-transform-runtime: 按需动态引入，比较小，不过不会污染全局，不会影响原型

pollyfill 使用：
第一种：entry: ["babel-polyfill", './src/app.js’]，然后 index.js import 'babel-polyfill’
第二种：.babelrc 里面配置
transform-runtime 使用：

1. 引入 babel-plugin-tranform-runtime 包；
2. 在.babelrc 文件 plugins 中添加 babel-plugin-tranform-runtime: "plugins": ["transform-runtime"];

## import和require的区别

我们知道 import 跟 require 的区别是，import 是动态加载只有在用到的时候才会去加载，而 require 只要声明了就会加载，webpack 遇到了 require 就会把它当成一个模块加载到 bundle 的依赖里

## webpack优化

https://webpack.js.org/configuration/optimization/#optimizationusedexports
![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/webpack-optimize.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/webpack-optimize.png

## Webpack5和webpack4的区别

webpack5 做了哪些事情？

- 使用长期缓存提升编译速度
- 使用更好的算法和默认值来改善长期缓存
- 通过更好的 Tree Shaking 和 Code Generation 来改善 bundle 大小
- 重构内部结构，在不引入任何重大更改的情况下实现 v4 的功能
- 通过引入重大更改来为将来的功能做准备，以使我们能够尽可能长时间地使用 v5

1. 不再需要 cache-loader,使用持久性缓存，持久性缓存用法和 cacheDirectory 相同

```
const path = require('path');

module.exports = {
  //...
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache')
  }
};

```

2. 动态加载的文件有名字而不再是一串 id
3. 自动 tree-shaking
4. 模块内部也会 tree-shaking
5. 可以根据不同文件分别设置 splitChunks 打包的大小，默认情况下值针对 js 包进行打包分离
6. webpack5 提供了两种缓存方式，一种是持久缓存将文件缓存在文件系统，另一种是缓存在内存里
7. 还有很多，具体看https://github.com/webpack/changelog-v5/blob/master/README.md7

# Node相关

## V8的垃圾回收机制，内存机制，内存相关

V8 的内存图内存机制,主要将内存分为新生代和老生代两代。新生代中的对象存活时间较短的对象，老生代中的对象存活时间较长，或常驻内存的对象。

【 新生代内存空间： semi space (from) | semi space(to) | 老生代内存空间：---------- 】

总的内存，64 位是 1.4GB，32 位是 0.7G
64 位下新生代 64MB,老生代 1400MB
32 位下新生代 16MB,老生代 700MB

> 为什么内存不设置大一点呢？
>
> 1. js 设计是在浏览器上跑的，浏览器的 js 不持久，1.4G 完全够用
> 2. js 回收垃圾的时候，会暂停所有代码的执行，如果加大的话，回收垃圾的时候会影响代码的执行

> 回收算法

1. 新生代的回收算法
   新生代采用 Scavenge 算法进行垃圾回收，将内存一分为二，分为 from(使用中)，to（闲置）两部分，
   每次回收时复制 from 里面活的对象到 to 中，把 from 的东西都搞掉，下次循环，把 to 和 from 空间交换

简单来说这种分区的算法就是，我只管拿出活的到新区，然后另一个区全搞掉，这种算法牺牲空间换时间
假设如果不采用这种分区的方法，直接采用一个区，那么我保留活的只搞死的，那么我还要整理磁盘碎片空间，就比较耗时间

2. 老生代采用标记清除算法
   遍历标记活的值，只清理死的对象
   简单来说，老生代用的就是上面提及过的如果新生代不用分区的那种方法
   问题：标记清除算法会带来内存碎片问题，解决的方法是每次标记死亡后，将活的对象往一端靠拢，然后清掉外面没用的值

闭包和全局变量会造成 v8 无法立即回收内存

常见内存泄漏原因以及排查方法
闭包，全局变量，node 的事件监听，当同一个事件重复监听忘记移除时会出现，排查：尽可能模拟排查，实在不行可以用 heapdump 保存内存快照排查

> 什么时候放在老生代什么时候放在新生代
> 新变量是放在新生代的，假设 b 变量成功存活了，被复制到 to 里面了，久而久之，to 空间超过 25%了不能再放进来，再新来的变量，如果是有资格的可以存活的话，就会进入老生代

> V8 是如何处理变量的，如何标记的

1. 局部变量当程序执行结束是，且没有引用的话就会随着一起消失
2.

## node单线程，node特性，事件驱动，非阻塞I/O

Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
Node.js 几乎每一个 API 都是支持回调函数的。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个 while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

node 单线程
特性：事件驱动（event loop）非阻塞 I/O
Js 都是单线程的，node 也是单线程的，只是底层还是多线程 I/O 实现非阻塞的，同时，也支持 cluster 多核多进程处理，但多进程处理的话有一个问题，每个进程都是相互独立的，这也就意味着 token 什么的不能放在内存中而应该在 redis 里面，因为每个进程相互独立，内存自然不能共享

## node的readFile和readFileSync的区别

node 的所有方法都有自带的普通的异步和 Sync 后缀的同步的写法，同步的写法需要 try catch 捕获错误

```
异步写法：
readFile(file,(err, data) => {
   if (err) {
   } else {

   }
})
同步写法
try {
   const content = fs.readFileSync(filepath);
} catch(err) {

}

```

## fs和fs-extra

fs-extra 包含 fs 所有功能，封装成 promise 形式的，同时还扩展了一些新功能
copy
emptyDir
ensureFile
ensureDir
ensureLink
ensureSymlink
mkdirp
mkdirs
move
outputFile
outputJson
pathExists
readJson
remove
writeJson

## node实现多进程

我们都知道 Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：child.stdin, child.stdout 和 child.stderr。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。

Node 提供了 child_process 模块来创建子进程，方法有：

- child_process.spawn()： child_process.spawn 使用指定的命令行参数创建新进程，spawn()与 exec()、execFile()不同的是，后两者创建时可以指定 timeout 属性设置超时时间，一旦创建的进程超过设定的时间就会被杀死
- child_process.fork(): child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。与 spawn 方法不同的是，fork 会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。(注：通过 fork()复制的进程都是独立的进程，内存不共享，有着全新的 V8 实例)
- child_process.exec(): 启动一个子进程来执行命令，与 spawn()不同的是其接口不同，它有一个回调函数获知子进程的状况
- child_process.execFlie(): 启动一个子进程来执行可执行文件，exec()与 execFile()不同的是，exec()适合执行已有命令，execFile()适合执行文件。
- 用 pm2 实现

PM2 本质上还是用的原生的这些，只是内置了处理上述的逻辑，你不用再写这么多繁琐的代码了。
只需这样一行：
\$ pm2 start app.js -I 4
如果有任何工作线程意外挂掉了，PM2 会立即重启他们，当前你可以在任何时候重启，只需 pm2 restart all
pm2 scale app +3 会在当前基础上加 3 个工作线程
Pm2 restart app 名字，可以保证程序永不停止

fork

```

var cluster = require('cluster');
var http = require('http');
var os = require('os');

var numCPUs = os.cpus().length;

if (cluster.isMaster) {
for (var i = 0; i < numCPUs; ++i) {
cluster.fork();
}
} else {
http.createServer(function(req, res) {
res.writeHead(200);
res.end("hello world");
}).listen(8080);
}

```

## node进程间通信

node 多进程状态共享，数据共享
可以主进程 send 消息，然后 cluster 的进程 on 监听消息

```

process.send({ cmd: 'notifyRequest' });
worker_process.on('message', function(msg) {
if (msg.cmd && msg.cmd == 'notifyRequest') {
data++;
console.log('DATA VALUE : %d ', data);
}
});

```

## exports.xxx=xxx和Module.exports={}有什么区别吗

结论 如果要输出一个键值对象{}，可以利用 exports 这个已存在的空对象{}，并继续在上面添加新的键值； 如果要输出一个函数或数组，必须直接对 module.exports 对象赋值。 所以我们可以得出结论：直接对 module.exports 赋值，可以应对任何情况

## Nodejs加载模块机制

编译：
js 文件。通过 fs 模块同步读取文件后编译执行。
node 文件。这是用 C/C++编写的扩展文件，通过 dlopen()方法加载最后编译生成的文件。
json 文件。通过 fs 模块同步读取文件后，用 JSON.parse()解析返回结果。
其余扩展名文件，它们都被当成.js 文件载入。
每一个编译并执行成功的模块都会将其完整文件路径为索引缓存在 Module.\_cache 对象上，以提高二次引入的性能。

模块加载：

1.  首先从缓存上找
2.  沿路径向上逐级递归 node_modules 目录，直到根目录下的 node_modules 目录。
3.  Node 会按.js、.node、.json 的顺序补全扩展名，依次尝试。在传递给 require()的标识符中带上扩展名会快一些。另一个小诀窍，同步配合缓存，可以大幅度缓解 Node 单线程中阻塞性调用的缺陷。
4.  在分析标识符的过程中，require()通过分析文件扩展名之后，可能没有查找到对应的文件，但却得到一个目录，这是很常见的事，此时 Node 会将目录当做一个包来处理。包处理的话首先会到 package.json 里面用 json.parse 去解析，然后找入口，如果没有 package.json 或者出错，则找它的 index.js，index.node，index.json，如果还是没有找到就找下一个，到最后全部遍历完后没找到就抛错

## node调用java,node调用接口

1. 直接调用后端 java 接口进行操作，然后回调里面操作
2. RPC 同步调用（远程进程调用）实时性高
   Rpc:dubbo

Node.js 如何通过 Dubbo 调用 Java

Node 这边通过 dubbo 调用 Java 的 provider 的接口，我们尝试调用了几个包：sofa-rpc-node，node-zookeeper-dubbo，和 dubbo2.js 。 其中 sofa-rpc-node 的对使用 egg.js 框架的比较友好，node-zookeeper-dubbo 使用起来跟 sofa-rpc-node 差不多；但是有点麻烦的就是这两个包都需要写 proto3 的接口定义。 而 dubbo2.js 则比较方便，以下是使用 dubbo2.js 的示列

```

const { Dubbo, java, setting } = require('dubbo2.js')
const interfaceName = 'com.dubbo.learn.dubbo.TestProviderService'
const interfaceVersion = '1.0.0'
const dubboSetting = setting.match(
interfaceName, { version: interfaceVersion }
)
const dubboService = dubbo => dubbo.proxyService({
dubboInterface: interfaceName,
version: '1.0.0',
methods: {
Hello (who) {
return [
java.String(who)
]
}
}
})
const service = {dubboService}

// 实例化 Dubbo， 入参主要是名称和 dubbo 接口的设置
const dubbo = new Dubbo({
application: {name: 'dubbo-node-test'},
register: '127.0.0.1:2181',
dubboSetting,
service
})
module.exports = dubbo

```

代码就是这么简单， 把 Java 服务里面通过 dubbo 提供出来的接口(包括接口名，接口版本信息，接口方法) 注册一下。 得到 Dubbo 实例之后，调用对应的 service 就可以使用。 如下：
await dubbo.service.dubboService.Hello(who)
我们简单写了一个接口：

```

const KoaRouter = require('koa-router')
const dubbo = require('./dubbo')
const router = new KoaRouter({prefix: '/api/v1'})

router.use('/')

router.get('/testNodeDubbo', async (ctx, next) => {
console.info(`[testNodeDubbo]:==:> start`)
let {who} = ctx.request.query
const res = await dubbo.service.dubboService.Hello(who)
ctx.body = res
})

```

## 使用过的koa中间件

koa.js 并没有内置 Request Body 的解析器，当我们需要解析请求体时需要加载额外的中间件，官方提供的 koa-bodyparser 是个很不错的选择，支持 x-www-form-urlencoded, application/json 等格式的请求体，但不支持 form-data 的请求体，需要借助 formidable 这个库，也可以直接使用 koa-body 或 koa-better-body
Koa-views 支持模板引擎
Koa-session
Koa-helmet 增加头盔
Koa-compress 类 gzip 一样的压缩
koa-convert 用来兼容 koa2 以下版本的写法

## 实现koa，关键的中间件机制，compose

将函数串联起来, [A,B,C] => A(B(C()))

```

compose(middlewares) {
return function (ctx) {
return dispatch(0)
function dispatch(i) {
let fn = middlewares[i]
if (!fn) {
return Promise.resolve()
}
return Promise.resolve(
fn(ctx, function next() {
return dispatch(i + 1)
})
)
}
}
}

```

## 实现限量重启，比如我最多让其在1分钟内重启5次，超过了就报警给运维

- 思路大概是在创建 worker 的时候，就判断创建的这个 worker 是否在 1 分钟内重启次数超过 5 次
- 所以每一次创建 worker 的时候都要记录这个 worker 创建时间，放入一个数组队列里面，每次创建 worker 都去取队列里前 5 条记录
- 如果这 5 条记录的时间间隔小于 1 分钟，就说明到了报警的时候了

## 实现一个node子进程被杀死，然后自动重启代码的思路

在创建子进程的时候就让子进程监听 exit 事件，如果被杀死就重新 fork 一下

```

var createWorker = function(){
var worker = fork(\_\_dirname + 'worker.js')
worker.on('exit', function(){
console.log('Worker' + worker.pid + 'exited');
// 如果退出就创建新的 worker
createWorker()
})
}

```

## buffer模块

buffer 乱码问题
读取一份中文文件出现乱码，一般情况下，只需要设置 rs.setEncoding('utf8')即可解决乱码问题

## node的问题

在 nodejs 开发的时候 处理过什么 windows 和 mac 的平台兼容性问题

- 兼容环境变量设置，用 cross-env，因为 export 和 set 有系统差异性
- windows 不支持 & ,并行执行 npm-script 用 npm-run-all 或者 concurrently
- 异步同步化:util.promisify + async/await
- 不要直接用官网的 fs.readFileSync，用 fs-extra 去代替
- 拼接路径要用 path.join，Unix 系是/，Windows 是\

## 用nodejs，将base64转化成png文件

```

const fs = require('fs');
const path = 'xxx/'+ Date.now() +'.png';
const base64 = data.replace(/^data:image\/\w+;base64,/, "");//去掉图片 base64 码前面部分 data:image/png;base64
const dataBuffer = new Buffer(base64, 'base64'); //把 base64 码转成 buffer 对象，
fs.writeFile(path, dataBuffer, function(err){//用 fs 写入文件
if(err){
console.log(err);
}else{
console.log('写入成功！');
}
})

```

一般你要是做出来了将 base64 转化成 png 文件，面试官又会坏坏的让你举一反三一下，会问你：实现一下将 png 文件，转化成 base64，来少年，实现一下

```

const fs = require("fs");
const util = require("util");
const imageData = await util.promisify(fs.readFileSync(fileUrl)); // 例：xxx/xx/xx.png
const imageBase64 = imageData.toString("base64");
const imagePrefix = "data:image/png;base64,";
console.log(imagePrefix + imageBase64);

```

## node开发脚手架

1. Npm init -y
2. 在 package.json 里面加入 bin 选项指向脚本文件
3. Npm link 进行关联
4. 直接运行 cli 这期间如果提示 env: node\r: No such file or directory 错误的话，这个是文件的问题，文件在 windows 上面建的，空格是用 dos 风格的，在 unix 上面会出错，直接新建一个文件即可，或者上谷歌
   https://stackoverflow.com/questions/30344858/node-script-executable-not-working-on-mac-env-node-r-no-such-file-or-directo
5. Npm login 登录
   nrm use npm 源，然后账号 hejie3920，密码常规，
6. Npm publish

## 基于vue-cli3创建自己的UI组件库，开发npm包，开发脚手架

用 vue-cli3 创建一个空壳项目

1. yarn add @vue/cli -D 安装 vuecli3 最新的脚手架
2. npx vue create mycli
3. 创建完项目后，我们改一下目录结构

- 将 src 改为 examples，
- 新建一个 packages 存放组件代码
- lib 文件夹存放打包出来的文件

4. 在 packags 里面开始写自己的代码和入口文件
   自动引入注册 Vue 组件

```
./myplugin
index.js
const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  requireComponent.keys().map((component) => {
    const config = requireComponent(component)
    new RegExp(/\.\/(.*)\.vue$/g).test(component)
    const componentName = RegExp.$1
    Vue.component(componentName, config.default || config)
  })
}
export default {
  install
}

```

5. package.json 编写打包命令,打出 lib 文件夹

```

"scripts": {
 "serve": "vue-cli-service serve",
 ...
 "lib": "vue-cli-service build --target lib --name 包名 --dest lib src/myplugins/index.js",
},

--mode 指定环境模式 (default: production)
--dest 指定输出目录 (default: dist)
--modern 构建两个版本的 js 包：一个面向支持现代浏览器的原生 ES2015+ 包，以及一个针对其他旧浏览器的包。
--target 允许您以项目库或Web组件的形式在项目内部构建任何组件 app | lib | wc | wc-async (default: app) ???
--name lib或者web组件库的名称 (default: "name" in package.json or entry filename)
--no-clean 在构建项目之前不要删除输出目录(dist)
--report 生成report.html以帮助分析包内容
--report-json 生成report.json来帮助分析包内容
--watch 监听 - 当有改变时 自动重新打包~
```

6. 复制一份 package.json 到 lib 文件夹里面，然后在 package.json 里面配置入口和证书

```
"name": "hejie-plugins",
"version": "0.1.0",
"private": false,  // 要设置成非私有化的
"license": "MIT",  // license协议
"main": "lib/hejie-plugin-demo.umd.js", // 入口
```

7. 然后 npm login,login 前先 nrm use npm，然后账号 hejie3920，密码常规不用大写
8. npm publish
9. 别人可以愉快使用

```
npm install hejie-plugin-demo
import hejie from hejie-plugin-demo
有样式的话也要分开引入，import './lib/hejie-plugin-demo.css'
Vue.use(hejie)
```

## 开发Node脚手架

[node开发脚手架命令行好文](https://www.kancloud.cn/outsider/clitool/313189#_0)

- 路径处理 path
- 文件处理 fs，用 fs-extra 是强化的工具 https://www.kancloud.cn/outsider/clitool/313189#_0
  fs-extra 写同步异步是不需要加 Sync 之类，默认是同步，如果要异步则直接写回调函数即可，就会认为是异步操作
- 进程 process 主进程，子进程 child_process 【spwan,exexFileSync】
- Shelljs，是 child_process 的封装工具
- 命令行参数处理 commander <>必选，[]可选
- 命令行交互 co-promt

```

var co = require('co');
var prompt = require('co-prompt');

co(function\*() {
var username = yield prompt('username: ');
var pwd = yield prompt.password('password: ');
var desc = yield prompt.multiline('description:');
var ok = yield prompt.confirm('are you sure?(yes|no)');
console.log('hello %s %s\n', username, pwd);
console.log('you describe yourself as:\n' + desc);
console.log('answer: %s', ok);
process.exit();
});

shelljs
var shell = require('shelljs');

//判定 git 命令是否可用
if (!shell.which('git')) {
//向命令行打印 git 命令不可用的提示信息
shell.echo('Sorry, this script requires git');
//退出当前进程
shell.exit(1);
}

//先删除'out/Release'目录
shell.rm('-rf', 'out/Release');
//拷贝文件到'out/Release'目录
shell.cp('-R', 'stuff/', 'out/Release');

//切换当前工作目录到'lib'
shell.cd('lib');
//shell.ls('_.js')返回值是一个包含所有 js 文件路径的数组
shell.ls('_.js').forEach(function(file) {//遍历数组
//sed 命令用于文件内容的替换，这里是对每个文件都执行如下 3 步操作，更改版本信息
shell.sed('-i', 'BUILD*VERSION', 'v0.1.2', file);
shell.sed('-i', /^.\_REMOVE_THIS_LINE.*\$/, '', file);
shell.sed('-i', /._REPLACE_LINE_WITH_MACRO._\n/, shell.cat('macro.js'), file);
});
//切换当前工作目录到上一层
shell.cd('..');

//同步执行 git 命令提交代码
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
shell.echo('Error: Git commit failed');
shell.exit(1);
}

由于 exec()现在同步方法的实现占用了大量 CPU，所以，官方建议使用异步模式运行一个需要长时间保活的进程。
例子：
var version = exec('node --version', {silent:true}).stdout;

var child = exec('some*long_running_process', {async:true});
child.stdout.on('data', function(data) {
/* ... do something with data ... \_/
});

exec('some_long_running_process', function(code, stdout, stderr) {
console.log('Exit code:', code);
console.log('Program output:', stdout);
console.log('Program stderr:', stderr);
});

```

## 移除脚手架，脚手架删除，脚手架查找

vimbash mybin, ls, rm 脚手架，npm link 进行关联

# Eggjs

思维导图 ![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/node-egg.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/node-egg.png

# 微信开发

## 鉴权

1. const jwt = require("jsonwebtoken"); 加密
   jsonwebtoken.sign({
   data: user,
   // 设置 token 过期时间
   exp: Math.floor(Date.now() / 1000) + (60 \* 60),
   }, secret)
1. const jwtAuth = require("koa-jwt");
   本质上是用 jsonwebtoken.verify(token, secret, opt))将 token 解密成用户信息
   koa-jwt 是封装而已

```
   使用：用中间件解出token的信息
router.get('/auth/github/userinfo', jwtAuth({
    secret
}), async (ctx) => {
    // 验证通过，state.user
    console.log('jwt playload:', ctx.state.user)
    ctx.body = res.data
})


```

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/wx-token.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/wx-token.png
单点登录
服务器有个 session，如果用户一旦登录成功了，服务器便会记录这个用户在一定时间内可以不需要在登录，那么用户在别的平台再登录的时候，服务器发现已经登陆过了就可以自动登录

## 微信开发流程

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-wechat.jpg):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/img-wechat.jpg

# React相关

[思维导图](https://www.processon.com/mindmap/5d593b3fe4b06e4919173d3b)

## setState原理

setState —> 更新器.addState(nextState) —> 更新队列（updateQueue）添加更新器 —> updateQueue.batchUpdate()批量更新 —> 更新器.updateComponent —> shouldUpdate —> 组件的周期（shouldComponentUpdate, fourceUpdate, componentWillUpdate , render, 虚拟节点 domdiff，didUpdate）
On 监听的事件，生命周期里面的事件到最后才会触发 batchUpdate 批量更新这个操作（异步），其他情况下都不会触发，这也就解答了之前为什么原生事件或者 setState 回调里面的东西是可以直接同步拿到最新值得

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
console.log("TCL: 2", this.state.counter) 6. ==> 2
}, 300)
批量操作：对同一个 key 多次操作会合并，会执行最后一次
this.setState({ counter: this.state.counter + 1 })
this.setState({ counter: this.state.counter + 1 })
this.setState({ counter: this.state.counter + 1 }, () => {
console.log("TCL: 1", this.state.counter) 4. ==> 1
})
console.log("TCL: 3", this.state.counter) 1. ==> 0
this.setState(prev => {
console.log("TCL: 4", this.state.counter) 2. ==> 0
})
setTimeout(() => {
console.log("TCL: 5", this.state.counter) 5. ==> 1
}, 280)
this.setState(pre => {
console.log("TCL: 6", pre.counter) 3. ==> 1
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
console.log("TCL: ", this.state.counter) 结果 300
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
简单来说就是合成事件都统一在 document 进行代理，通过冒泡执行，并且合成事件也做了一些优化处理，这时候如果原生事件写了 preventDefault 了，那就会阻挡了合成事件的发生，但如果合成事件写了 preventDefault 并不会阻止原生事件，因为原生事件早已经发生了，然后再冒泡到 document 再执行合成事件

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

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-pure.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-pure.png

## react性能优化，react优化

- 浅比较
  原理就是 shouldComponentUpdate 里面做，只是大多数情况下 PureComponent 和 memo 已经够用，实际上就是对基本值进行比较，
  对于对象值只比较属性长度，属性如果是数组或者对象的引用一旦变化浅比较就没意义了，那么优化点就在这里，不直接传给组件一个对象而用 ...给扩展开来，扩展成值
  <Comment key={i} {...c} />
  comment 里面直接 const {body, author} = this.props; 取出来即可，
  这样的实现把对象里面的值都扩展出来，pureComponent 就能更好地判断是不是需要重新渲染
- 虚拟化长列表
  react-window 和 react-virtualized 是热门的虚拟滚动库。
- react 代码分割，路由懒加载
  React.lazy 配合 suspend 进行路由懒加载

```

const OtherComponent = React.lazy(() =## import("./OtherComponent"))
<Suspense fallback={<div##Loading...</div##}##
<section##
<OtherComponent /##
<AnotherComponent /##
</section##
</Suspense##

```

- 最小颗粒化精细化组件，render 函数里面不要有数据操作也不要有高阶组件，绑定事件用 this.会比()=>{this.\*\*\*}好一点点
- 添加 why-did-u-update 查看多余渲染
- 浏览器 performance 看 timing
- immutable 单向数据可以方便地实现数据响应，对象添加属性就会自动响应，而不用像 redux 一样一定要返回一个{...state,newpeyload}
- 能尽量用 props 传的就尽量用 props 传，redux 的话一些无关属性的变化可能会导致子孙也渲染

## JSX

是 react 的语法糖，会被 babel-loader 编译成 React.createElement(JSX)得到一个虚拟 dom 树

## React复用，组件逻辑复用，react各组件比较

- 高阶组件:
  - 属性代理
  - 反向继承
- 渲染属性
- react-hooks
  其中 mixin 已经被弃用

对比他们的优劣，Mixin,hoc,render props,hook 的优劣

- mixin 有隐式耦合，也可能冲突，
- hoc 比 mixin 耦合度更低，复杂度也低，但是扩展度也不高，而且 hoc 对使用者来说是黑盒，
- render props 解决了 hoc 的这些问题，但是它使用繁琐，嵌套也深，
- hook 解决了 hoc 和 render props 的问题，也更简洁，解耦也更好，缺点是内部是闭包可能值会引用到旧值，而且 memo 也不能完全像 pureComponent 一样，因为 memo 只针对 props 监听，监听不了内部 state

## React16后的生命周期，react16相关

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate
  这三个生命周期被 getDerivedStateFromProps 替代，但并未删除

分三个阶段，挂载阶段，更新阶段，卸载阶段
挂载阶段 constructor —> getDerivedStateFromProps —> render —> componentDidMount —> componentWillUnmount 清除钩子
更新阶段 getDerivedStateFromProps —> shouldComponentUpdate —> render —> getSnapshotBeforeUpdate —> componentDidUpdate
卸载阶段 componentWillUnmount

## react16版本的reconciliation阶段和commit阶段是什么

- reconciliation 阶段包含的主要工作是对 current tree 和 new tree 做 diff 计算，找出变化部分。进行遍历、对比等是可以中断，歇一会儿接着再来。
- commit 阶段是对上一阶段获取到的变化部分应用到真实的 DOM 树中，是一系列的 DOM 操作。不仅要维护更复杂的 DOM 状态，而且中断后再继续，会对用户体验造成影响。在普遍的应用场景下，此阶段的耗时比 diff 计算等耗时相对短。

## React.children.map迭代出来的节点是不能直接修改属性的，可以配合React.cloneElement进行扩展修改

- React.cloneElement 克隆并返回一个新的 ReactElement （内部子元素也会跟着克隆），新返回的元素会保留有旧元素的 props、ref、key，也会集成新的 props（只要在第二个参数中有定义）

## ForwardingRefs有什么用

是父组件用来获取子组件的 dom 元素的

## 自己封装antDesign的表单，

```

参考 hejie-react/react/study/learn/KFormTest.js

目的用法：
<FormItem validateStatus="error" help={unameError || ""}>
{getFieldDec("username", {
rules: [{ required: true, message: "Please input your username!" }]
})(<KInput type="text" prefix={<Icon type="user" />} />)}
</FormItem>

<!-- 关键用一个高阶函数生成， -->

// 包装函数：接收字段名和校验选项返回一个高阶组件
getFieldDec = (field, option) => {
this.options[field] = option; // 选项告诉我们如何校验

<!-- 柯里化 -->

return InputComp => (

  <div>
    {React.cloneElement(InputComp, {
      name: field,
      value: this.state[field] || "",
      onChange: this.handleChange, //执行校验设置状态等
      onFocus: this.handleFocus //焦点处理
    })}
  </div>
);
};
```

## react16新增

- 新钩子
  简单来说就是 will 的钩子都被替代 getDerivedStateFromProps
  除了了 shouldComponentUpdate，其他在 render 函数之前的所有函数(componentWillMount，componentWillReceiveProps， componentWillUpdate)都被 getDerivedStateFromProps 替代。
- 错误边界，componentDidCatch，配合 getDerivedStateFromError 可以降级渲染
- ReactDOM.createPortal，传送门，挂载节点在任意位置，节点还是可以继续冒泡到 react 根
- 返回新增 react 元素数组和字符串

## 类似v-html一样解析html

`<div id='htmlStr' dangerouslySetInnerHTML={{ __html: htmlStr }}##</div##`

## 绑定事件

```
1. 比较喜欢的做法
  handleClick = () =## {
  this.props.asyncFetch(this.state.num + 1)
  }
2. 在 constructor 里面 bind(this)
3. onClick={(e) =## {this.\*\*\*(e)}}
```

## 高阶Hoc

- 有函数式高阶以及类组件高阶，其中在装饰器语法下
- 自定义 withState，状态提升高阶组件封装 input 框,实现双向绑定
- 路由懒加载高阶
- hoist-non-react-statics 自动拷贝所有非 React 静态方法

## react-router

- render/children/component,互斥的，
  优先执行 children > component > render exact 表明是独占路由
  children 是匹配与否都会执行，
  render 和 component 就是匹配才执行，
  component 适合直接 component={组件名}而不适合 component={ () => z 组件}，会引起重复装载，这也就决定了它适合渲染写死不需要初始化给参数的组件，render 适合渲染动态要传参的组件
  children 应用场景：有时候你可能只想知道访问地址是否被匹配，然后一旦匹配就改变下样式之类，比如所有的页面我都会渲染导航，然后如果匹配到的话某个导航就高亮，这是一种典型的应用场景
- 在 redux 里面动态地改变路径查询参数

```
import { push } from 'react-router-redux';
import qs from 'query-string';

export const search = () => (dispatch) => {
  const query = { firstName: 'John', lastName: 'Doe' };
  const searchString = qs.stringify(query);
  dispatch(push({
    search: searchString
  }))
}

```

## react生命周期

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-life.jpg):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-life.jpg

```
export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    // 常用于初始化状态
    console.log("1.组件构造函数执行");
  }
  componentWillMount() {
    // 此时可以访问状态和属性
    console.log("2.组件将要挂载");
  }
  componentDidMount() {
    // 组件已挂载，可进行状态更新操作，可进行api调用等
    console.log("3.组件已挂载");
  }
  componentWillReceiveProps() {
    // 父组件传递的属性有变化，做相应响应
    console.log("4.将要接收属性传递");
  }
  shouldComponentUpdate(prevProps, prevState) {
    // 组件是否需要更新，需要返回布尔值结果，优化点
    console.log("5.组件是否需要更新？");
    return true;
  }
  componentWillUpdate() {
    // 组件将要更新，可做更新统计
    console.log("6.组件将要更新");
  }
  componentDidUpdate() {
    // 组件更新
    console.log("7.组件已更新");
  }
  componentWillUnmount() {
    // 组件将要卸载, 可做清理工作
    console.log("8.组件将要卸载");
  }
  render() {
    console.log("组件渲染");
    return <div>生命周期探究</div>;
  }
}
```

## 复合组件,react插槽

```

<div##
{React.Children.map(props.children, child =## {
  if (child.type === "p") {
    return
  }
  return child
})}
</div##
```

## reacthooks

- useEffect

1. 第二个参数，如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]），注意：这时候在这里的 state 的值一直是固定的，只会初始化一次，在 effct 里怎么 set 都只会从初始值开始 set
2. 第二个参数如果不设置，代表有变化就会触发，也可设置依赖数组
3. 模拟 didmount 之类的消除工作：可以 return 一个函数来清除一些副作用
   useEffect 模拟各生命周期
   useEffect 可以看成是 componentDidMount，componentDidUpdate 和 componentWillUnmount 三者的结合。useEffect(callback, [source])接收两个参数，调用方式如下：
   useEffect(() => {
   console.log('mounted');
   return () => {
   console.log('willUnmount');
   }
   }, [source]);
   复制代码
   生命周期函数的调用主要是通过第二个参数[source]来进行控制，有如下几种情况：
   (1) [source]参数不传时，则每次都会优先调用上次保存的函数中返回的那个函数，然后再调用外部那个函数；
   (2) [source]参数传[]时，则外部的函数只会在初始化时调用一次，返回的那个函数也只会最终在组件卸载时调用一次；
   (3) [source]参数有值时，则只会监听到数组中的值发生变化后才优先调用返回的那个函数，再调用外部的函数。

- useContext

```

const HejieCtx = React.createContext()

父：
<HejieCtx.Provider value={{ list, dispatch }}##
子孙组件
</HejieCtx.Provider##

子孙：
const { dispatch, list } = useContext(HejieCtx)

```

- useReducer

```

function listReducer(state, action) {
switch (action.type) {
case "init":
return action.payload
case "add":
return [...state, action.payload]
default:
return state
}
}

use:
const [list, dispatch] = useReducer(listReducer, [])
dispatch({ type: "add", payload: ["西瓜", "菠萝"] })

```

- 自定义 hooke
  就是自定义函数，函数命名 use\*\*\*,运用 useState 什么之类,return 而已，没什么好说

- 像 thunk 一样包装 dispatch，实现 react-thunk

```
// 对dispatch函数进行封装，使其支持处理异步action
function wrapDispatch(dispatch) {
return function(action) {
  if (isPromise(action.payload)) {
    dispatch({ type: "loading_start" })
    action.payload.then(v =## {
      dispatch({ type: action.type, payload: v })
      dispatch({ type: "loading_end" })
    })
  } else {
    dispatch(action)
  }
}
}

```

- 函数式组件用 react-redux 的 connect

```
1.
const FruitAdd = connect()(function({ dispatch }) {
});

1. 用法一样
connect(
mapStateToProps,
mapDispatchToProps
)(HookTest);
```

## reactcontext

- 使用

```

const ThemeContext = React.createContext("light")
<ThemeContext.Provider value={this.state.count}##
子
</ThemeContext.Provider##

子：
用法一：设置静态属性
class ThemedButton extends React.Component {
static contextType = ThemeContext
<!-- 然后this.context就可以使用了 --##
...
}

用法二：使用 consumer
<ThemeContext.Consumer##{value =## <Button##{value}</Button##}</ThemeContext.Consumer##
```

## redux原理,react-redux原理，redux-thunk原理

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-all.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-all.png

<!-- todo -->

## redux中间件机制，middleware

## redux相关

![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-redux.jpg):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-redux.jpg

## redux和mobx的区别

两者对比:

- redux 将数据保存在单一的 store 中，mobx 将数据保存在分散的多个 store 中
- redux 使用 plain object 保存数据，需要手动处理变化后的操作；mobx 适用 observable 保存数据，数据变化后自动处理响应的操作
- redux 使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数；mobx 中的状态是可变的，可以直接对其进行修改
- mobx 相对来说比较简单，在其中有很多的抽象，mobx 更多的使用面向对象的编程思维；redux 会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
- mobx 中有更多的抽象和封装，调试会比较困难，同时结果也难以预测；而 redux 提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易
  适用场景
  mobx 更适合数据不复杂的应用: mobx 难以调试,很多状态无法回溯,面对复杂度高的应用时,往往力不从心.
  redux 适合有回溯需求的应用: 比如一个画板应用、一个表格应用，很多时候需要撤销、重做等操作，由于 redux 不可变的特性，天然支持这些操作.
  当然，两者也可以配合工作

## react-redux

1. provider 提供 store
2. Connect 连接 react 和 redux，高阶组件使其拥有 dispatch 和能访问到 store
3. connect 后的组件监听 store 变化，connect 有缓存 state 属性的，有变化时就会触发 setState 操作使其子组件重新渲染

```

根组件用<Provider store={store}##传 store 后

子组件
const mapStateToProps = state =## ({
list: state.goods.list
})
函数式
const mapDispatchToProps = dispatch =## ({
add: payload =## dispatch({ type: "add", payload }),
})
对象式
const mapDispatchToProps = {
add,
asyncFetch
}
@connect(mapStateToProps, mapDispatchToProps)

```

## redux-thunk

使得可以写异步 action，而且参数自带可以解析出 dispatch 和 getState，如果还要别的参数比如 axios，可以用 withExtraArgument 把 axios 传给 action
applyMiddleware(thunk.withExtraArgument(serverAxios))

```
这样这个action就能解析出来dispatch,$axios
export const asyncFetch = payload => {
return (dispatch,$axios) => {
  setTimeout(() => {
    dispatch({ type: "init", payload })
  }, 1000)
}
}

```

## redux-saga

原理：![image](https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-saga.png):https://oola-web.oss-cn-shenzhen.aliyuncs.com/oolaimgs/oolam/repo/react-saga.png

1. 创建任务清单

```
// 任务清单
import { call, put, takeEvery } from "redux-saga/effects";

const UserService = {
login(uname) {
return new Promise((resolve, reject) => {
  ...
});
}};
// worker Saga

function* login(action) {
try {
  yield put({ type: "requestLogin" });
  //这些put的名字派发者都是saga了，派发的这些事务也在user.redux.js里面写进去
  const result = yield call(UserService.login, action.uname);
  yield put({ type: "loginSuccess", result });
} catch (message) {
  yield put({ type: "loginFailure", message });
}
}

function* mySaga() {
  yield takeEvery("login", login);
}
export default mySaga;
```

2. 注册

```
const store = createStore(
combineReducers({ fruit: fruitReducer, user }),
applyMiddleware(logger, thunk, sagaMiddleware)
);
sagaMiddleware.run(mySaga);
```

3. 使用 saga 后，原来所有的 redux 都采用最纯粹的写法，直接 action 都是派发一个对象，不用函数了，所有的异步事务都在 saga 清单里面做

## React 的 O(n3)和 O(n)怎么计算出来的

确切地说，树的最小距离编辑算法的时间复杂度是 O(n^2m(1+logmn)),
我们假设 m 与 n 同阶， 就会变成 O(n^3)。

## Rn的原理

通过 bridge 将 js 映射转换成各平台的原生代码

## reactssr掘金好文

[总结分析 react 系所有的 ssr](https://juejin.im/post/5d9b57e35188252af43b7a4a)
[从 0 到 1 实现 react ssr](https://juejin.im/post/5d7deef6e51d453bb13b66cd)

## Egg + React + SSR 服务端渲染

[Egg + React + SSR 服务端渲染](http://ykfe.net/guide/ts.html)

## Next

- 内置组件，Head, Link,
- 类似微服务的 zone
- [demo](https://segmentfault.com/a/1190000015578803)
- next 官网比较简洁，其实没什么特别好记录的，和各种技术的配合项目直接看它的开源项目 demo 踩坑食用即可
  [所有技术配合合集](https://github.com/zeit/next.js/tree/7.0.0-canary.8/examples/with-redux)
- withRedux [配合 redux](https://github.com/zeit/next.js/tree/7.0.0-canary.8/examples/with-redux)

- head 组件自定义 tdt
- getInitialProps 服务端获取数据
- Link href 跳转，Router.push()跳转，prefetch 预加载 <Link href={{ pathname: '/about', query: { name: 'Zeit' }}}> scroll={false}防止滚动
- 拦截器

```
import Router from 'next/router'

Router.beforePopState(({ url, as, options }) => {
  // I only want to allow these two routes!
  if (as !== "/" || as !== "/other") {
    // Have SSR render bad routes as a 404.
    window.location.href = as
    return false
  }

  return true
});

```

- ./pages/
  \_app.js getInitialProps 这里是全局文件，抽离出一个 layout 组件，然后可以用来包裹 redux
  \_document.js
  import Document, { Head, Main, NextScript } from 'next/document'
  \_error.js 内置错误页面 import Error from 'next/error'

- next.config.js
  自定义配置 [https://github.com/zeit/](https://github.com/zeit/)

# Umi+Dva

## 所有配置

[基本包含 webpack 的所有配置](https://umijs.org/zh/config/#routes)

- treeShaking，ssr，copy, proxy, ignoreMomentLocale, autoPrefixer....

## 运行时配置

- src/app.js
- patchRoutes 用于在运行时修改路由。
- onRouteChange
- rootContainer
- modifyRouteProps

## start

- yarn create umi yarn start
  umi g page index
  [官网各种例子](https://umijs.org/guide/examples.html#official)

## 结构

```
.
├── dist/            // 默认build的目录
├── mock/            // mock目录
├── config/
  ├── config.js    // umi配置文件, 也可以根目录.umirc.js，选一个
└── src/
  ├──layouts/index.js
  ├── pages/
      ├── .umi/       //temp directory, need to be added to .gitignore
      ├── .umi-production/
      ├── document.ejs            // HTML template
      ├── 404.js                  // 404 page
      ├── page1.js
      ├── page1.test.js
      └── page2.js
  ├── global.css
  ├── global.js            // can add polyfill here
├── .umirc.js   // umi configuration, choose one
├── .env          // environment variable
└── package.json

```

## mock

```
export default {
'POST /api/forms': (req, res) => {
  setTimeout(() => {
    res.send('Ok');
  }, 1000);
},
};

```

## 路由

1. 在 umi 中，如果具有\$后缀，则动态路由是可选的动态路由。

```
+ pages/
+ users/
  - $id$.js
- index.js
路由配置将生成如下：

[
{ path: '/': component: './pages/index.js' },
{ path: '/users/:id?': component: './pages/users/$id$.js' },
]

```

2. 如果你喜欢使用配置的路线，你可以配置 routes 在配置文件中任一.umirc.(ts|js)或 config/config.(ts|js)，此配置项目不会被解析为 src/pages 目录
3. 路由过渡 import { TransitionGroup, CSSTransition } from "react-transition-group";
4. 面包屑 react-router-breadcrumbs-hoc
5. 确定是否滚动到 componentDidUpdate 布局组件的顶部
6. 跳转，<Link to="/list">Go to list page</Link> 或者 router.push('/list');
   }

## umi-env配置文件区分环境

```
// .umirc.js
export default { a: 1, b: 2 };

// .umirc.cloud.js
export default { b: 'cloud', c: 'cloud' };

// .umirc.local.js
export default { c: 'local' };

```

## 配合dva使用

1. 在 umi 的 plugin 里面加入 dva，使用 immer 模式，写得会很舒服
2. /src/models/写 model
3. 写法

```
import * as api from '../until/getpro';
export default{
	//命名空间
	namespace:'info',
	state:{
		name:'和杰',
		age:24,
		des:"真帅呀！！！",
		list:[]
	},
	//处理state－－同步
	reducers:{
		change(state,{payload}){
			return {...state,...payload}
		}
	},
	// 异步
	// yield表示后面的方法执行完以后 call表示调用一个api接口
	// put表示一个派发
	effects:{
		*getData(payload,{call,put}){
			console.log(payload)
			const result=yield call(api.getProList,payload.payload)
			console.log(result)
			yield put({
				type:'change',
				payload:{
					list:result.data.data
				}
			})
		}
}

use:
import {connect} from 'dva';
 function Index(props) {
  return (
    <div>
      <h1>Page index</h1>
	  <Button type="primary"
		onClick={()=>props.dispatch({
			type:'info/change',
			payload:{
				age:props.age-1
			}
		})}
	  >设置年龄</Button>
	  <h2>{props.name}</h2>
	  <Button type="primary"
		onClick={()=>props.dispatch({
			type:'info/getData',
			payload:{
				uid:19802,
				pagesize:50
			}
		})}
	  >获取数据</Button>
	  {
		  props.list.map((item)=>{
			  return(<div key={item.pid}>{item.pname}</div>)
		  })
	  }
    </div>
  );
}
```

## 按需加载

- 配置文件 plugin 里面配置 umi-plugin-react 实现路由懒加载
- 按需加载组件，通过该 umi/dynamic 接口实现
- 按需加载模块由 import().then 实现

# Vue相关

## vue在v-for时给每项元素绑定事件需要用事件代理吗？为什么？

vue 并没有自动做事件代理，也是每个节点绑一个，同时事件代理在节点非常多的情况下才会看到优势，不然平常的话其实没什么大影响

## vue技巧

1.  vue watch 设置 imediate 可以立刻触发，watch 立刻触发

```
watch：{
    value: {
        handler:(newVal,oldVal) {},
        immediate:true
    }
}
```

3. render(h)函数实现组件化

```
render: function (h, context) {
 return h('div', {
   class:{},
   domProps:{innerText:this.text},
   on: {
     click:this.domClick
   }
 })

}
```

4. 全局组件引用，require.context 工程化自动引入，正则取\$1

require.context 是 webpack 的语法，vue 自动集成了 webpack 的语法，可以直接使用
可以用来自动读取指定位置的文件，require.context 函数接受三个参数

directory {String} -读取文件的路径
useSubdirectories {Boolean} -是否遍历文件的子目录
regExp {RegExp} -匹配文件的正则
语法: require.context(directory, useSubdirectories = false, regExp = /^.//);

```
const requireComponent = require.context('.', false, /\.vue$/)
requireComponent.keys().forEach((fileName) => {
  const config = requireComponent(fileName)
  new RegExp(/\.\/(.*)\.vue$/g).test(fileName)
  // 将组件转成驼峰
  const componentName = changeStr(RegExp.$1)
  Vue.component(componentName, config.default || config)
})

```

5. 全局自动化引入路由,路由自动引入，路由去中心化
   ./router

- index.js
- login.routes.js
- activities.routes.js

```

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
Vue.use(Router)
const routerList = []
function importAll(r) {
  r.keys().forEach((key) => routerList.push(r(key).default))
}
importAll(require.context('.', true, /\.routes\.js/))
如果是开发还可以只加载自己想要的路由模块
if (process.env.NODE_ENV === 'development') {
  importAll(require.context('.', true, /animatedH5\.routes\.js/))
} else {
  importAll(require.context('.', true, /\.routes\.js/))
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...routerList
  ]
})

```

6. Vue.prototype 在原型上添加属性，v-directive 添加自定义指令

## Vue.use和Vue.mixin开发插件

Vue.use(args) 如果 args 是个 function，则会直接调用，如果是个对象，则会调用 install 方法

```
myplugin.js

class CopyDirWebpackPlugin {
  init(){
  }
  install(Vue){
  }
}

module.exports = CopyDirWebpackPlugin;

Vue.mixin({
  mounted(){
    代码1
  }
})
代码1会被混入到mounted钩子里，所有mounted都会触发
```

## 封装插件

1. 常规封装

```
plugins/
test.vue

index.js
import test from './test.vue'
let plugins = {}
plugins.install = function(Vue){
  Vue.component(test.name,test)
}
export default plugins

main.js
import plugins from './plugins'
Vue.use(plugins)

```

2. 同上面全局组件引用，require

## 实现Vue-router

```
class HistoryRouter {
  constructor() {
    this.current = null
  }
}

class vueRouter {
  constructor() {
    this.history = new HistoryRouter()
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)
    this.init()
  }
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : (location.hash = '/')
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.hash ? '' : (location.hash = '/')
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.components
      return memo
    })
  }
}

vueRouter.install = function (Vue) {
  Vue.mixin({
    beforeCreate() {
      // 首页实例化Vue时所传过来的options
      if (this.$options && this.$options.router) {
        // 把当前实例挂载
        this._root = this
        this._router = this.$options.router
        // 第一个参数this,指向当前组件的实例，监听类的current属性
        Vue.util.definReactive(this, 'current', this._router.history)
      }
      // 设置一个只可读的引用，只设置get，实现this.$router只能读
      Object.defineProperty(this,'$router',{
        get(){
          return this._root._router
        }
      })
      Object.defineProperty(this,'$route',{
        get(){
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.components('router-view', {
    render(r, context) {
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routeMap
      return r(routeMap[current])
    }
  })
}

module.exports = vueRouter
```

## 封装插件异步按需引入

运用 import 异步加载需要的模块

```
module.exports = {
    install:function(){
        Vue.mixin({
            created () {
                if(this.$options.isVuex){
                    import('../store/modules/'+this.$options.name).then(res => {
                        this.$store.registerModule(this.$options.name, res.default)
                    })
                }
            },
        })
    }
};

```

# 自动化测试

TDD 测试驱动开发，BDD 行为驱动开发

- 测试框架
  主流：mocha，适合 node，没有浏览器环境，而且需要自己装 mock 库
  jest,基于 jasmine，对 react 友好，jasmine，bdd 风格，自带 assert 和 mock(因为自带所以也不方便扩展)
  qunit，出自 jquery，后来独立
- 断言库，断言结果是多少
  chai：支持所有风格 expect,should,assert，很全面
  should，expect,一般般，没什么亮点，assert，node 环境直接用
- mock 库，提供模块模拟
  sinon 一般用这个
- test runner，模拟运行环境
  karma
- 覆盖率工具
  istanbul

使用：@vue/test-utils，可以更方便写测试用例

# 一些源码包的架构设计

## jquery的架构

```
@1
(function(window,undefined){
  @2 工厂模式
  function jquery(selector){
    return new jquery.fn.init()
  }
  jquery.prototype = {
    init():function(){

    }

  }
  @3
  jquery.prototype = jquery.prototype.init.prototype=jquery.fn

  @4
  jquery.extends = function(){}
  jquery.extends({
    css:function(){}
  })

  window.jquery = jquery
  window.$ = jquery

})(window,undefined)
```

1. 以前的架构喜欢把 window，undefined 传进去可以提高性能原因：可以直接将 window 和 undefined 传进去，避免 js 在逐级向上查找时耗费的时间，传 undefined 也同理，undefined 是一个变量，传进去可以避免诸暨查找的时间，而 null 不需要传是因为 null 是关键字
2. 工厂模式
3. 共享原型，可以直接操作操作 fn 就能同步到其他的原型对象上`jquery.prototype = jquery.prototype.init.prototype=jquery.fn`
4. 模块划分

```

```

# 数据库

## mongoDB

```
mongo
show dbs
库 -> 集合 -> 文档
use test（集合名）
增：
db.test.insert({name:"hejie"}) // 很可能被废弃
db.test.insertOne({name:"hejie",age:12})
db.test.insertMany([{name:"hejie",age:17},{name:"haha",age:12},{name:"xixi",age:20}])
db.test.find({name:'hejie'})
常用操作符
$lt小于, <
$lte小于等于, <
$rt大于, >
$rte大于等于, >
$ne不等于
$in 逻辑或|
$nin 逻辑非

查：
db.test.find({age:{$lte:16}})

逻辑或,17或者20
db.test.find({age:{$in:[17,20]}})
db.test.find({ $or:[{age:17},{age:20}] })
逻辑非
db.test.find({age:{$nin:[17,20]}})
正则
db.test.find({$where:function(){
  return this.name === '李四' || this.name === 'hejie'
} })


改：update
db.test.update({name:"hejie"},{$set:{age:28}})
db.test.update({name:"hejie"},{$set:{age:28}},{multi:true})

删：remove
db.test.remove({age:{$lte:19}})

删除集合
db.test.drop()

```

## mongoose

对于 mongoDB 的进一步封装，将其封装成方便异步操作 async await 风格的
