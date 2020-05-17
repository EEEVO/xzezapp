import Vue from 'vue'
import App from './App'
import uView from "./uview-ui/index.js";

Vue.use(uView);


Vue.config.productionTip = false

// 将图床挂载到vue对象内置属性下
Vue.prototype.$pic = "https: //xzez.oss-cn-beijing.aliyuncs.com/icon/"

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
