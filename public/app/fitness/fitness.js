(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('fitness', function ($resource) {
        var fitnessResource = $resource('/api/fitness/', {
            post: {
                method: 'put',
                isArray: false
            }
            //      post: {method:'post', isArray:false}
        });

        return fitnessResource;
    });
}());
