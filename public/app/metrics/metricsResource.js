(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('metricsResource', function ($http, $q, metricsPost) {
        //  angular.module('app').factory('auth', function($http,identity, $q, user) {

        return {
            metricsAdd: function (newMetricsData) {
                var newMetrics = new metricsPost(newMetricsData);
                var dfd = $q.defer();

                newMetrics.$save().then(function () {
                    //identity.currentUser = newUser;
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            }
        };
    });
}());
