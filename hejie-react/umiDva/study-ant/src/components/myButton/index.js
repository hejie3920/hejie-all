// 对于import XXX from 'a'，a模块中首先会生成一个object来存储这个模块的所有要export出去的变量：
// Object.defineProperty(exports, "__esModule", { value: true }) ；
// 这里给模块引用添加__esModule属性是为了方便babel识别当前import的模块是否是已经被babel编译过的模块还是第三方模块。
// 在经历一系列的属性添加后，import会首先返回这个模块的引用，然后根据具体的import的命令来处理这个引用。
'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _button = _interopRequireDefault(require('./button'))

var _default = _button['default']
exports['default'] = _default
