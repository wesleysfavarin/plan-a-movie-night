"use strict";

var app = angular.module('appDirectives', [
	'FirebaseAuth'
]);

app.directive('navigation', ['FirebaseAuthService', function(FirebaseAuthService) {
  return {
  	replace: true,
    restrict: 'E',
    templateUrl: '/partials/navigation.html',
    controller: function($scope, $element, FirebaseAuthService){
    	$scope.authHandler = FirebaseAuthService;
    },
    link: function(scope, el, attr) {}
  }
}]);

app.directive('liUser', function() {
  return {
  	replace: true,
    restrict: 'E',
    templateUrl: '/partials/navigation/li-user.html',
    controller: function($scope, $element, FirebaseAuthService, $location){
    	$scope.authData = FirebaseAuthService.auth.$getAuth();
      if($scope.authData){
        $scope.name = $scope.authData.facebook.displayName;
      } else {
        $scope.name = 'Guest';
      }
    	
    	$scope.logout = function(){
        FirebaseAuthService.auth.$unauth();
        $location.path('/login');
  		}
    },
    link: function(scope, el, attr) {}
  }
});

app.directive('sideMenu', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: '/partials/navigation/side-menu.html',
    controller: function($scope, $element,$location){
      
    },
    link: function(scope, el, attr) {}
  }
})
