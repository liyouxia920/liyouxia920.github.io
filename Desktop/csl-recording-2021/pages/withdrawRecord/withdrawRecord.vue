<template>
  <view>
    <!-- 暂时使用默认导航栏 -->
    <view class="title">提现记录</view>
    <view>
      <table width="200" border="0">
        <tr>
          <th>提现日期</th>
          <th>提现金额</th>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
		<tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
		<tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
        <tr>
          <td>2021-07-21</td>
          <td>¥ 10</td>
        </tr>
      </table>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.title {
  font-weight: bolder;
  font-size: 2em;
  margin: 5% 8%;
}
table {
  width: 100%;
}
th {
  background-color: rgba(189, 195, 199, 0.4);
  font-size: 30rpx;
  font-weight: 600;
  width: 50%;
  height: 5vh;
}
th:nth-child(1) {
  border-top-left-radius: 20rpx;
}
th:nth-child(2) {
  border-top-right-radius: 20rpx;
}
tr:nth-child(odd) {
  background-color: rgba(189, 195, 199, 0.4);
  font-size: 80%;
  font-size: 30rpx;
  text-align: center;
  width: 50%;
  height: 5vh;
}

tr:nth-child(even) {
  font-size: 80%;
  font-size: 30rpx;
  background-color: #fff;
  padding: 1%;
  text-align: center;
  width: 50%;
  height: 5vh;
}
</style>
