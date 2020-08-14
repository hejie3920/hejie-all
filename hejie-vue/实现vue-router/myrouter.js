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
