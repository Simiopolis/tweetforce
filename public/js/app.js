'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partial/1', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partial/2', controller: MyCtrl2});
    $routeProvider.when('/', {templateUrl: 'partial/home', controller: MyCtrl2});
    $routeProvider.when('/2', {templateUrl: 'partial/home2', controller: MyCtrl2});
    $routeProvider.when('/thankyou', {templateUrl: 'partial/thankyou', controller: MyCtrl2});
    $routeProvider.when('/tweetsearch', {templateUrl: 'partial/tweetsearch', controller: AppCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);
