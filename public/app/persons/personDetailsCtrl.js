(function () {
    'use strict';
    /*global angular, moment*/
    angular.module('app').controller('personDetailsCtrl', function ($scope, personResource, $location, persons, $routeParams, notifier) {
        $scope.bloodPressure = '';
        persons.query().$promise.then(function (collection) {
            collection.forEach(function (person) {
                if (person._id === $routeParams.id) {
                    $scope.person = person;
                }
            });
            // var id = $routeParams.id,
            //    person = personResource.getPersonById(id);
            var DOB = $scope.person.DOB,
                d = moment(DOB),
                age = personResource.getAge(d);
            $scope.age = age;
        });

        $scope.editMode = false;
        $scope.edit = function () {
            $scope.editMode = true;
        };
        $scope.update = function () {
            $scope.editMode = false;
            var newPersonData = {
                person: $scope.person.name,
                DOB: $scope.person.DOB,
                gender: $scope.gender,
                height: $scope.person.height,
                initialWeight: $scope.person.initialWeight,
                photo: $scope.person.photo
            };

            personResource.updatePerson(newPersonData).then(function () {
                notifier.notify('Patient has been updated');
            }, function (reason) {
                notifier.error(reason);
            });
        };

        $scope.delete = function () {
            var deleteData = {
                _id: $routeParams.id
            };
            personResource.delete(deleteData).then(function () {
                notifier.notify('Asset has been deleted');
                $location.path('/');
            }, function (reason) {
                notifier.error(reason);

            });
        };
    });
}());
