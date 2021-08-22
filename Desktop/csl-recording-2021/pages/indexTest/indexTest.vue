<template>
  <view class="container">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>

    <view class="tabSwitch">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-height="12"
        bar-width="80"
        active-color="#333333"
        inactive-color="#606266"
        font-size="50"
        height="120"
      ></u-tabs>
    </view>
    <view class="centerContainer">
      <view class="searchContainer">
        <u-search
          :animation="true"
          placeholder=""
          height="90"
          class="input"
        ></u-search>
      </view>
      <view class="listContainer">
        <u-index-list
          :scrollTop="scrollTop"
          :offset-top="`${iStatusBarHeight * 2}`"
        >
          <view v-for="(item, index) in indexList" :key="index">
            <u-index-anchor :index="item" />
            <view class="list-cell"> 列表1 </view>
            <view class="list-cell"> 列表2 </view>
            <view class="list-cell"> 列表3 </view>
          </view>
        </u-index-list>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      iStatusBarHeight: 25,
      list: [
        {
          name: "词组",
        },
        {
          name: "句子",
        },
      ],
      current: 0,
      scrollTop: 0,
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },

  methods: {
    onPageScroll(e) {
      this.scrollTop = e.scrollTop;
    },
    change(index) {
      this.current = index;
      console.log(this.current);
      if (this.current === 0) {
        this.isWords = true;
        this.isSentences = false;
      } else {
        this.isWords = false;
        this.isSentences = true;
      }
    },
  },
  onLoad() {
    this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
  },
};
</script>

<style lang="scss" scoped>
.container {
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    background-color: #f8f8f8;

    .top_view {
      height: var(--status-bar-height);
      width: 100%;
      position: fixed;
      background-color: #f8f8f8;
      top: 0;
      z-index: 999;
    }
  }

  .tabSwitch {
    // border: solid 2px blue;
    width: 40%;
  }
  .centerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .searchContainer {
      margin-top: 20rpx;
      width: 95%;
      display: flex;
      align-items: center;
      // border: solid 2px green;
    }

    .listContainer {
      margin-top: 20rpx;
      width: 96%;
      .list-cell {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 24rpx;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
      }
    }
  }
}
</style>
