<template>
  <view @click="close" class="mask">
    <view @click.stop="onClick">
      <u-modal
        cancel-text="再想想"
        confirm-text="确认"
        :showCancelButton="true"
        :showTitle="false"
        content="确认上传？"
        v-model="setConfirmlIsOpened"
        @cancel="close"
        @confirm="handleConfirmCheckMark"
        :async-close="true"
      >
      </u-modal>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return { setConfirmlIsOpened: true, videoUploadSrc: "" };
  },
  onLoad(options) {
    this.videoUploadSrc = options.videoUploadSrc;
    console.log("蒙层:", this.videoUploadSrc);
  },
  methods: {
    onClick(e) {
      // #ifdef APP-NVUE
      e.stopPropagation();
      // #endif
    },
    close() {
      uni.navigateBack();
    },
    handleConfirmCheckMark() {
      setTimeout(() => {
        this.setConfirmlIsOpened = false;
        // 加一个上传，补充接口
        // 其实都得传参数，返回具体的那个视频
        uni.reLaunch({
          url: "../videoSample/videoSample",
        });
        uni.showToast({
          title: "上传成功，请等待审核",
          duration: 2000,
          icon: "none",
        });
      }, 2000);
    },
  },
};
</script>

<style>
page {
  background: transparent;
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
