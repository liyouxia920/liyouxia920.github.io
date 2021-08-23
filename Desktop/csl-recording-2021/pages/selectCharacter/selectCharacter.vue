<template>
  <view class="selectCharacter">
    <view class="pageContainer">
      <view class="title"> 请选择你的角色 </view>
      <view class="selector">
        <button
          v-for="(item, index) in tagList"
          :key="index"
          @click="selectRole(index)"
          :class="{ selected: flag == index }"
        >
          {{ item.roles }}
        </button>
      </view>
      <view class="enterBtn">
        <button class="enter" @click="selectRoleAlready()">进入</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      flag: -1,
      tagList: [
        {
          roles: "学习者",
        },
        {
          roles: "采集者",
        },
      ],
    };
  },
  methods: {
    selectRole(index) {
      this.flag = index;
    },
    selectRoleAlready() {
      if (this.flag === -1) {
        plus.nativeUI.toast("请选择一个角色哦", { verticalAlign: "top" });
      } else {
         uni.reLaunch({
          url: "../writeInfo/writeInfo",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* 考虑到跨端兼容，还是使用flex布局 */
.selectCharacter {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .pageContainer {
    height: 60vh;
    .title {
      color: #333;
      font-weight: 600;
      font-size: 2.2em;
      text-align: center;
      margin-bottom: 4vh;
    }
    .selector {
      width: 90vw;
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2%;
      font-weight: normal;
      margin-bottom: 6vh;
      > button {
        height: 36vh;
        width: 6em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .selected {
        color: royalblue;
        background-color: rgba(245, 246, 250, 1);
        border: solid 2px royalblue;
        font-weight: bolder;
      }
    }
    .enterBtn {
      font-weight: bolder;
      display: flex;
      align-items: center;
      .enter {
        width: 75vw;
        background-color: rgba(236, 240, 241, 1);
      }
    }
  }
}
</style>
