<!--App.vue-->
<template>
    <div class="app">
        <BaseOne></BaseOne>
        <BaseTwo></BaseTwo>
    </div>
</template>
<script>
// 导入组件，注意大驼峰命名
import BaseOne from './components/BaseOne.vue'
import BaseTwo from './components/BaseTwo.vue'
export default {
    // 注册局部组件，这种注册方式，只能在这个注册的组件内部使用
    components:{
        BaseOne,
        BaseTwo,
    }
}
</script>
<style></style>