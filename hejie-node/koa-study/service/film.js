const axios = require('axios')
const qs = require('querystring')

const Film = {
  search: async kw => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://m.maoyan.com/ajax/search?${qs.stringify({ kw, cityId: 10 })}`)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.warn('TCL: err', err)
        })
    })
  }
}

module.exports = Film
