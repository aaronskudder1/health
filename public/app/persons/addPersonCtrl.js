(function () {
    'use strict';
    /*global angular*/

    angular.module('app').controller('addPersonCtrl', function ($scope, addPerson, notifier, persons, $location) {
        $scope.submit = function () {
            var newPersonData = {
                name: $scope.name,
                DOB: $scope.DOB,
                photo: $scope.photo
            };

            addPerson.createPerson(newPersonData).then(function () {
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
