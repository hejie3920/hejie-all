import axios from 'axios'
import qs from 'qs'
class oolaAxios {
  constructor(api) {
    this.requestConfig = {
      method: 'GET',
      timeout: 5000,
      headers: {}
    }
  }
  get(url, params = {}, options = {}) {
    this.requestConfig = Object.assign({}, this.requestConfig, {
      url,
      method: 'GET',
      params,
      ...options
    })
    return this.fetch()
  }
  post(url, data = {}, options = {}) {
    this.requestConfig = Object.assign({}, this.requestConfig, options, {
      url,
      method: 'POST',
      data: typeof data === 'string' ? data : qs.stringify(data)
    })
    this.requestConfig.headers['Content-Type'] =
      'application/x-www-form-urlencoded'
    return this.fetch()
  }
  postJSON(url, data = {}, options = {}) {
    this.requestConfig = Object.assign({}, this.requestConfig, options, {
      url,
      method: 'POST',
      data
    })
    this.requestConfig.headers['Content-Type'] = 'application/json'
    return this.fetch()
  }
  postFile(url, data = {}, options = {}) {
    this.requestConfig = Object.assign({}, this.requestConfig, options, {
      url,
      method: 'POST',
      data
    })
    this.requestConfig.headers['Content-Type'] = 'multipart/form-data'
    return this.fetch()
  }
  fetch() {
    return new Promise((resolve, reject) => {
      axios(this.requestConfig)
        .then(
          response => {
            let res = response ? response.data : {}
            resolve(res)
          },
          err => {
            const error = err || {
              status: 'false',
              code: '4081',
              msg: '网络开小差了'
            }
            reject(error)
          }
        )
        .catch(error => {
          reject(error)
          console.error('网络开小差了')
        })
    })
  }
}
export default {
  install(Vue) {
    Vue.prototype.$axios = new oolaAxios()
  }
}
