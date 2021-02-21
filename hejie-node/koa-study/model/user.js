const { Sequelize } = require('sequelize')
const sequelize = require('./index.js')

module.exports = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    unique: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  sex: {
    type: Sequelize.ENUM(['男', '女'])
  }
})
