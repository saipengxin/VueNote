<!--App.vue-->
<template>
    <div class="app">
        我是父组件
<!--        通过绑定的方式，将title属性绑定在子组件上 -->
        <Son1 :myTitle="myTitle" @changeTitle="changeFn"></Son1>
    </div>
</template>
<script>
import Son1 from './components/MySon.vue'
export default {
    data() {
        return {
            // 在父组件中定义数据
            myTitle:"哈哈哈"
        }
    },
    methods:{
      changeFn(newTitle) {
          this.myTitle = newTitle
      }
    },
    // 注册局部组件，这种注册方式，只能在这个注册的组件内部使用
    components:{
        Son1
    }
}
</script>
<style></style>