<template>
  <view>
    <view class="top">
      <h4>我的</h4>
      <div class="icon">
        <u-icon name="account" color="#2979ff" size="30"></u-icon>
      </div>
    </view>
    <view class="middle">
      <div class="img-circle"></div>
      <div class="flex-user-change">
        <div class="user-name">用户名</div>
        <div class="change-info" @click="toChangeInfo">修改基本信息&gt;</div>
      </div>
    </view>
    <view class="bottombar">
      <view class="bottom">
        <div class="expires">
          <p>有效工时</p>
          <span>120min</span>
        </div>
        <div class="money">
          <p>可提现</p>
          <span>¥10</span>
        </div>
      </view>
      <button class="button_exit">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
	  toChangeInfo() {
		  uni.navigateTo({
		  	url:"../myRecordChangeInfo/myRecordChangeInfo"
		  })
	  }
  },
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;

  margin: 5% 5%;
  margin-top: 8%;
}
h4 {
  font-weight: 400;
}
.middle {
  display: flex;
  height: 180px;
  padding-bottom: 5%;
  padding-top: 5%;
}
.middle .img-circle {
  width: 25%;
  height: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 50%;
  margin-left: 10%;
  margin-right: 10%;
}
.middle .flex-user-change {
  display: flex;
  flex-direction: column;
}
.middle .flex-user-change .user-name {
  font-size: 100%;
}
.middle .flex-user-change .change-info {
  margin-top: 20%;
  font-size: 80%;
  color: #bdc3c7;
}
.bottombar {
  height: 700px;
  background-color: #f2f2f2;
}
.bottom {
  display: flex;
}
.bottom .expires,
.money {
  background-color: #ffffff;
}
.bottom div {
  margin: 5%;
  width: 100%;
  height: 25%;
  border: 1px solid #000000;
  border-radius: 20px;
  padding-left: 5%;
}
span {
  color: #7f7f7f;
  font-size: 130%;
  float: right;
  padding-right: 20%;
}
p {
  font-size: 90%;
}
.bottombar .button_exit {
  margin-top: 5%;
  width: 90%;
  border-radius: 20px;
  border: 1px solid #2f3640;
}
</style>
