<template>
  <div class="page-tabbar">
    <div class="page-wrap">
     

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/001.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/001.png">
        推荐
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/001.png">
        聊天
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/001.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>