(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('fitnessResource', function ($http, $q, fitness) {
        //  angular.module('app').factory('auth', function($http,identity, $q, user) {

        return {
            fitnessAdd: function (newFitnessData) {
                var newFitness = new fitness(newFitnessData);
                var dfd = $q.defer();

                newFitness.$save().then(function () {
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
