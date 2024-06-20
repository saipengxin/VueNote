<template>
    <div>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    import Bus from '../utils/EventBus' // 导入事件总线
    export default {
        data() {
            return  {
                msg:""
            }
        },
        created() {
            // 使用 $on 监听 sendMsg 事件，注意这里使用的是Bus对象
            Bus.$on("sendMsg",(msg)=>{
                // 回掉函数注意使用箭头函数，function函数会导致作用域问题，我们的this.msg无法找到外面的变量
                this.msg = msg
            })
        }
    }
</script>
<style>
div {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
}
</style>