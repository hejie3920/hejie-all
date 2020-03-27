import AsyncStorage from "./node_modules/@react-native-community/async-storage"

export default class DataStore {
  //入口
  fetchData(url) {
    return new Promise((resolve, reject) => {
      //获取本地数据
      this.fetchLocalData(url)
        .then(wrapdata => {
          //检查有效期
          if (wrapdata && DataStore.checkTimestampValid(wrapdata.timestamp)) {
            resolve(wrapdata)
          } else {
            //获取网络数据
            this.fetchNetData(url)
              .then(data => {
                //给数据打个时间戳
                resolve(this._wrapData(data))
              })
              .catch(e => {
                reject(e)
              })
          }
        })
        .catch(error => {
          this.fetchNetData(url)
            .then(data => {
              resolve(this._wrapData(data))
            })
            .catch(error => {
              reject(error)
            })
        })
    })
  }

  // 保存数据到本地
  saveData(key, value, cb) {
    if (!key || !value) return
    AsyncStorage.setItem(key, JSON.stringify(this._wrapData(value)), cb)
  }

  //给离线的数据添加时间戳，便于计算有效期
  _wrapData(data) {
    return {
      data: data,
      timestamp: new Date().getTime()
    }
  }

  //获取本地数据
  fetchLocalData(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (!err) {
          resolve(JSON.parse(result))
        } else {
          reject(err)
          console.log(err)
        }
      })
    })
  }
  //获取网络请求
  fetchNetData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(responseData => {
          this.saveData(url, responseData)
          resolve(responseData)
        })
        .catch(e => {
          reject(e)
        })
    })
  }

  //校验时间
  static checkTimestampValid(timestamp) {
    const currentDate = new Date()
    const targetDate = new Date()
    targetDate.setTime(timestamp)
    if (currentDate.getMonth() !== targetDate.getMonth()) return false
    if (currentDate.getDate() !== targetDate.getDate()) return false
    if (currentDate.getHours() - targetDate.getHours() > 4) return false //有效期4个小时
    // if (currentDate.getMinutes() - targetDate.getMinutes() > 1)return false;
    return true
  }
}
