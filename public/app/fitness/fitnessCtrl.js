(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('fitnessCtrl', function ($scope, fitness, $routeParams) {

//        fitness.query().$promise.then(function (collection) {
//            collection.forEach(function (fitness) {
//                if (fitness._id === $routeParams.id) {
//                    $scope.fitness = fitness;
//                }
//            });
//        });

    $scope.fitness = fitness.query();

        $scope.sortOptions = [{
            value: "date",
            text: "Sort by Date"
            }, {
            value: "exercise",
            text: "Sort by exercise"
        }];
        $scope.sortOrder = $scope.sortOptions[0].value;
    });
}());