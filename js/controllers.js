/*global angular,document */

'use strict';

angular.module('occiApp.controllers', [])

	.controller('globalCtrl', ['$scope', '$state', function($scope, $state) {
		$scope.url = undefined;

		$scope.go = function() {
			$state.go('conform', { 'endpoint': encodeURIComponent($scope.url)});
		};
	}])

	.controller('conformCtrl', ['$scope', '$stateParams', '$http', '$timeout', 'tests', function($scope, $stateParams, $http, $timeout, tests) {
		var parser = document.createElement('a');
		parser.href = decodeURIComponent($stateParams.endpoint);
		$scope.baseurl = parser.protocol + '//' + parser.host;
		
		var req = {
			method: 'GET',
			url: $scope.baseurl + '/'
		};

		$http(req)
			.success(function(data, status, headers, config) {
				var server = headers('server').split(" ");
				$scope.online = 1;
				$scope.server = server[0];
				$scope.occi = server[1];
			})
			.error(function(data, status, headers, config) {
				$scope.online = 0;
			});

		$scope.groups = [];

		t.run_groups(tests.groups,
					 function(g) {
						 $scope.groups.push({
							 desc: g.desc,
							 tests: []
						 });
					 },
					 function(g) {
						 
					 }
					);
		
		var run = function() {
			if (groups.length > 0) {
				var g = groups.pop();
				var result = {
					desc: g.desc,
					tests: []
				};
				
				$scope.groups.push(result);
				t.run(g, function() {
					s
				});
				$timeout(run, 1000);
			}
		};
		$timeout(run, 1000);
	}]);
