<template>
    <div class="app">
        <!-- 头部组件  -->
        <MyHeader></MyHeader>
        <!--  主体组件  -->
        <MyMain></MyMain>
        <!--  尾部组件  -->
        <Footer></Footer>
    </div>
</template>

<script>
// 导入组件，注意大驼峰命名
import MyHeader from './components/MyHeader.vue'
import Footer from './components/MyFooter.vue'
import MyMain from './components/MyMain.vue'

export default {
    // 注册局部组件，这种注册方式，只能在这个注册的组件内部使用
    components:{
        // 标准写法
        MyHeader:MyHeader,
        Footer:Footer,
        // 简写，如果组件名和组件对象的名一致，简写为一个也可以
        MyMain
    }
}
</script>

<style>
    .app {
        width: 400px;
    }
</style>