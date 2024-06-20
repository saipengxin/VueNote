<template>
    <div @click="send">
        <div class="box">发送消息</div>
    </div>
</template>

<script>
    import Bus from '../utils/EventBus' // 将我们的事件总线导入

    export default {
        methods:{
            send() {
                Bus.$emit('sendMsg',"这是一个事件总线发布的消息") // 注意这里触发 sendMsg 事件用的是 Bus 对象，
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