(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('fitnessAddCtrl', function ($scope, persons, fitnessResource, fitness, notifier, $location) {
        var personList = persons.query();
        $scope.persons = personList;

        $scope.submit = function () {
            var newFitnessData = {
                person: $scope._id,
                date: $scope.date,
                exercise: $scope.exercise,
                weight: $scope.weight,
            };
            console.log(newFitnessData);

            fitnessResource.fitnessAdd(newFitnessData).then(function () {
                notifier.notify('Fitness saved!');
                $location.path('/');
            }, function (reason) {
                notifier.error(reason);
            });
        };
    });
}());
