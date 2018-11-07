<template>
    <div class="home">
        <app-header :name="name"></app-header>
        <div class="two">
            <app-side></app-side>
            <router-view class="appview"></router-view>
        </div>
    </div>
</template>
<script>
import appHeader from "../components/header.vue"
import appSide from "../components/side.vue"
export default {
    data(){
        return {
            name:"张宇航"
        }
    },
    components:{
        appHeader,
        appSide
    },
    mounted () {
        this.$router.push("/home/index")
    }
}
</script>

<style lang="less" scoped>
    .home {
        width: 100%;
        height: 100%;
        box-sizing: border-box; 
        display: flex;
        flex-direction: column;
        >.two {
           display: flex;
             flex: 1;
            flex-direction: row; 
            .appview {
                flex: 1;
            }
        }
        
    }
</style>
