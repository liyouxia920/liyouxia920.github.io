<template>
	<!-- 相机拍照 -->
	<view class="" v-if="ifPhoto">
	    <!-- 相机 -->
	    <camera :device-position="convert" flash="off" @error="error" class="camera">    </camera>
	    <!-- 操作 -->
	    <view class="padding bottom_code flex align-center justify-between">
	    <!-- 返回 -->
	        <view class="code_button" @click="back">
	            <image mode="aspectFill"></image>
	        </view>
	        <!-- 拍照 -->
	        <view class="code_button" @click="takePhoto">
	            <image mode="aspectFill"></image>
	        </view>
	        <!-- 切换摄像头 -->
	        <view class="code_button" @click="showConvert">
	            <image mode="aspectFill"></image>
	        </view>
	    </view>
	</view>
	<!-- 照片查看 -->
	<view class="" v-else>
	    <view class="img_code flex align-center justify-center">
	        <image :src="src" mode=""></image>
	    </view>
	    <!-- 操作 -->
	    <view class="padding margin-top flex align-center">
	        <button class="cu-btn round bg-green lg" style="width: 350rpx;" @click="anew">重新拍摄</button>
	        <button class="cu-btn round bg-yellow lg text-white margin-left" style="width: 350rpx;" @click="uploading">上传</button>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 //true 拍照 false 查看
				    ifPhoto: true,
				    //照片
				    src: null,
				    //前置或后置摄像头，值为front, back
				    convert: 'front'
			}
		},
		methods: {
			takePhoto() {
			    const ctx = uni.createCameraContext();
			    ctx.takePhoto({
			        quality: 'high',
			        success: (res) => {
			            console.log(res);
			            this.src = res.tempImagePath
			            if (this.src != null) {
			                    this.ifPhoto = false
			            }
			        }
			    });
			},
			//摄像头启动失败
			error(e) {
			    console.log(e.detail);
			},
			//切换摄像头
			showConvert() {
			    if (this.convert == 'front') {
			        // 后置
			        this.convert = 'back'
			    } else {
			        // 前置
			        this.convert = 'front'
			    }
			},
			//返回
			back() {
			    uni.navigateBack({
			        delta: 1
			    })
			},
			//重新
			anew() {
			    this.ifPhoto = true
			},
			//上传
			uploading() {
			    console.log('上传');
			}
		}
	}
</script>

<style lang="scss">
// 相机
.camera {
    width: 100%;
    height: 100vh;
}

//操作
.bottom_code {
    position: fixed;
    bottom: 10rpx;
    left: 0;
    width: 100%;
    height: 120rpx;
    // background-color: #1CA6EC;
    
    .code_button {
        width: 90rpx;
        height: 90rpx;

        // border-radius: 50%;
        image {
            width: 100%;
            height: 100%;
        }
    }
}
.img_code {
    width: 100%;
    height: 80vh;
    padding-top: 180rpx;
    
    image {
        width: 100%;
        height: 100%;
    }
}
</style>
