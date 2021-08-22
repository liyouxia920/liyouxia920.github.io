<template>
    <view>
        <!-- 默认 default -->
        <uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
        <!-- 列表 list ，显示左侧图标 -->
        <uni-data-checkbox mode="list" icon="left" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
        <!-- 列表 list ，显示右侧图标 -->
        <uni-data-checkbox mode="list" icon="right" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
        <!-- 按钮 button -->
        <uni-data-checkbox mode="button" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
        <!-- 标签 tag -->
        <uni-data-checkbox mode="tag" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
    </view>
</template>


<script>
	export default {
	    data() { 
	        return {
	            value: 0,
	            range: [
	              { value: 0, text: "男" },
	              { value: 1, text: "女" },
	            ],
	        }
	    },
	    methods: {
	        change(e){
	            console.log('e:',e);
	        }
	    }
	}
</script>

<style>

</style>
