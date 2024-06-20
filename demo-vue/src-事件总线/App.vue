<!--App.vue-->
<template>
    <div class="app">
        <BaseA></BaseA>
        <BaseB></BaseB>
    </div>
</template>
<script>
import BaseB from './components/BaseB.vue'
import BaseA from './components/BaseA.vue'
export default {
    components:{
        BaseA,
        BaseB
    }
}
</script>
<style></style>