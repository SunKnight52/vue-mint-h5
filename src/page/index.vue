<template>
    <div>
        欢迎
        <input type="text">
        <div @click="pp">前进</div>
    </div>
</template>
<script>
export default {
    methods:{
        pp:function(){
            history.forward()
        }
    }
}
</script>
<style lang="less" scoped>

</style>
