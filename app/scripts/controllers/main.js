'use strict';

angular.module('expressAngularApp')
    .controller('MainCtrl', function($scope, $http) {
        $http.get('/api/awesomeThings').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });
        $scope.user = "mizan";
        console.log('I am here');
    });