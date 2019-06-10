var app = angular.module("subPages", []);
app.controller("subPagesController", function($scope, $http) {
	// 充值金额列表
	$scope.rechargeList = [{
		number: '1元',
		id: '01'
	}, {
		number: '5元',
		id: '02'
	}, {
		number: '10元',
		id: '03'
	}, {
		number: '15元',
		id: '04'
	}, {
		number: '20元',
		id: '05'
	}, {
		number: '30元',
		id: '06'
	}, {
		number: '50元',
		id: '07'
	}, {
		number: '100元',
		id: '08'
	}, {
		number: '200元',
		id: '09'
	}]
	$scope.subPages = {
		moneyFaly: "01", //选中金额
		payFail: false, //失败提示框
		passwordFaly: false //密码输入框
	};
	// 切换充值金额
	$scope.moneyTab = function(id) {
		$scope.moneyFaly = id
	};
	// 打开/关闭失败弹窗
	$scope.openCloseModel = function(id) {
		$scope.subPages.payFail = id
	};
	// 关闭密码支付
	$scope.openCloseModelP = function(id) {
		$scope.subPages.passwordFaly = id
	};

	function init() {
		$scope.message = "Hello, Angular JS.";
	};
	init()
})
