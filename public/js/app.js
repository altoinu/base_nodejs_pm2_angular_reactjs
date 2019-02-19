define([
	'angularAMD',
	'angular-animate',
	'angular-touch',
	'angular-ui-bootstrap',
	'angular-ui-router',
	'angular-route',
], function(angularAMD) {

	'use strict';

	var app = angular.module('app', [
		'ngAnimate',
		'ngTouch',
		'ui.bootstrap',
		'ui.router',
		'ngRoute'
	]);

	app.config([
		'$routeProvider',
		'$stateProvider',
		'$urlRouterProvider',
		function($routeProvider, $stateProvider, $urlRouterProvider) {

			//console.log($routeProvider);
			//console.log($stateProvider);
			//console.log($urlRouterProvider);
			
			/*
			$routeProvider.when('/', angularAMD.route({
				templateUrl: 'views/home.html',
				controller: 'controllers/home'
			})).otherwise({
				redirectTo: '/'
			});
			*/
			
			$stateProvider.state('base', {
				abstract: true,
				views: {
					'menu': angularAMD.route({
						templateUrl: 'views/menu.html',
						controller: 'controllers/menu',
						controllerUrl: 'js/controllers/menu.js'
					}),
					'main': angularAMD.route({
						templateUrl: 'views/base.html',
						controller: 'controllers/base'
					})
				}
			}).state('base.home', {
				url: '/',
				parent: 'base',
				views: {
					'content@base': angularAMD.route({
						templateUrl: 'views/home.html',
						controller: 'controllers/home'
					})
				}
			}).state('base.otherpage', {
				url: '/otherpage',
				parent: 'base',
				views: {
					'content@base': angularAMD.route({
						templateUrl: 'views/otherpage.html',
						controller: 'controllers/otherpage'
					})
				}
			});

			$urlRouterProvider.otherwise('/');

		}
	]);

	return angularAMD.bootstrap(app);

});