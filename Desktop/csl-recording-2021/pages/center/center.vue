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
      <underwayCard v-if="isUnderway"></underwayCard>
      <favoriteCard v-if="isFavorite"></favoriteCard>
    </view>
  </view>
</template>

<script>
import underwayCard from "../../components/underwayCard/underwayCard.vue";
import favoriteCard from "../../components/favoriteCard/favoriteCard.vue";
export default {
  data() {
    return {
      show: false,
      isUnderway: true,
      isFavorite: false,
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
  methods: {
    changePage(index) {
      this.current = index;
      if (this.current === 0) {
        this.isUnderway = true;
        this.isFavorite = false;
      } else {
        this.isUnderway = false;
        this.isFavorite = true;
      }
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
