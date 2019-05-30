<template>
	<view>
		<headNavigation ref="head" :leftWords="true" :input="true" :rightIcon="true" :rightWords="true" />
		<text @click="goToIndex">{{ home }}</text>
		<text @click="getHead">获取内容</text>
		<text @click="getFeachData">获取接口数据</text>
	</view>
</template>

<script>
import headNavigation from '../../components/HeadNavigation/headNavigatiom.vue';
export default {
	components: {
		headNavigation
	},
	data() {
		return {
			home: '主页'
		};
	},
	methods: {
		goToIndex() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		getHead() {
			console.log(this.$refs.head.value);
		},
		getFeachData() {
			this.$axios(this.$baseUrl.shang, {
				img: this.$refs.head.value
			}).then(
				res => {
					console.log(res);
				},
				error => {
					console.log(error);
				}
			);
		}
	},
	onLoad: function(option) {
		console.log(this.$axios);
		//option为object类型，会序列化上个页面传递的参数
		console.log(this.$refs.head);
		// console.log(headNavigation);
		console.log(option.id); //打印出上个页面传递的参数。
	}
};
</script>

<style>
.title {
	position: fixed;
	top: 0;
	background-color: red;
	z-index: 999;
	width: 100%;
	height: 44px;
}
</style>
