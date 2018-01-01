(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('userListCtrl', function ($scope, User) {
        $scope.users = User.query();
    });
}());
