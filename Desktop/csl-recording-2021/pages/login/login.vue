<template>
	<view>
		<view class="img">
		        <image src="https://www.z4a.net/images/2021/08/23/msg.png" />
		      </view>
		      <view class="div-tel">
		        <span>+86</span><input class="input-tel" type="number" placeholder="请输入手机号"/>
		      </view>
		      <view class="div-yanzhengma">
		            <input type="number"  class="input-yanzhengma" id="yidong" placeholder="请输入验证码"/>
		            <button>获取验证码</button>
		      </view>
		      <button id="botton-login">登录</button>
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
  .img{
      border: 1px solid white;
      width:100%;
      height:500px;

  }
  .img img{
      display: block;
      width:50%;
      margin: 25% auto;
  }
  span{
    color: #7F8C8D;
    font-size: 80%;
  }
  .div-tel{
    width: 80%;
    margin: 0 auto;
    padding: 1%;
    border-bottom: 1px solid #AAAAAA;
  }
  .div-tel .input-tel{
    text-align: center;
    width: 80%;
    color:#7F8C8D;
    display: inline-block;
    font-size: 80%;

  }


  .div-yanzhengma{
    margin: 0 auto;
    padding: 1%;
    width: 80%;

  }

    .div-yanzhengma .input-yanzhengma {
    width: 100%;
    color:#7F8C8D;
    display: inline-block;
    font-size: 80%;
    text-align: center;
    margin-bottom: 10%;

  border-bottom: 1px solid #AAAAAA;
    padding: 1%;
  }
  .div-yanzhengma button{
    width: 40%;
  }
  .div_yanzhengma #yidong{
    margin-top: 3%;
  }

  #botton-login{
    margin: 10% auto;
    width: 80%;

  }

</style>
