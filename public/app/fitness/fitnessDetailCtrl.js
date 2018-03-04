(function () {
    'use strict';
    /*global angular, moment*/
    angular.module('app').controller('fitnessDetailCtrl', function ($scope, fitnessResource, fitness, $location, $routeParams, notifier) {
    
//        $scope.fitness = function () {
//            fitnessResource.getFitness()
//        }
        fitness.query().$promise.then(function (collection) {
            collection.forEach(function (fitness) {
                if (fitness._id === $routeParams.id) {
                    $scope.fitness = fitness;
                }
            });
//            var id = $routeParams.id,
 //              fitness = fitnessResource.getfitnessById(id);
        });

        $scope.editMode = false;
        $scope.edit = function () {
            $scope.editMode = true;
        };
        $scope.update = function () {
            $scope.editMode = false;
            var newfitnessData = {
                year: $scope.fitness.year,
                gender: $scope.fitness.week,
                height: $scope.fitness.weekEnding,
                exerciseOnDay: $scope.fitness.exerciseOnDay,
                person: $scope.person
            };

            fitnessResource.updatefitness(newfitnessData).then(function () {
                notifier.notify('Patient has been updated');
            }, function (reason) {
                notifier.error(reason);
            });
        };

        $scope.delete = function () {
            var deleteData = {
                _id: $routeParams.id
            };
            fitnessResource.delete(deleteData).then(function () {
                notifier.notify('Asset has been deleted');
                $location.path('/');
            }, function (reason) {
                notifier.error(reason);

            });
        };
    });
}());
