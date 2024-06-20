<template>
    <div @click="change">
        <div class="box">修改数据</div>
        <BaseB></BaseB>
    </div>
</template>

<script>
    import BaseB from "./BaseB.vue";
    export default {
        components:{
            BaseB
        },
        data() {
            return {
                msg:"", // 简单类型，非响应式
                obj:{ // 复杂类型，响应式
                    name:""
                }
            }
        },
        provide() { // 向后代组件传递数据
            return {
                msg: this.msg,
                obj: this.obj
            }
        },
        methods:{
            change() {
                this.msg = "123" // 更新之后后代组件不会自动渲染
                this.obj.name = "hh" // 更新之后后代组件会自动渲染
            }
        }
    }
</script>
<style scoped>
    .box {
        width: 100px;
        height: 100px;
        background-color: #000;
        color:#fff
    }
</style>