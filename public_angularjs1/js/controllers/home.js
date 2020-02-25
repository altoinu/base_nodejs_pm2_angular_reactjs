define([
	'app'
], function(app) {

	app.controller('controllers/home', [
		'$scope',
		'$state',
		function($scope, $state) {

			console.log('home controller');

			$scope.goToOtherPage = function() {
				
				$state.go('base.otherpage');
				
			};
			
		}
	]);

});