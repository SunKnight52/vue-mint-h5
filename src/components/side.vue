<template>
    <div class="app">
      
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened='true'
      :router="true"
      background-color="#0fe492"
      text-color="#fff"
      active-text-color="#ffd04b">
     <div v-for="(item, index) in side" :key="index"> 
         <el-submenu :index="index+''">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.menu}}</span>
            </template>
            <div v-for="(item1, index1) in item.item" :key="index1">
                <el-menu-item-group v-if="!item1.item">
                    <el-menu-item :index="index+'-'+index1" :route="toRoute(item1)">{{item1.name}}</el-menu-item>
                </el-menu-item-group>
                <el-submenu  :index="index+'-'+index1" v-else>
                    <template slot="title">{{item1.name}}</template>
                    <div v-for="(item2, index2) in item1.item" :key="index2">
                    <el-menu-item :index="index+'-'+index1+'-'+index2"  :route="toRoute(item2)">{{item2.name}}</el-menu-item>
                    </div>
                </el-submenu>
            </div>
        </el-submenu>
      </div>
    </el-menu>
      
    </div>
</template>
<script>
import side from "./side.js";
export default {
  data() {
    return {
      side
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toRoute(item){
        return {
            path:item.url
        }
    }
  },
  mounted() {
    console.log(this.side);
  }
};
</script>
<style lang="less" scoped>
.app {
  display: inline-block;
  width: 300px;
  height: 100%;
  margin-top: -1px;
  border-top: 1px #fff solid;
  .el-menu-vertical-demo {
    width: 300px;
    height: 100%;
  }
}
</style>
