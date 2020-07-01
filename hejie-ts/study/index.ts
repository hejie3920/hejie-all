import commander from 'commander'
import colors from 'colors'
import axios, { AxiosResponse } from 'axios'

commander
  .version('1.0.0')
  .option('-c --city [name]', '添加城市')
  .parse(process.argv)
if (commander.city) {
  console.log('TCL: ', commander.city)
}
if (process.argv.slice(2).length === 0) {
  commander.outputHelp(colors.red)
  process.exit()
}

interface IWeatherResponse {
  status: string
  count: string
  info: string
  infocode: string
  lives: ILive[]
}
interface ILive {
  province: string
  city: string
  adcode: string
  weather: string
  temperature: string
  winddirection: string
  windpower: string
  humidity: string
  reporttime: string
}

const url = 'http://restapi.amap.com/v3/weather/weatherInfo'
const key = 'kes'
axios
  .get(`${url}?city=${encodeURI(commander.city)}&key=${key}`)
  .then((res: AxiosResponse<IWeatherResponse>) => {
    // 重写res的返回值后可以实现res.data.之后自动补全返回值，类型判断
    console.log('接口返回', colors.green(JSON.stringify(res.data)))
  })
  .catch(() => {
    console.warn(colors.red('出错了'))
  })
