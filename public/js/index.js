// http://requirejs.org/
require.config({
	baseUrl: 'js',
	paths: {
		// https://angularjs.org/
		'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.6.5/angular.min',

		// https://docs.angularjs.org/api/ngAnimate
		'angular-animate': '//ajax.googleapis.com/ajax/libs/angularjs/1.6.5/angular-animate',

		// https://docs.angularjs.org/api/ngTouch
		'angular-touch': '//ajax.googleapis.com/ajax/libs/angularjs/1.6.5/angular-touch',

		// http://angular-ui.github.io/bootstrap/
		// https://github.com/angular-ui/bootstrap
		'angular-ui-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',

		// ngRoute - $routeProvider
		// https://docs.angularjs.org/api/ngRoute
		//'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.6.5/angular-route',

		// AngularUI Router - Nested views ($stateProvider, $urlRouterProvider)
		// https://ui-router.github.io/
		// https://github.com/angular-ui/ui-router
		// https://github.com/angular-ui/ui-router/tree/legacy
		// https://github.com/angular-ui/ui-router/wiki
		'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router.min',
		//'angular-ui-router': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router',

		// AngularAMD
		// https://marcoslin.github.io/angularAMD/#/home
		// https://github.com/marcoslin/angularAMD
		'angularAMD': 'lib/angularAMD/angularAMD.min',
		'ngload': 'lib/angularAMD/ngload.min',
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angularAMD': {
			deps: [
				'angular'
			],
			exports: 'angularAMD'
		},
		'angular-animate': {
			deps: [
				'angular'
			]
		},
		'angular-touch': {
			deps: [
				'angular'
			]
		},
		'angular-ui-bootstrap': {
			deps: [
				'angular'
			]
		},
		/*
		'angular-route': {
			deps: [
				'angular'
			]
		},
		*/
		'angular-ui-router': {
			deps: [
				'angular'
			]
		},
		'ngload': {
			deps: [
				'angularAMD'
			]
		},
	},
	deps: [
		'app'
	]
});
