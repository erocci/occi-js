/*global angular */

'use strict';

angular.module('occiApp', [
    'occiApp.services',
    'occiApp.controllers',
    'occiApp.directives',
    'occiApp.utils',
    'ngResource',
    'ui.router'
])

	.run(['$rootScope', '$state', function($rootScope, $state) {
		return;
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/main');
		
		$stateProvider

			.state('main', {
				url: '/main',
				templateUrl: 'partials/main.html',
			})

			.state('conform', {
				url: '/conform',
				controller: 'conformCtrl as conform',
				templateUrl: 'partials/conform.html',
			});

	}]);
