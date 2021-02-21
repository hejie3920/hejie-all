const User = require('../model/user')

const user = {
  login: async (name, passward) => {
    let data
    if (name === 'hejie' && passward == '123') {
      data = `欢迎登录，${name}`
    } else {
      data = '账号错误'
    }
    return data
  },
  addUser: async customer => {
    return User.create(customer)
  },
  userList: async () => {
    return User.findAndCountAll({
      attributes: ['id', 'name', 'sex', 'age']
    })
  }
}

module.exports = user

const axios = require('axios')
const qs = require('querystring')

// const Film = {
//   search: async kw => {
//     return new Promise((resolve, reject) => {
//       axios
//         .get(`https://m.maoyan.com/ajax/search?${qs.stringify({ kw, cityId: 10 })}`)
//         .then(res => {
//           resolve(res.data)
//         })
//         .catch(err => {
//           console.warn('TCL: err', err)
//         })
//     })
//   }
// }
