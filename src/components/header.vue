<template>
    <div class="app"> 
            <div class="left">
                页面头部
                <slot></slot>
            </div> 
            <div class="right">
                您好! <span>{{name}}</span><a href="javascript:;">注销</a> 
            </div>
    </div>
</template>
<script>
export default {
    props:["name"],
    data(){
        return {

        }
    },

}
</script>

<style lang="less" scoped>
    .app {
        background-color: #0fe492;
        height: 50px;
        padding: 0 5%;
        color: #fff;
        font-size: 20px;
        line-height: 50px;
        width: 100%;
        box-sizing: border-box; 
        .left {

        }
        .right {
            a {
                margin-left: 30px;
            }
        }
    }
</style>
