<template>
	<view>
		<view class="return">
		      <!-- 返回键 + 导航栏处理 -->
		    </view>
		    <view><h4>提现记录</h4></view>
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
		        
		
		
		      </table>
		    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.return {
  margin: 5%;
}
h4 {
  font-weight: 400;
  font-size: 90%;
  margin-left: 8%;
}
table {
  margin: 5% auto;
  width: 100%;
  padding: 5%;
}
th {
  background-color: #76b7bc;
  font-size: 80%;
  padding: 2%;
  font-weight: 400;
  width: 50%;
}
tr:nth-child(odd) {
  background-color: #bcd7da;
  font-size: 80%;
  text-align: center;
  width: 50%;
}

tr:nth-child(even) {
  font-size: 80%;
  background-color: #fff;
  padding: 1%;
  text-align: center;
  width: 50%;
}
</style>
