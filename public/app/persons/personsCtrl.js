(function () {
    'use strict';
    /*global angular*/

    angular.module('app').controller('personsCtrl', function ($scope, notifier, persons) {
        var personList = persons.query();
        $scope.persons = personList;
        $scope.sortOptions = [{
            value: "name",
            text: "Sort by Name"
        }, {
            value: "DOB",
            text: "Sort by Date of Birth"
        }];
        $scope.sortOrder = $scope.sortOptions[0].value;
    });
}());
