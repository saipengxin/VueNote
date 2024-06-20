<!--App.vue-->
<template>
    <div class="app">
        <TodoHeader @add="add"></TodoHeader>
        <TodoMain :list="list" @del="del"></TodoMain>
        <TodoFooter :count="count" @truncate="truncate"></TodoFooter>
    </div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
    data() {
        return {
            list: JSON.parse(localStorage.getItem('list')) || [
                { id: 1, name: '打篮球' },
                { id: 2, name: '看电影' },
                { id: 3, name: '逛街' },
            ],
            count:0
        }
    },
    watch:{
        list: {
            immediate:true,
            handler(newVal) {
                // 数据持久化
                localStorage.setItem('list', JSON.stringify(newVal))
                this.count = this.list.length
            }
        }
    },
    methods:{
        add(value) {
            this.list.push({"id": +new Date(),"name":value})
        },
        del(id) {
            this.list = this.list.filter(item=>item.id !== id)
        },
        truncate() {
            this.list = []
        }
    },
    // 注册局部组件，这种注册方式，只能在这个注册的组件内部使用
    components:{
        TodoHeader,
        TodoMain,
        TodoFooter,
    }
}
</script>
<style></style>