'use strict';

angular.module('myApp.consoles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
 	$routeProvider.when('/consoles', {
    	templateUrl: 'views/consoles.view.html',
    	controller: 'ConsolesCtrl'
  	});
}])

.controller('ConsolesCtrl', ['$scope', '$http', '$route', function($scope, $http, $route) {

	$http.get('/api/consoles').then(function(response){
		$scope.consoles = response.data;
	});

	$scope.addConsole = function(){
		$http.post('/api/consoles', $scope.console).then(function(response){
			$route.reload();
		});
	}

	$scope.editConsole = function(id){
		$http.get('/api/consoles/' + id).then(function(response){
			$scope.console = response.data;
		});
	}

	$scope.updateConsole = function(){
		$http.put('/api/consoles/' + $scope.console._id, $scope.console).then(function(response){
			$route.reload();
		});
	}

	$scope.deleteConsole = function(id){
		$http.delete('/api/consoles/' + id).then(function(response){
			$route.reload();
		});
	}

}]);