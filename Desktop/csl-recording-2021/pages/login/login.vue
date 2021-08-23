<template>
  <view class="loginContainer">
    <image src="https://z3.ax1x.com/2021/08/23/hCsJJS.png" mode="aspectFit" />

    <view class="inputContainer">
      <view class="div-tel">
        <view class="areaCode">+86</view>
        <uni-easyinput
          class="input-tel"
          v-model="editData.tel"
          type="number"
          placeholder="请输入手机号"
        />
      </view>
      <view class="verificationCode">
        <uni-easyinput
          v-model="editData.code"
          type="number"
          class="input-code"
          placeholder="请输入验证码"
        />

        <view class="getCode">
          <u-toast ref="uToast"></u-toast>
          <u-verification-code
            :seconds="seconds"
            ref="uCode"
            @change="codeChange"
          ></u-verification-code>
          <!-- @end="end"
            @start="start" -->
          <u-button @tap="getCode" class="codeBtn">{{ tips }}</u-button>
        </view>
      </view>
    </view>

    <view class="loginBtn">
      <u-button @click="login">登录</u-button>
      <view class="otherBtn">
        <view class="register" @click="showAgreement">点我注册</view>
        <view class="forgetPassword">忘记密码</view>
      </view>
    </view>

    <u-modal
      v-model="show"
      :title-style="{ color: 'red' }"
      @confirm="modalConfirm"
      :async-close="true"
      :show-title="false"
    >
      <view class="slot-content">
        <rich-text :nodes="content"></rich-text>
      </view>
    </u-modal>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 临时字段，出接口文档以后改
      editData: {
        tel: undefined,
        code: undefined,
      },

      tips: "",
      // refCode: null,
      seconds: 60,
      show: false,
      content: `
					<strong>天理聋院无障碍科技研发团队</strong><br>
          <strong>用户协议1.0.0</strong><br>
					在使用本产品之前，请仔细阅读以下协议。<br>(此处省略若干字)<br>
          请仔细阅读《用户协议》
				`,
    };
  },
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      // 先校验电话号码
      let phoneReg = /^1[3456789]\d{9}$/;
      if (!phoneReg.test(this.editData.tel)) {
        console.log(this.editData.tel);
        console.log(!phoneReg.test(this.editData.tel));
        plus.nativeUI.toast("手机号格式不正确哦", { verticalAlign: "top" });
        this.editData.tel = undefined;
      } else {
        if (this.$refs.uCode.canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: "正在获取验证码",
          });
          setTimeout(() => {
            uni.hideLoading();
            // 这里此提示会被this.start()方法中的提示覆盖
            this.$u.toast("验证码已发送");
            // 通知验证码组件内部开始倒计时
            this.$refs.uCode.start();
          }, 2000);
        } else {
          this.$u.toast("请等倒计时结束后再发送");
        }
      }
    },

    login() {
      if (this.editData.tel === undefined || this.editData.tel === null) {
        plus.nativeUI.toast("请输入手机号", { verticalAlign: "top" });
      } else {
        // 4位或6位 因为会自动调用数字键盘，所以校验位数必要性在于验空。
        let codeReg = /^\d{4}$/;
        if (!codeReg.test(this.editData.code)) {
          plus.nativeUI.toast("请输入验证码哦", { verticalAlign: "top" });
          // 还需校验验证码数值
        } else {
          // 登录机制
          // 跳转页面
          setTimeout(() => {
            uni.reLaunch({
              url: "../index/index",
            });
          }, 2000);
        }
      }
    },
    showAgreement() {
      this.show = true;
    },
    modalConfirm() {
      setTimeout(() => {
        this.show = false;
        uni.reLaunch({
          url: "../selectCharacter/selectCharacter",
        });
      }, 2000);
    },
    // end() {
    //   this.$u.toast("倒计时结束");
    // },
    // start() {
    //   this.$u.toast("倒计时开始");
    // },
  },
};
</script>

<style lang="less" scoped>
.loginContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  image {
    will-change: transform;
    width: 60vw;
    margin-top: 10%;
  }
  .inputContainer {
    margin-top: 10%;
    width: 80vw;
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 10%;
    .div-tel {
      display: flex;
      margin-bottom: 5%;
      .areaCode {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        color: rgba(189, 195, 199, 1);
        font-weight: bold;
        font-size: 36rpx;
      }
      .input-tel {
        flex: 5;
      }
    }

    .verificationCode {
      display: flex;
      // 暂时使用2：1
      .input-code {
        flex: 2;
      }
      .getCode {
        flex: 1;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        .codeBtn {
          // 稍有不对齐的状态
          width: 90%;
          height: 100%;
        }
      }
    }
  }
  .loginBtn {
    width: 80vw;
    .otherBtn {
      margin-top: 2%;
      display: flex;
      justify-content: space-between;
      padding: 2%;
      color: #333333;
      font-size: 30rpx;
      .register {
        color: #409eff;
        font-weight: 600;
      }
    }
  }
  .slot-content {
    padding: 2%;
    text-align: center;
    font-size: 30rpx;
    color: #333;
    padding-left: 30rpx;
  }
}
</style>
