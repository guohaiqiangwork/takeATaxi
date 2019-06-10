var app = angular.module("myApp", []);
app.controller("myController", function($scope, $http) {
	function init() {
		$scope.message = "Hello, Angular JS.";
	}

	init()
})
