var app = angular.module("order", []);
app.controller("orderController", function($scope, $http) {
	function init() {
		$scope.message = "Hello, Angular JS.";
	}
	init()
})
