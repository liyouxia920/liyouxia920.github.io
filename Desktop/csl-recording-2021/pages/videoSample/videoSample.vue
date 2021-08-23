<template>
  <view class="videoSample">
    <!-- 导航栏 -->
    <view class="nav">
      <!-- 点击事件处理收藏状态 -->
      <uni-nav-bar
        left-icon="back"
        :right-icon="`star${this.isChecked}`"
        statusBar="true"
        shadow="true"
        @clickLeft="toCenter"
        @clickRight="onClickStar"
      >
      </uni-nav-bar>
    </view>

    <!-- 演示视频播放区 -->
    <view class="videoContainer u-flex u-row-center">
      <!-- 可加视频封面 -->
      <video
        id="myVideo"
        src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
        @error="videoErrorCallback"
        controls
        class="signLanguageVideo"
      ></video>
    </view>

    <!-- 词句提示区 -->
    <view class="wordsContainer">
      <view class="wordsContent">一个词语或一个句子</view>
    </view>

    <!-- 开始录制按钮 -->
    <view class="bottomBtn" @tap="torecord">
      <view class="startBtn">开始录制</view>
    </view>
  </view>
</template>

<script>
import uniNavBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
export default {
  data() {
    return {
      src: "",
      time: 0,
      isChecked: "",
    };
  },
  components: {
    uniNavBar,
  },

  methods: {
    torecord() {
      // 处理方案 · 1
      // 手机设置定时的情况下直接调用uni.chooseVideo
      // 可以后续加一个模态框做提示
      var self = this;
      uni.chooseVideo({
        count: 1,
        sourceType: ["camera", "album"],
        camera: "front",
        maxDuration: 15,
        success: function (res) {
          self.src = res.tempFilePath;
        },
      });
    },
    toCenter() {
      console.log("toCenter");
      uni.reLaunch({
        url: "../center/center",
      });
    },
    videoErrorCallback(e) {
      uni.showModal({
        // content: e.target.errMsg,
        content: "网络资源请求错误，请重试",
        showCancel: false,
      });
    },
    onClickStar() {
      // 还需要结合接口动态考虑收藏与否的状态
      if (this.isChecked === "") {
        this.isChecked = "-filled";
        uni.showToast({
          title: "已添加至收藏夹",
          icon: "success",
          duration: 1500,
        });
      } else {
        this.isChecked = "";
        uni.showToast({
          title: "已从收藏夹移除",
          icon: "loading",
          duration: 300,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.videoSample {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .nav {
    height: 10vh;
    // border: solid 2px green;
  }

  .videoContainer {
    border-bottom: solid 2px #bdc3c7;
    flex: 1;
    .signLanguageVideo {
      width: 100%;
    }
  }

  .wordsContainer {
    // border: solid 2px yellowgreen;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .wordsContent {
      // border: solid 2px skyblue;
      font-size: 1.5em;
    }
  }

  .countDown {
    border: solid 2px red;
    display: none;
  }

  .bottomBtn {
    // border: solid 2px red;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .startBtn {
      border: solid 2px #2f3640;
      width: 25vw;
      height: 25vw;
      border-radius: 50%;
      font-size: 5vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
