// 引入vue核心包
import Vue from 'vue'
// 引入App.vue页面内容（根组件）
import App from './App.vue'

import "./styles/index.css"

// 设置是否提示当前的环境（生产环境 / 开发环境），如果为true在控制台有提示
Vue.config.productionTip = false

// 渲染页面
new Vue({
  render: h => h(App),
}).$mount('#app')
