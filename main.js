import Vue from 'vue'
import App from './App'
import uView from "./uview-ui/index.js";

Vue.use(uView);

Vue.config.productionTip = false

//挂载云图床
Vue.prototype.$pic = "https://xzez.oss-cn-beijing.aliyuncs.com/icon"

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
