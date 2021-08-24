<template>
  <view class="center">
    <view class="tabSwitch">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="changePage"
        bar-height="12"
        bar-width="100"
        active-color="#333333"
        inactive-color="#606266"
        font-size="45"
        height="120"
      ></u-tabs>
    </view>
    <view class="switchPage">
      <!-- 条件渲染 -->
      <underwayCard v-if="this.current == 0"></underwayCard>
      <favoriteCard v-if="this.current == 1"></favoriteCard>
    </view>
    <u-no-network></u-no-network>
  </view>
</template>

<script>
import underwayCard from "../../components/underwayCard/underwayCard.vue";
import favoriteCard from "../../components/favoriteCard/favoriteCard.vue";
export default {
  data() {
    return {
      show: false,
      list: [
        {
          name: "进行中",
        },
        {
          name: "收藏夹",
        },
      ],
      current: 0,
    };
  },
  components: {
    underwayCard,
    favoriteCard,
  },
  onLoad(options) {
    if (options.index === undefined) {
      this.current = 0;
    } else {
      this.current = options.index;
    }
  },
  methods: {
    changePage(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.center {
  .tabSwitch {
    width: 50%;
    margin-top: 10rpx;
  }
  .switchPage {
    overflow: scroll;
  }
}
</style>
