<template>
    <div>
        选项一
        <input type="text">
        <div @click="pp">返回</div>
        <router-link tag="div" to="/home/ces">me测试</router-link>
    </div>
</template>
<script>
export default {
    methods:{
        pp:function(){
            history.back()
        }
    }
}
</script>
<style lang="less" scoped>

</style>
