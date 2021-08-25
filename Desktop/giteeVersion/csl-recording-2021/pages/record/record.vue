<template>
  <view class="record">
    <view class="nav">
      <uni-nav-bar
        leftIcon="closeempty"
        rightIcon="checkmarkempty"
        statusBar="true"
        :border="false"
        @clickLeft="clickLeft"
        @clickRight="clickRight"
        backgroundColor="#000000"
        color="#ffffff"
      >
      </uni-nav-bar>
    </view>
    <!-- 视频回放区 -->

    <video
      :src="videoPlaybackSrc"
      @error="videoErrorCallback"
      controls
      class="videoPlayback"
    ></video>

    <u-top-tips ref="errNetwork"></u-top-tips>
  </view>
</template>

<script>
import uniNavBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
export default {
  data() {
    return {
      videoPlaybackSrc: "",
    };
  },
  components: {
    uniNavBar,
  },
  // 也可以考虑使用onShow
  onLoad(options) {
    this.videoPlaybackSrc = options.videoPlaybackSrc;
  },
  methods: {
    videoErrorCallback(e) {
      this.$refs.errNetwork.show({
        title: "网络资源请求错误，请重试",
        type: "error",
      });
    },
    clickLeft() {
      // #ifdef APP-PLUS
      uni.navigateTo({
        url: "/pages/popupCancel/popupCancel",
      });
      // #endif
    },
    clickRight() {
      uni.navigateTo({
        url: "/pages/popupConfirm/popupConfirm?videoUploadSrc=" + this.videoPlaybackSrc,
      });
    },
  },
  mounted() {},
  beforeDestroy() {
    console.log("触发了destroyed");
  },
};
</script>

<style lang="less" scoped>
.record {
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  .nav {
    width: 100vw;
  }

  .videoPlayback {
    height: 100vh;
    width: 100vw;
  }
}
</style>
