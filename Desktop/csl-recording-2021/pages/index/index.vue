<template>
  <view class="container">
    <view class="tabSwitch">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-height="12"
        bar-width="60"
        active-color="#333333"
        inactive-color="#606266"
        font-size="45"
        height="120"
      ></u-tabs>
    </view>
    <view class="centerContainer">
      <view class="searchContainer">
        <u-search :animation="true" placeholder="" height="90"></u-search>
      </view>
    </view>
    <view class="listContainer">
      <view v-if="isWords">
        <u-index-list :scrollTop="scrollTop">
          <view v-for="(item, index) in indexList" :key="index">
            <u-index-anchor :index="item" />
            <view class="list-cell"> 词组1 </view>
            <view class="list-cell"> 词组2 </view>
            <view class="list-cell"> 词组3 </view>
          </view>
        </u-index-list>
      </view>
      <view v-if="isSentences">
        <u-index-list :scrollTop="scrollTop">
          <view v-for="(item, index) in indexList" :key="index">
            <u-index-anchor :index="item" />
            <view class="list-cell"> 句子1 </view>
            <view class="list-cell"> 句子2 </view>
            <view class="list-cell"> 句子3 </view>
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
      isWords: true,
      isSentences: false,
    };
  },
  components: {},
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
};
</script>

<style lang="scss" scoped>
.container {
  .tabSwitch {
    width: 40%;
    margin-top: 10rpx;
  }

  .centerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .searchContainer {
      margin-top: 20rpx;
      width: 90%;
      display: flex;
      align-items: center;
    }
  }
  .listContainer {
    margin-top: 20rpx;
    width: 95%;
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
</style>
