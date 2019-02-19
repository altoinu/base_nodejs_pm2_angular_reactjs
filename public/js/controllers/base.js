define([
	'app'
], function(app) {

	app.controller('controllers/base', [
		'$scope',
		function($scope) {

			console.log('base controller');

		}
	]);

});