/*global angular */

'use strict';

angular.module('occiApp.controllers', [])

	.controller('globalCtrl', ['$scope', '$state', function($scope, $state) {		
		this.endpoint = "localhost:8080"
	}])

	.controller('conformCtrl', ['$http', '$scope', function($http, $scope) {
		return;
	}]);
