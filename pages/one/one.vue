<template>
	<!-- <view>
		{{one}}
	</view> -->
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ one1 }}</text>
		</view>
	</view>
</template>

<script>
import testing from '../../bin/testing.js';
export default {
	data() {
		return {
			one1: '我是第一个页面'
		};
	},
	methods: {},
	mounted() {
		console.log(testing);
		console.log(testing.validateTelphone("","",alert))
		
	},
	onLoad: function() {
		
	},
	// 页面切换后数据加载
	activated: function() {}
};
</script>

<style></style>
