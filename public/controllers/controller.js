var myApp = angular.module("myApp",[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http) {
//myApp.controller('AppCtrl',function AppCtrl($scope) {	

	console.log("Hello fromcontroller!");
	$http.get("/contactList").success(function(res) {
		console.log("we got data");
		$scope.contactList = res;

	});

	$http.get("/version").success(function(res) {
		console.log("we got version");
		$scope.version = res;
	})

}]);