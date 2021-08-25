<template>
  <view @click="close" class="mask">
    <view @click.stop="onClick">
      <u-modal
        cancel-text="再想想"
        confirm-text="确认"
        :showCancelButton="true"
        :showTitle="false"
        content="当前视频未上传，确认放弃录制？"
        v-model="setCancelIsOpened"
        @cancel="close"
        @confirm="handleConfirmClose"
      >
      </u-modal>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return { setCancelIsOpened: true };
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
	handleConfirmClose() {
      uni.reLaunch({
        url: "../videoSample/videoSample",
      });
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
