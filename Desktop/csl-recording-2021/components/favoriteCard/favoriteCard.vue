<template>
  <view class="bigBox">
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent">每天早上我们一起去跑步。</view>
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent">我有许多朋友，其中既有健听人，也有聋人。</view>
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent">爱是我们共同的语言。</view>
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent"
        >今天是我妹妹的生日，我买了个大蛋糕，想给她一个惊喜。</view
      >
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent"
        >目前看来不算严重，但是尽快治疗，不能拖延，平时饮食清淡，多休息，不要抽烟喝酒。</view
      >
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent"
        >我的兴趣爱好挺多的，比如看书、上网、拉小提琴、旅游等等。</view
      >
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent"
        >我还喜欢逛街，买点东西、喝喝咖啡什么的。对了，你喜欢喝咖啡吗？</view
      >
    </view>
    <view class="favoriteContainer" @tap="tovideoSample">
      <view class="wordsContent">好的，再联系！</view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    },
    tovideoSample() {
      uni.reLaunch({
        url: "../videoSample/videoSample",
      });
    },
  },
};
</script>

<style lang="less">
.bigBox {
  .favoriteContainer {
    margin: 3% 5%;
    display: flex;
    align-items: center;
    height: 14vh;
    box-shadow: 4rpx 4rpx 4rpx 2rpx rgba(0, 0, 0, 0.5);
    background-color: rgb(242, 242, 242);
    border-radius: 20rpx;
    .wordsContent {
      margin: auto 10%;
      font-weight: bold;
      font-size: 30rpx;
      color: #333;
      // 假设文本溢出
      overflow: scroll;
    }
  }
}
</style>
