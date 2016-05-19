var app = angular.module('QuickApp', ['ngMaterial']);

app.controller('MainController', ['$scope', '$mdToast', function($scope,$mdToast) {
	
	$scope.title = 'Welcome...';

	$scope.showToast = function() {
		var toast = $mdToast.simple()
			.textContent('Hello World!')
			.hideDelay(4000)
			.position('top right');
		$mdToast.show(toast);
	}

}]);