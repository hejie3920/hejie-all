const Sequelize = require('sequelize')
const sequelize = new Sequelize('hejie_caogu', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})
module.exports = sequelize
