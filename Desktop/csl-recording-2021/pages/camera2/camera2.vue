<template>
    <view>
        <camera device-position="back" flash="off" style="width: 100%;height: 400upx;">
            
        </camera>
        <button type="default" @tap="TakePhoto">拍照</button>
        <image :src="photoSrc" mode="">预览</image>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                photoSrc:''
            }
        },
        onLoad() {//监听页面加载
            
        },
        methods:{
            TakePhoto:function(){
                const camera = uni.createCameraContext() //创建照相机对象
                camera.takePhoto({//实现拍照功能
                    quality:'high', //high 高质量成像、 normal 普通质量、row 低质量
                    success: (res) => {
                        console.log('拍照成功',res)
                        this.photoSrc = res.tempImagePath
                    }
                })
            }
        }
    }
</script>
