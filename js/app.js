'use strict';
angular.module('farmStandApp', [])
    .controller('MainCtrl', function ($scope, $http) {
        $scope.appName = "Farmstand";
        $scope.appVersion = "v.0.1";
        $scope.versionHide = true;

        $scope.showVersion = function() {
            $scope.versionHide = false;
        }
    });