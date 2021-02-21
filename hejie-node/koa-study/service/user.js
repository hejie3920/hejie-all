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
