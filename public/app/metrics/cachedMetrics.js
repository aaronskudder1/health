(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('cachedMetrics', function (metrics) {
        var metricsList;

        return {
            query: function () {
                if (!metricsList) {
                    metricsList = metrics.query();
                }
                return metricsList;
            }
        };
    });
}());
