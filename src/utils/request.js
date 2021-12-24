import axios from 'axios'
// 根据环境不同引入不同api地址
import { baseUrl } from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseUrl, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 200000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return Promise.resolve(res)
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
