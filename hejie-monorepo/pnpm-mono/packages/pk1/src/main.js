const moment = require('moment');
const obj = require('@monorepo/common');
const axios = require('axios');

console.log('TCL: moment',moment().format('YYYY-MM-DD'))
console.log('TCL: obj',obj.name)
console.log('TCL: obj',axios)