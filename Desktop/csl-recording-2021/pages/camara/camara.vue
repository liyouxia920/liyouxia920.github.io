<template>
	<view>
		<block v-if="authCamera">
			<camera :device-position="devPosition" @initdone="init" flash="off" style="width: 100%;" :style="{height:viewH-btmH+'px'}"></camera>
		</block>
		<block v-else>
			<view class="defaultBgm" :style="{height:viewH-btmH+'px'}"></view>
		</block>
		<!-- 摄像头区域 -->
		
		<!-- 底部区域 -->
		<view class="view_cont_btm flex_row">
			<view class="cont_box" @click="openAlbum">相册</view>
			<view class="photobtn">
				<button @click="takePhoto"></button>
			</view>
			<view class="cont_box" @click="switchPosition">切换</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				devPosition: 'back', //打开的摄像头位置
				viewH: 0, //页面整体高度
				btmH: 0, //底部高度
				authCamera: false, //检测摄像头是否授权，如果没有则不显示camera
			}
		},
		onLoad(option) {
			
		},
		onShow() {
			var that = this;
			// 检测用户是否授权打开摄像头
			uni.getSetting({
				success(e) {
					console.log(e)
					if(!e.authSetting['scope.camera']){
						uni.showModal({
							title: '提示',
							content: '需要您授权打开摄像头',
							success(e) {
								if (e.confirm) {
									uni.openSetting({
										success(res) {
											console.log(res)
											if(res.authSetting['scope.camera']){
												that.authCamera = true
											}else{
												uni.showToast({
													title: '未授权',
													icon:'none'
												})
											}
										}
									})
								}else{
									uni.showToast({
										title: '未授权',
										icon:'none'
									})
								}
								
							}
						})
					}else{
						that.authCamera = true
					}
				}
			})
		},
		created() {
			
			var that = this;
			var h = uni.getSystemInfoSync().windowHeight;
			this.viewH = h;
			let info = uni.createSelectorQuery().select(".view_cont_btm");
	　　　   info.boundingClientRect(function(data) { //data - 各种参数
				that.btmH = data.height
	　　    }).exec()
		},
		methods: {
			// 点击相册
			openAlbum() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						uni.previewImage({
							urls: res.tempFilePaths,
							
						})
					}
				})
			},
			// 点击切换摄像头
			switchPosition() {
				if(this.devPosition == 'back'){
					this.devPosition = 'front'
				}else{
					this.devPosition = 'back'
				}
			},
			// 点击拍照
			takePhoto() {
				uni.showLoading({
					title: '识别中..'
				})
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						var imgs = [res.tempImagePath];
						
						uni.previewImage({
							urls: imgs,
							success() {
								uni.hideLoading();
							}
						})
						
						this.src = res.tempImagePath
					}
				});
			},
			// 相机初始化完成时触发
			init(e){
				console.log('初始化')
			}
		}
	}
</script>

<style>
	.defaultBgm{
		background: #4AA352;
	}
	.view_cont_btm{
		padding: 120rpx 60rpx;
		justify-content: space-between;
		align-items: center;
	}
	.cont_box{
		border: 1px solid #4AA352;
		color: #4AA352;
		padding: 20rpx;
		font-size: 28rpx;
	}
	.photobtn{
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		border: 1px solid #4AA352;
		padding: 10rpx;
		box-sizing: border-box;
	}
	.photobtn button{
		width: 100%;
		height: 100%;
		margin: 0;
		background: linear-gradient(to right, #5eab52, #9ac454);
		border-radius: 50%;
	}
</style>


