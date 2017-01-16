'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'views/index.view.html',
    controller: 'IndexCtrl'
  });
}])

.controller('IndexCtrl', [function() {
}]);