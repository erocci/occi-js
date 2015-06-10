/*global angular */

'use strict=true';

angular.module('occiApp', [
    // 'occiApp.services',
    'occiApp.controllers',
    'occiApp.directives',
    'occiApp.utils',
    'ngResource',
    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
    .state('main', {
        url: '/main',
        controller: 'globalCtrl',
        templateUrl: 'partials/main.html',
    })
    .state('conform', {
        url: '/conform/:endpoint',
        controller: 'conformCtrl',
        templateUrl: 'partials/conform.html'
    });

}]);
