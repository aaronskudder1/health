//assetEditCtrl.js
(function () {
    'use strict';
    /*global angular*/
    //    angular.module('app').controller('personMetricsCtrl', function ($scope, cachedMetrics, persons, $routeParams) {

    angular.module('app').controller('personEditCtrl', function ($scope) {

        $scope.update = function () {
            var newPatientData = {
                name: $scope.name,
                DOB: $scope.DOB,
                photo: $scope.photo
            };
            return newPatientData;
        };
    });
}());
