(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('createUser', function ($resource) {
        var createUser = $resource('/users/', {
            post: {
                method: 'post',
                isArray: false
            }
        });
        return createUser;
    });
}());
