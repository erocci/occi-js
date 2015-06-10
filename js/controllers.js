/*global mocha:false */
/*global testSuite:false */
/*global angular,document */

'use strict=true';

angular.module('occiApp.controllers', [])

.controller('globalCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.baseurl = null;

	testSuite.init();

	$scope.go = function() {
		// $state.go('conform', { 'endpoint': encodeURIComponent($scope.url)});
		$('#test-suite-results > div').empty();
		testSuite.run({
			method: 'GET',
			url: $scope.baseurl,
			accept: $scope.renderer
		});
	};
}])

.controller('conformCtrl', ['$scope', '$stateParams', '$http', '$timeout', function($scope, $stateParams, $http, $timeout) {
	var parser = document.createElement('a');
	parser.href = decodeURIComponent($stateParams.endpoint);
	$scope.baseurl = parser.protocol + '//' + parser.host;

	$scope.groups = [];


	/**
	 * Run test suite
	 * @method function
	 * @return {[type]} [description]
	 */
	var run = function() {
	};


}]);
