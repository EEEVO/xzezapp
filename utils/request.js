import Request from '@/js-sdk/luch-request/index.js' // 下载的插件
import {
  getUserToken
} from './token.js'

const http = new Request();

http.setConfig((config) => {
  config.baseUrl = 'https://www.haimadata.cn/abcxzez/api/';
  config.header = {
    Authorization: getUserToken() // 用户身份标识
  }
  return config
})


http.validateStatus = (statusCode) => {
  return statusCode && statusCode >= 200 && statusCode < 300
}

http.interceptor.request((config, cancel) => {
  /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
  config.header = {
    ...config.header,
    a: 1 // 演示拦截器header加参
  }
  // 演示custom 用处
  // if (config.custom.auth) {
  //   config.header.token = 'token'
  // }
  /**
  /* 演示cancel 函数
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，不会进入响应拦截器，但是该函数的catch() 仍会执行
    cancel('token 不存在', config) //  把修改后的config传入，之后响应就可以拿到修改后的config。 如果调用了cancel但是不传修改后的config，则catch((err) => {}) err.config 为request拦截器修改之前的config
  }
  **/
  return config
})

http.interceptor.response((response) => {
  /* 对响应成功做点什么 （statusCode === 200），必须return response*/
  //  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //    return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
  // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  return response.data
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
  console.log(response)
  return response
})

export default http
