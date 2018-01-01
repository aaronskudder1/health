(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('metricsDetail', function ($resource) {
        var metricsResource = $resource('/api/metrics/:_id', {
            _id: "@id"
        }, {
            update: {
                method: 'PUT',
                isArray: false
            }
            // var metricsResource = $resource('/api/getMetrics/');
        });
        return metricsResource;
    });
}());