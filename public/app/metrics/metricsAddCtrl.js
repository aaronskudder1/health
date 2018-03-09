(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('metricsAddCtrl', function ($scope, metricsResource, persons, notifier, $location) {
        var personList = persons.query();
        $scope.persons = personList;

        $scope.submit = function () {
            var newMetricsData = {
                dia: $scope.dia,
                sys: $scope.sys,
                pulse: $scope.pulse,
                weight: $scope.weight,
                waist: $scope.waist,
                chest: $scope.chest,
                date: $scope.date,
                person: $scope._id
            };
            console.log(newMetricsData);

            metricsResource.metricsAdd(newMetricsData).then(function () {
                notifier.notify('Metrics saved!');
                $location.path('/');
            }, function (reason) {
                notifier.error(reason);
            });
        };
    });
}());
