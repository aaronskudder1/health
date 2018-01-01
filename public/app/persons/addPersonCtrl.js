(function () {
    'use strict';
    /*global angular*/

    angular.module('app').controller('addPersonCtrl', function ($scope, personResource, notifier, $location) {
        $scope.submit = function () {
            if ($scope.female === 'female') {$scope.gender = 'female'; }
            if ($scope.male === 'male') {$scope.gender = 'male'; }
            var newPersonData = {
                name: $scope.name,
                gender: $scope.gender,
                height: $scope.height,
                initialWeight: $scope.initialWeight,
                DOB: $scope.DOB,
                photo: $scope.photo
            };
            console.log(newPersonData);

            personResource.personAdd(newPersonData).then(function () {
                notifier.notify('Person saved!');
                $location.path('/');
            }, function (reason) {
                notifier.error(reason);
            });
            notifier.notify('Person saved!');
            $location.path('/');
        };
    });
}());
