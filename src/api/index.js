import jsonp from 'jsonp'
import ajax from './ajax'
import {message} from "antd";

// 获取音乐列表 get请求
export const reqMusicList = () => ajax('https://www.easy-mock.com/mock/5d28bbf61dcc4658e1b09727/music/')
// 登录 post请求
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')
// 获取天气信息 jsonp请求
export const reqWeather = (city) => {
  return new Promise((resole, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url, {}, (err, data) => {
      if (!err && data.status === 'success') {
        const {dayPictureUrl, weather} = data.results[0].weather_data[0]
        resole({dayPictureUrl, weather})
      } else {
        message.error('获取天气失败')
      }
    })
  })
}















