<template>
    <div>
        <p>孙组件{{msg}} - {{obj.name}}</p>
    </div>
</template>
<script>
    export default {
        inject:["msg","obj"]
    }
</script>
<style>
div {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
}
</style>