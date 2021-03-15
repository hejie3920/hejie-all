import { createRenderer } from '@vue/runtime-core'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'

export const initRuntimeCanvas = () => {
  const renderer = createRenderer({
    ...nodeOps,
    patchProp
  })

  return {
    renderer
  }
}
function reactive(obj) {
  if (typeof obj !== 'object' && obj != null) {
    return obj
  }
  // Proxy相当于在对象外层加拦截 // http://es6.ruanyifeng.com/#docs/proxy
  const observed = new Proxy(obj, {
    get(target, key, receiver) {
      // Reflect用于执行对象默认操作，更规范、更友好 // Proxy和Object的方法Reflect都有对应 // http://es6.ruanyifeng.com/#docs/reflect
      const res = Reflect.get(target, key, receiver)
      console.log(`获取${key}:${res}`)
      return res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      console.log(`设置${key}:${value}`)
      return res
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key)
      console.log(`删除${key}:${res}`)
      return res
    }
  })
  return observed
}
let test = () => {
  if (toProxy.has(obj)) {
    return toProxy.get(obj)
  }
  if (toRaw.has(obj)) {
    return obj
  }
}

// 提取帮助方法
// const isObject = val => val !== null && typeof val === 'object'
// function reactive(obj) { //判断是否对象
//   if (!isObject(obj)) { return obj }
//   const observed = new Proxy(obj, {
//     get(target, key, receiver) { // ... // 如果是对象需要递归
//       return isObject(res) ? reactive(res) : res
//     }
//     //...
//   }
// }

export * from '@vue/runtime-core'
