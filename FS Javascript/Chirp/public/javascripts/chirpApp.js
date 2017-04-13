//This is the Angular Module and Controller
//run rootscope stuff is to give angular some global scope functions $http,was also passed in before but it's not in finished
const app = angular.module('chirpApp', ['ngRoute', 'ngResource']).run(function($rootScope, $http) {
	// $rootScope.authenticated = false;
	// $rootScope.current_user = '';

	$rootScope.signout = function(){
		$http.get('auth/signout');
		$rootScope.authenticated = false;
		$rootScope.current_user = '';
	};
}); //Defines Angular Module

// $routeProvider is part of angular-route
app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		//Defines what routes use what controllers
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});


app.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});

//Main Controller // $scope: "The $scope object is increbibly important, and is the Model part of our Model-View-Controller. It is shared between our controller and our view, and is how we can pass data and even functions between the two."
app.controller('mainController', function(postService, $scope, $rootScope){
	$scope.posts = postService.query();
	$scope.newPost = {created_by: '', text: '', created_at: ''};

	$scope.post = function(){
		$scope.newPost.created_by = $rootScope.current_user;
		$scope.newPost.created_at = Date.now();
		postService.save($scope.newPost, function(){
			$scope.posts = postService.query();
			$scope.newPost = {created_by: '', text: '', created_at: ''};
		});
	};
});

//Auth Controller
app.controller('authController', function($scope, $http, $rootScope, $location){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		$http.post('/auth/login', $scope.user).success(function(data){
			if(data.state == 'success'){
				$rootScope.authenticated = true;
				$rootScope.current_user = data.user.username;
				$location.path('/');
			} else{
				$scope.error_message = data.message;
			}
		});
	};

	$scope.register = function(){
		$http.post('/auth/signup', $scope.user).success(function(data){
			if(data.state == 'success'){
				$rootScope.authenticated = true;
				$rootScope.current_user = data.user.username;
				$location.path('/');
			} else{
				$scope.error_message = data.message;
			}
		});
	};
});
