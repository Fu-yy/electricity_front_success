// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui';//导入elementUI
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
import 'echarts-gl'
// import './assets/js/echart-theme/vintage.js'

import axios from 'axios'
// 设置反向代理，前端请求默认发送到 http://202.118.26.114:8081
axios.defaults.baseURL = 'http://202.118.26.114:8081'
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts//全局引用echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)//elementUI
})
