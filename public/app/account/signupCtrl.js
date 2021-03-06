(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('signupCtrl', function ($scope, notifier, $location, auth) {

        $scope.signup = function () {
            var newUserData = {
                username: $scope.email,
                password: $scope.password,
                firstName: $scope.fname,
                lastName: $scope.lname,
                admin: $scope.admin
            };

            auth.addUser(newUserData).then(function () {
                notifier.notify('User account created!');
                $location.path('/');
            }, function (reason) {
                notifier.error(reason);
            });
        };
    });
}());
