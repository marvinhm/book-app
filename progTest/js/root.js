angular.module("myApp", ["ngRoute"])

.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.when('/first', {
        controller: 'myController',
        templateUrl: 'js/views/first.html'
    })
    $routeProvider.when('/second', {
        controller: 'myController',
        templateUrl: 'js/views/second.html'
    })
        $routeProvider.otherwise({
        redirctTo : '/first' });
    })


.controller("myController", function($scope, $http) {
    $scope.title = "Book App";

    $http({
        method: 'get', 
        url: 'https://itunes.apple.com/search?country=gb&term=heminway&media=ebook&limit=10'
    }).then(function (response) {
        console.log(response, 'res');
        $scope.ernestData = response.data;
    },function (error){
        console.log(error, "can't get data.");
    });

    $http({
        method: 'get', 
        url: 'https://itunes.apple.com/search?country=gb&term=dickens&media=ebook&limit=10'
    }).then(function (response) {
        console.log(response, 'res');
        $scope.dickensData = response.data;
    },function (error){
        console.log(error, "can't get data.");
    });

    $http({
        method: 'get', 
        url: 'https://itunes.apple.com/search?country=gb&term=shakespeare&media=ebook&limit=10'
    }).then(function (response) {
        console.log(response, 'res');
        $scope.shakespearetData = response.data;
    },function (error){
        console.log(error, "can't get data.");
    });
});