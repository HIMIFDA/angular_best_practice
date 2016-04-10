require('angular');
require('angular-route');

//load our controllers
var HomeController = require('./ng-controllers/HomeController');
var ManagementUserController = require('./ng-controllers/ManagementUserController');
var ManagementVenueController = require('./ng-controllers/ManagementVenueController');
var SuggestedVenueController = require('./ng-controllers/SuggestedVenueController');

//declare our angular app
var app = angular.module('app', [
		'ngRoute'
	]);
//declare our angular controller
app.controller('HomeController', ['$scope', HomeController]);
app.controller('ManagementUserController', ['$scope', ManagementUserController]);
app.controller('ManagementVenueController', ['$scope', ManagementVenueController]);
app.controller('SuggestedVenueController', ['$scope', SuggestedVenueController]);


//declare our angular configuration, set routes and etc
app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'HomeController',
				templateUrl: 'ng-templates/home.html'
			})
		.when('/management/user', 
			{
				controller: 'ManagementUserController',
				templateUrl: 'ng-templates/management_user.html'
			})
		.when('/management/venue', 
			{
				controller: 'ManagementVenueController',
				templateUrl: 'ng-templates/management_venue.html'
			})
		.when('/suggested-venue', 
			{
				controller: 'SuggestedVenueController',
				templateUrl: 'ng-templates/suggested_venue.html'
			})
		.otherwise({ redirectTo: '/'});
});
