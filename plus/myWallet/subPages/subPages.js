var app = angular.module("subPages", []);
app.controller("subPagesController", function($scope, $http) {
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
	$scope.moneyFaly = "01" //选中金额
	$scope.moneyTab = function(id) {
		console.log(id)
		$scope.moneyFaly = id
	}

	function init() {
		$scope.message = "Hello, Angular JS.";
	}
	init()
})
