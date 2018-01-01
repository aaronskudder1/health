//assetEditCtrl.js
(function () {
    'use strict';
    /*global angular*/
    //    angular.module('app').controller('personMetricsCtrl', function ($scope, cachedMetrics, persons, $routeParams) {

    angular.module('app').controller('assetEditCtrl', function ($scope) {

        $scope.update = function () {
            var newMetricsData = {
                dia: $scope.dia,
                sys: $scope.sys,
                pulse: $scope.pulse,
                person: $scope.person,
                date: $scope.date
            };
            return newMetricsData;
        };
    });
}());
