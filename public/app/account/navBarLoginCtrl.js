(function () {
    'use strict';
    /*global angular*/
    angular.module('app').controller('navBarLoginCtrl', function ($scope, $http, identity, notifier, auth, $location) {
        var userName = "maia";
        var password = "maia";
        $scope.identity = identity;
        $scope.signin = function (userName, password) {
            auth.authenticateUser(userName, password).then(function (success) {
                if (success) {
                    notifier.notify('You have successfully signed in!');
                } else {
                    notifier.notify('UserName/Password combination incorrect');
                }
            });
        };

        $scope.signout = function () {
            auth.logoutUser().then(function () {
                $scope.userName = "";
                $scope.password = "";
                notifier.notify('You have successfully signed out!');
                $location.path('/');
            });
        };
    });
}());
