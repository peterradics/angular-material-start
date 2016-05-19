var app = angular.module('QuickApp', ['ngMaterial']);

app.config(['$mdIconProvider',function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/res/mdi.svg')
}]);

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
