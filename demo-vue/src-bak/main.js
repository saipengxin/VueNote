// 引入vue核心包
import Vue from 'vue'
// 引入App.vue页面内容（根组件）
import App from './App.vue'

// 导入需要注册的组件(这里导入的时候，带不带 .vue 后缀都可以)
// 注意导入要写在main.js最上面
import MyButton from "./components/MyButton"
Vue.component('MyButton',MyButton)

// 设置是否提示当前的环境（生产环境 / 开发环境），如果为true在控制台有提示
Vue.config.productionTip = false

// 渲染页面
new Vue({
  render: h => h(App),
}).$mount('#app')
