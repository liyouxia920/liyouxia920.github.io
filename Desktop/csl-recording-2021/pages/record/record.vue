<template>
  <view class="record">
    <view class="nav">
      <uni-nav-bar
        left-icon="back"
        right-icon="reload"
        statusBar="true"
        shadow="true"
        @clickLeft="tovideoSample"
      >
      </uni-nav-bar>
    </view>
    <!-- 倒计时区 -->
    <view class="countDown">
      <view v-if="this.time > 0" class="cleBorder">
        {{ time }}
      </view>
      <view v-else>
        <!-- 
          <camera
          device-position="back"
          flash="off"
          @error="error"
          style="width: 100%; height: 300px"
        ></camera> 
        -->
      </view>
    </view>

    <!-- 开始录制的按钮 -->
    <view class="bottomBtn">
      <view class="leftBtn" v-show="isStopped" @tap="modalCancelOpened">
        <view class="at-icon-btm at-icon">
          <u-icon name="close"></u-icon>
        </view>
      </view>
      <view class="startBtn">
        <view v-if="this.time > 0" class="startBtn startBtnBorder">开始录制</view>
        <view
          class="at-icon at-icon-center"
          v-else-if="this.time === 0 && !isStopped"
          @tap="stopRecord"
        >
          <u-icon class="startBtn startBtnBorder at-icon at-icon-center" name="pause-circle"></u-icon>
        </view>
        <view v-else @tap="stopRecord">
          <u-icon class="startBtn startBtnBorder at-icon at-icon-center" name="play-circle"></u-icon>
        </view>
      </view>
      <view class="rightBtn" v-show="isStopped" @tap="modalConfirmOpened">
        <view class="at-icon-btm at-icon">
          <u-icon name="checkbox-mark"></u-icon>
        </view>
      </view>
    </view>

    <!-- 两个模态框 -->
    <view class="cancelModal">
      <u-modal
        cancel-text="再想想"
        confirm-text="确认"
        :showCancelButton="true"
        :showTitle="false"
        content="当前视频未上传，确认放弃录制？"
        v-model="setCancelIsOpened"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      >
      </u-modal>
    </view>
    <view class="confirmModal">
      <u-modal
        cancel-text="再想想"
        confirm-text="确认"
        :showCancelButton="true"
        :showTitle="false"
        content="确认上传？"
        v-model="setConfirmlIsOpened"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      >
      </u-modal>
    </view>
  </view>
</template>

<script>
import uniNavBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue";
export default {
  data() {
    return {
      msg: "Hello world!",
      show: false,
      time: 0,
      isStopped: false,
      setCancelIsOpened: false,
      setConfirmlIsOpened: false,
      readyForPlay: false,
      // src: "",
    };
  },
  components: {
    uniNavBar,
  },
  methods: {
    // uniapp APP端尝试内嵌相机
    // takePhoto() {
    //   const ctx = uni.createCameraContext();
    //   ctx.takePhoto({
    //     quality: "high",
    //     success: (res) => {
    //       this.src = res.tempImagePath;
    //     },
    //   });
    // },
    // error(e) {
    //   console.log(e.detail);
    // },
    handleClick() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    },
    tovideoSample() {
      console.log("点击了返回按钮");
      // 页面跳转有错误
      console.log(this.time);
      this.isStopped = true;
      if (this.time) {
        (this.readyForPlay = false),
          uni.reLaunch({
            url: "../videoSample/videoSample",
          });
        console.log(this.time);
      } else {
        // console.log("出A模态框");
        this.setCancelIsOpened = !this.setCancelIsOpened;
      }
    },
    stopRecord() {
      // console.log("触发了stop按钮");
      this.isStopped = !this.isStopped;
    },
    modalCancelOpened() {
      this.setCancelIsOpened = !this.setCancelIsOpened;
    },
    modalConfirmOpened() {
      this.setConfirmlIsOpened = !this.setConfirmlIsOpened;
    },
    handleCancel() {
      this.setCancelIsOpened = false;
      this.setConfirmlIsOpened = false;
    },
    handleConfirm() {
      this.setCancelIsOpened = false;
      this.setConfirmlIsOpened = false;

      uni.reLaunch({
        url: "../videoSample/videoSample",
      });
    },
    uploadConfirm() {
      console.log("点击了确认上传按钮");
      // 再补充上传成功的加载提示页面以及对应接口
    },
  },
  mounted() {
    this.time = 5;
    let interval = setInterval(() => {
      this.time--;
      if (this.time === 0 && this.isStopped === false) {
        console.log("录制视频开始了");
        this.readyForPlay = true;
        if (this.readyForPlay) {
          var self = this;
          uni.chooseVideo({
            count: 1,
            sourceType: ["camera", "album"],
            camera: "front",
            maxDuration: 60,
            success: function (res) {
              self.src = res.tempFilePath;
            },
          });
        }
        clearInterval(interval);
      }
    }, 1000);
  },
  beforeDestroy() {
    console.log("触发了destroyed");
  },
};
</script>

<style lang="less" scoped>
.record {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .nav {
    height: 20vh;

  }

  .countDown {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: solid 2px red;
    height: 70vh;

    .cleBorder {
      width: 40vw;
      height: 40vw;
      border-radius: 50%;
      border: solid 2px #7f8c8d;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40vw;
      color: #7f8c8d;
    }
  }

  .bottomBtn {
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .startBtn {
      width: 25vw;
      height: 25vw;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .startBtnBorder {
      width: 25vw;
      height: 25vw;
      border: solid 2px #2f3640;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .leftBtn {
      border: solid 6px #2f3640;
      width: 18vw;
      height: 18vw;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .rightBtn {
      border: solid 6px #2f3640;
      width: 18vw;
      height: 18vw;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .at-icon {
      font-size: 15vw;
    }

    .at-icon-center {
      font-size: 30vw;
    }
    .at-icon-btm {
      font-size: 9vw;
    }
  }
}
</style>
