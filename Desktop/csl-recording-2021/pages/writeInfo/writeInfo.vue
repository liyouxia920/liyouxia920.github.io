<template>
  <view class="writeInfo">
    <view class="infoTitle">
      <view class="text">填写基本信息</view>
    </view>
    <view class="basicForm">
      <uni-forms
        ref="writeInfoForm"
        :modelValue="formData"
        :rules="rules"
        class="uniForms"
      >
        <uni-forms-item label="姓名" name="name" class="uniItems">
          <uni-easyinput
            type="text"
            v-model="formData.name"
            placeholder="请输入姓名"
          />
        </uni-forms-item>
        <uni-forms-item label="性别" name="sex" class="uniItems">
          <uni-data-checkbox
            v-model="sexValue"
            :localdata="sexRange"
            @change="handleSexValue"
          >
          </uni-data-checkbox>
        </uni-forms-item>

        <uni-forms-item label="年龄" name="age" class="uniItems">
          <uni-easyinput
            type="number"
            v-model="formData.age"
            placeholder="请输入年龄"
          />
        </uni-forms-item>
        <uni-forms-item label="身份证号" name="cardID" class="uniItems">
          <uni-easyinput
            type="number"
            v-model="formData.cardID"
            placeholder="请输入身份证号"
          />
        </uni-forms-item>
        <uni-forms-item label="银行卡号" name="BCID" class="uniItems">
          <uni-easyinput
            type="number"
            v-model="formData.BCID"
            placeholder="请输入银行卡号"
          />
        </uni-forms-item>
        <uni-forms-item label="开户行" name="BankName" class="uniItems">
          <uni-easyinput
            type="text"
            v-model="formData.BankName"
            placeholder="请输入开户行"
          />
        </uni-forms-item>
        <uni-forms-item name="isConfirm" class="uniItems">
          <uni-data-checkbox
            class="uniItems"
            v-model="confirm"
            :localdata="confirmRange"
            @change="handleConfirmState"
            multiple
          >
          </uni-data-checkbox>
        </uni-forms-item>
      </uni-forms>
      <button @click="submitForm">提交审核</button>
    </view>
    <view>
      <u-modal
        v-model="show"
        @confirm="modalConfirm"
        ref="uModal"
        :async-close="true"
        content="提交成功，请等待审核"
        :show-title="false"
      ></u-modal>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      sexValue: undefined,
      confirm: [0],
      sexRange: [
        {
          value: 1,
          text: "男",
        },
        {
          value: 2,
          text: "女",
        },
      ],
      confirmRange: [
        {
          value: 1,
          text: "我已阅读并同意《用户协议》",
        },
      ],

      // 表单数据
      formData: {
        name: undefined,
        sex: undefined,
        age: undefined,
        cardID: undefined,
        BCID: undefined,
        BankName: undefined,
        isConfirm: [],
      },
      //   规则
      rules: {
        // 对name字段进行必填验证
        name: {
          rules: [
            {
              required: true,
              errorMessage: "*请填写完整信息",
            },
            {
              validateFunction: function (rule, value, data, callback) {
                let nameReg =
                  /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/;

                if (!nameReg.test(value)) {
                  callback("姓名格式不正确，请重新输入");
                }
                return true;
              },
            },
          ],
        },
        sex: {
          rules: [
            {
              required: true,
              errorMessage: "*请选择性别",
            },
          ],
        },
        age: {
          rules: [
            {
              required: true,
              errorMessage: "*请填写完整信息",
            },
            {
              validateFunction: function (rule, value, data, callback) {
                let ageReg = /^((1[0-5])|[1-9])?\d$/;
                if (!ageReg.test(value)) {
                  callback("年龄格式不正确，请重新输入");
                }
                return true;
              },
            },
          ],
        },
        cardID: {
          rules: [
            {
              required: true,
              errorMessage: "*请填写完整信息",
            },
            {
              validateFunction: function (rule, value, data, callback) {
                let cardIDReg =
                  /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

                if (!cardIDReg.test(value)) {
                  callback("身份证号格式不正确，请重新输入");
                }
                return true;
              },
            },
          ],
        },
        BCID: {
          rules: [
            {
              required: true,
              errorMessage: "*请填写完整信息",
            },
            {
              validateFunction: function (rule, value, data, callback) {
                let BCIDReg = /^([1-9]{1})(\d{14}|\d{18})$/;

                if (!BCIDReg.test(value)) {
                  callback("银行卡号格式不正确，请重新输入");
                }
                return true;
              },
            },
          ],
        },
        BankName: {
          rules: [
            {
              required: true,
              errorMessage: "*请填写完整信息",
            },
            {
              validateFunction: function (rule, value, data, callback) {
                let BankNameReg =
                  /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;

                if (!BankNameReg.test(value)) {
                  callback("开户行名格式不正确，请重新输入");
                }
                return true;
              },
            },
          ],
        },
        isConfirm: {
          // 暂时给后台传的是一个[1]
          rules: [
            {
              required: true,
              errorMessage: "*请确认《用户协议》",
            },
          ],
        },
      },
    };
  },
  onReady() {
    // 需要在onReady中设置规则
    this.$refs.writeInfoForm.setRules(this.rules);
  },
  methods: {
    handleSexValue(e) {
      this.sex = e.detail.value;
    },
    handleConfirmState() {
      this.isConfirm = !this.isConfirm;
      console.log("this.isConfirm: " + this.isConfirm);
    },
    submitForm() {
      this.$refs.writeInfoForm
        .validate()
        .then((res) => {
          console.log("表单数据信息：", res);
          this.show = true;
          //   uni.reLaunch({
          //     url: "../index/index",
          //   });
        })
        .catch((err) => {
          console.log("表单错误信息：", err);
        });
    },
    modalConfirm() {
      setTimeout(() => {
        this.show = false;
        uni.reLaunch({
          url: "../login/login",
        });
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.writeInfo {
  //   border: solid 2px red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .infoTitle {
    // border: solid 2px blue;
    height: 15vh;
    width: 90vw;
    display: flex;
    align-items: flex-end;
    padding-left: 2%;
    padding-bottom: 5%;
    .text {
      font-size: 2em;
      font-weight: 600;
    }
  }
  .basicForm {
    height: 85vh;
    padding-left: 2%;
    margin-top: 5%;
    width: 90vw;
    // border: solid 2px green;
    .uniForms {
      //   border: solid 1px blueviolet;
      .uniItems {
        // border: solid 1px brown;
        margin-bottom: 15rpx;
      }
    }
  }
}
</style>
