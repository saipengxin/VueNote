import Vue from 'vue' // 导入vue
const Bus = new Vue() // 创建一个事件总线（空的Vue实例）
export default Bus // 将实例到处，别的组件使用的时候直接导入即可