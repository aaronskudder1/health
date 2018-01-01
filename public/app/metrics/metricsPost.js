(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('metricsPost', function ($resource) {
        var metricsResource = $resource('/api/create/', {
            post: {
                method: 'post',
                isArray: false
            }
        });
        return metricsResource;
    });
}());
