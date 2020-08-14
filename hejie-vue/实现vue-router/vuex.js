Vue.use(vuex)
function install(_Vue) {
  if (Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('TCL: ', 'Vuex已经安装，只能安装一次')
    }
    return
  }
  Vue = _Vue
  applyMixin(Vue)
  // vuexInit方法初始化vuex
  // 2.0是混入到beforeCreate
}

function vuexInit() {
  const option = this.$options
  // 存在store，就代表是一个Root节点
  if (options.store) {
    this.$store =
      typeof options.store === 'function' ? options.store() : options.store
  } else if (options.parent && options.parent.$store) {
    // 保证所有的组件都公用了同一份store
    this.$store = options.parent.$store
  }
}

new Vuex.Store({
  strict: true,
  modules: {
    
  }
})

// store.js
constructor(options = {}){
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}