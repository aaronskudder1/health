(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('fitnessResource', function ($http, $q) {
        //  angular.module('app').factory('auth', function($http,identity, $q, user) {

        return {
            getFitnessById: function (id) {
                var fitness = $resource('/api/fitnesss/:id', {
                    _id: "@id"
                }, {
                    update: {
                        method: 'PUT',
                        isArray: false
                    }
                });
                return fitness;
            },
            getFitness: function (id) {
                var fitness = $resource('/api/fitnesss', {
                }, {
                    get: {
                        method: 'GET',
                        isArray: false
                    }
                });
                return fitness;
            },
            
            fitnessAdd: function (newfitnessData) {
                var newfitness = new fitnessAdd(newfitnessData),
                    dfd = $q.defer();

                newfitness.$save().then(function () {
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            },

            updatefitness: function (newfitnessData) {
                var updates = new fitnessUpdate(newfitnessData),
                    dfd = $q.defer();
                updates.$update().then(function () {
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            },
            delete: function (deleteData) {
                var dfd = $q.defer(),
                    assetToDel = new fitnessDelete(deleteData);
                assetToDel.$save().then(function () {
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            }
        };
    });
}());
