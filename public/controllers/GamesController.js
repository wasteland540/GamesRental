'use strict';

angular.module('myApp.games', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/games', {
    	templateUrl: 'views/games.view.html',
    	controller: 'GamesCtrl'
    });
}])

.controller('GamesCtrl', ['$scope', '$http', '$route', function ($scope, $http, $route) {

	$http.get('/api/games').then(function(response){
		$scope.games = response.data;
	});

	$scope.addGame = function(){
		$http.post('/api/games', $scope.game).then(function(response){
			//window.location.href = '#!/games'; does not work; no reload!
			$route.reload();
		});
	}

	$scope.editGame = function(id){
		$http.get('/api/games/' + id).then(function(response){
			$scope.game = response.data;
		});
	}

	$scope.updateGame = function(){
		$http.put('/api/games/' + $scope.game._id, $scope.game).then(function(response){
			$route.reload();
		});
	}

	$scope.deleteGame = function(id){
		$http.delete('/api/games/' + id).then(function(response){
			$route.reload();
		});
	}

}]);