<template>
  <view>
    <div class="hh2">
      <h2>请选择你的角色</h2>
    </div>
    <div class="selector">
      <button class="educator">教学者</button>
      <button class="collector">采集者</button>
      <div class="clear"></div>
    </div>
    <div class="div-enter">
      <button class="enter">进入</button>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.hh2 {
  overflow: hidden;
  margin: 20% auto;
}
.hh2 h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}
.selector {
  float: left;
  width: 100%;
}

.selector .educator {
  float: left;
  width: 30%;
  height: 400px;
  line-height: 400px;
  margin-top: 4.5%;
  margin-left: 10%;
}

.selector .collector {
  float: right;
  width: 30%;
  height: 400px;
  line-height: 400px;
  margin-right: 10%;
}
.selector .clear {
  clear: both;
}

.div-enter {
  margin-top: 90%;
  width: 100%;
}
.enter {
  width: 80%;
}
</style>
