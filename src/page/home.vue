<template>
  <div class="home">
    <div class="two">
      <app-side></app-side>
      <div class="right">
        <app-header :name="name"></app-header>
        <router-view class="appview"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import appHeader from "../components/header.vue";
import appSide from "../components/side.vue";
export default {
  data() {
    return {
      name: "张宇航"
    };
  },
  components: {
    appHeader,
    appSide
  },
  mounted() {
    this.$router.push("/home/index");
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  > .two {
    display: flex;
    flex: 1;
    flex-direction: row;
    > .right {
      display: flex;
      flex: 1;
      width: 100%;
      flex-direction: column;
      .appview {
        flex: 1;
      }
    }
  }
}
</style>
