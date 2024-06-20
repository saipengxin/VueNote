<template>
    <div>
        <p>子组件：{{msg}} - {{obj.name}}</p>
        <BaseC></BaseC>
    </div>
</template>
<script>
    import BaseC from "./BaseC.vue";
    export default {
        inject:["msg","obj"],
        components:{
            BaseC
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