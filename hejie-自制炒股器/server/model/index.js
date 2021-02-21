// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('hejie_caogu', 'root', '123456', {
//   host: 'localhost',
//   dialect: 'mysql'
// })
// module.exports = sequelize

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fund')

const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Zildjian' })
kitty.save().then(() => console.log('meow'))
