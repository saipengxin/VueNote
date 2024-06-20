<template>
    <!-- 统计和清空 -->
    <footer class="footer">
        <!-- 统计 -->
        <span class="todo-count">合 计:<strong> {{ count }} </strong></span>
        <!-- 清空 -->
        <button class="clear-completed" @click="truncate">
            清空任务
        </button>
    </footer>
</template>


<script>
export default {
    props:["count"],
    methods:{
        truncate() {
            this.$emit('truncate')
        }
    }
}
</script>