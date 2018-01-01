(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('metrics', function ($resource) {
        var metricsResource = $resource('/api/metrics/', {
            post: {
                method: 'put',
                isArray: false
            }
            //      post: {method:'post', isArray:false}
        });

        return metricsResource;
    });
}());
