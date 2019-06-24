var app = angular.module("order", []);
app.controller("orderController", function($scope, $http, $rootScope) {
	$scope.order = {
			orderList: [{
					time: "2019-10-15 12:00",
					faly: '已完成',
					add1: '京东卡上了飞机及',
					add2: '看了；看了；反馈收到了； 看了看接口'
				},
				{
					time: "2019-10-15 12:00",
					faly: '待支付',
					add1: '京东卡上了飞机及',
					add2: '发大发顺丰撒发顺丰'
				},
				{
					time: "2019-10-15 12:00",
					faly: '待评价',
					add1: '京东卡上了飞机及',
					add2: '发顺丰撒发上'
				},
				{
					time: "2019-10-15 12:00",
					faly: '已放弃',
					add1: '京东卡上了飞机及',
					add2: '发顺丰撒发上'
				},
				{
					time: "2019-10-15 12:00",
					faly: '进行中',
					add1: '京东卡上了飞机及',
					add2: '发顺丰撒发上'
				}
			],
			payFaly: false, //支付确认
		},
		// 跳转到订单详情
		$scope.goToDetails = function(id) {
			goToDetailsN(id)
		};
	// 打开/关闭密码弹窗
	$scope.openMoney = function(faly) {
		$scope.order.payFaly = faly
	}

	function init() {
		$scope.message = "Hello, Angular JS.";
	}
	init()
})
