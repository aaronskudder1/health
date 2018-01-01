(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('personMetricsCtrl', function ($scope, cachedMetrics, persons, $routeParams) {

        persons.query().$promise.then(function (collection) {
            collection.forEach(function (person) {
                if (person._id === $routeParams.id) {
                    $scope.person = person;
                }
            });
        });

    $scope.metrics = cachedMetrics.query();
  //      cachedMetrics.query().$promise.then(function (collection) {
//            collection.forEach(function (metrics) {
//                if (metrics.person === person.name) {
//                    $scope.metrics = metrics;
//                }
//            });
//        });

        $scope.sortOptions = [{
            value: "date",
            text: "Sort by Date"
            }, {
            value: "pulse",
            text: "Sort by Pulse"
        }];
        $scope.sortOrder = $scope.sortOptions[0].value;
    });
}());
