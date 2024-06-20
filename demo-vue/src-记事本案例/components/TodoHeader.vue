<template>
    <!-- 输入框 -->
    <header class="header">
        <h1>小黑记事本</h1>
        <input placeholder="请输入任务" class="new-todo" v-model="newTodo" @keyup.enter="add" />
        <button class="add" @click="add">添加任务</button>
    </header>
</template>

<style scoped>

</style>

<script>
    export default {
        data() {
            return {
                newTodo:""
            }
        },
        methods:{
            add() {
                this.$emit('add',this.newTodo)
                this.newTodo = ""
            }
        }
    }
</script>