<template>
  <view class="profile">
    <view class="top">
      <view class="title">我的</view>
      <view>
        <u-icon name="account" size="80" @click="switchRolesTo"></u-icon>
      </view>
    </view>
    <view class="middle">
      <u-image width="220rpx" shape="circle" :src="src"></u-image>
      <view class="userArea">
        <view class="user-name">用户名</view>
        <view class="change-info" @click="toChangeInfo">修改基本信息&gt;</view>
      </view>
    </view>
    <view class="bottombar">
      <view class="bottom">
        <view class="expires">
          <view>有效工时</view>
          <view>120min</view>
        </view>
        <view class="money" @click="withdraw">
          <view>可提现</view>
          <view>¥10</view>
        </view>
      </view>
      <button class="button_exit">退出登录</button>
    </view>
    <view>
      <u-modal
        v-model="switchRole"
        @cancel="modalCancel"
        @confirm="modalConfirm"
        ref="uModal"
        :async-close="true"
        :show-cancel-button="true"
        content="是否切换为学习者？"
        :show-title="false"
      ></u-modal>
      <u-top-tips ref="uTips"></u-top-tips>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      switchRole: false,
      src: "https://cdn.uviewui.com/uview/example/fade.jpg",
    };
  },
  methods: {
    toChangeInfo() {
      uni.navigateTo({
        url: "../myRecordChangeInfo/myRecordChangeInfo",
      });
    },
    withdraw() {
      uni.navigateTo({
        url: "../withdrawRecord/withdrawRecord",
      });
    },
    switchRolesTo() {
      this.switchRole = true;
    },
    modalConfirm() {
      setTimeout(() => {
        this.switchRole = false;
        this.$refs.uTips.show({
          title: "已成功切换角色",
        });
      }, 1000);
    },
    modalCancel() {
      this.switchRole = false;
    }
  },
};
</script>

<style lang="less" scoped>
.profile {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top {
    margin: 2% 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 3%;
    background-color: #fff;
    .title {
      font-weight: bolder;
      font-size: 1.6em;
    }
  }
  .middle {
    margin-left: 3%;
    margin-right: 3%;
    display: flex;
    flex: 2;
    padding: 3%;
    background-color: #fff;
    .userArea {
      padding: 2%;
      margin-left: 40rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .user-name {
        font-size: 50rpx;
        font-weight: normal;
      }
      .change-info {
        font-size: 36rpx;
        color: rgba(189, 195, 199, 1);
      }
    }
  }
  .bottombar {
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
    background-color: rgba(189, 195, 199, 0.4);
    flex: 8;
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5% 10%;
      .expires {
        border: solid 1px rgba(52, 73, 94, 1);
        border-radius: 20rpx;
        width: 36vw;
        height: 14vh;
        background-color: #fff;
        padding: 2%;
        > :nth-child(1) {
          font-size: 40rpx;
        }
        > :nth-child(2) {
          font-size: 70rpx;
          font-weight: bolder;
          text-align: end;
          color: rgba(189, 195, 199, 1);
        }
      }
      .money {
        border: solid 1px rgba(52, 73, 94, 1);
        border-radius: 20rpx;
        width: 36vw;
        height: 14vh;
        background-color: #fff;
        padding: 2%;
        > :nth-child(1) {
          font-size: 40rpx;
        }
        > :nth-child(2) {
          font-size: 70rpx;
          font-weight: bolder;
          text-align: end;
          color: rgba(189, 195, 199, 1);
        }
      }
    }
    .button_exit {
      width: 80%;
      margin-top: 2vh;
    }
  }
}
</style>
