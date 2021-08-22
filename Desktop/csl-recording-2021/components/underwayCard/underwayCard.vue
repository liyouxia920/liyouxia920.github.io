<template>
  <!-- 效果测试 加一个大盒子 -->
  <view class="bigBox">
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent"
          >目前看来不算严重，但是尽快治疗，不能拖延，平时饮食清淡，多休息，不要抽烟喝酒。</view
        >
        <view class="auditStatus">审核未通过</view>
      </view>
      <view class="rightContainer">
        <!-- 条件渲染 -->
        <!-- <view class="similarity">相似度</view> -->
        <view class="recordAgain" @tap="tovideoSample">
          <view>重新录制</view>
        </view>
      </view>
    </view>
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent"
          >医生和护士要学点手语，如果遇到聋人来看病，可以派上用场。</view
        >
        <view class="auditStatus">待审核</view>
      </view>
      <view class="rightContainer"> </view>
    </view>
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent"
          >一食堂的饭菜好吃，但是比较贵；二食堂比较便宜，但是有点远。</view
        >
        <view class="auditStatus">审核未通过</view>
      </view>
      <view class="rightContainer">
        <!-- 条件渲染 -->
        <!-- <view class="similarity">相似度</view> -->
        <view class="recordAgain" @tap="tovideoSample">
          <view>重新录制</view>
        </view>
      </view>
    </view>
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent">本科毕业后，你打算考研究生吗？</view>
        <view class="auditStatus">审核通过</view>
      </view>
      <view class="rightContainer">
        <view class="similarity">
          <view>相似度</view>
          <view class="similarIdx">90%</view>
        </view>
      </view>
    </view>
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent">你叫什么名字？</view>
        <view class="auditStatus">审核通过</view>
      </view>
      <view class="rightContainer">
        <!-- 条件渲染 -->
        <view class="similarity">
          <view>相似度</view> <view class="similarIdx">95%</view></view
        >
      </view>
    </view>
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent">喜欢啊。什么时候我们俩一起去逛街吧？</view>
        <view class="auditStatus">审核通过</view>
      </view>
      <view class="rightContainer">
        <!-- 条件渲染 -->
        <view class="similarity">
          <view>相似度</view> <view class="similarIdx">87%</view></view
        >
      </view>
    </view>
    <view class="underwayContainer">
      <view class="leftContainer">
        <view class="wordContent"
          >今天是我妹妹的生日，我买了个大蛋糕，想给她一个惊喜。</view
        >
        <view class="auditStatus">审核通过</view>
      </view>
      <view class="rightContainer">
        <!-- 条件渲染 -->
        <view class="similarity">
          <view>相似度</view> <view class="similarIdx">80%</view></view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
  .underwayContainer {
    margin: 3% 5%;
    display: flex;
    height: 14vh;
    box-shadow: 4rpx 4rpx 4rpx 2rpx rgba(0, 0, 0, 0.5);
    background-color: rgb(242, 242, 242);
    border-radius: 20rpx;
    .leftContainer {
      display: flex;
      flex-direction: column;
      flex: 3;
      padding: 3%;
      .wordContent {
        display: flex;
        flex: 3;
        font-weight: bold;
        font-size: 28rpx;
        color: #333;
        // 使用flex布局后的文本溢出处理
        overflow: scroll;
      }
      .auditStatus {
        display: flex;
        flex: 1;
        font-size: 24rpx;
      }
    }
    .rightContainer {
      height: 100%;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      .recordAgain {
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px rgba(189, 195, 199, 1);
        background-color: rgb(255, 255, 255);
        border-radius: 20rpx;
        width: 80%;
        height: 50%;
        font-size: 26rpx;
        color: #333;
      }
      .similarity {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        height: 60%;
        color: rgba(189, 195, 199, 1);
        font-weight: bold;
        .similarIdx {
          font-size: 42rpx;
        }
      }
    }
  }
}
</style>
