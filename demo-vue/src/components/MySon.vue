<template>
    <!--    直接使用-->
    <div>
        我是子组件<b>{{myTitle}}</b>
        <button @click="handleClick">修改数据</button>
    </div>
</template>

<script>
    export default {
        // 在子组件中，使用props来接收绑定的数据
        props:{
            // 简写，类型校验，参数名:类型
            myTitle:{
                type:Number
            }
        },
        methods:{
            handleClick() {
                this.$emit('changeTitle','Hello World')
            }
        }
    }
</script>

<style scoped></style>