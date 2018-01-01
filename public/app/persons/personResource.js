(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('personResource', function ($resource, $q, personUpdate, personAdd, personDelete) {
        return {
            getAge: function (d) {
                var birthday = +new Date(d),
                    dob = ((Date.now() - birthday) / (31557600000));
                return Math.trunc(dob);
            },

            getPersonById: function (id) {
                var person = $resource('/api/persons/:id', {
                    _id: "@id"
                }, {
                    update: {
                        method: 'PUT',
                        isArray: false
                    }
                });
                return person;
            },
            
            personAdd: function (newPersonData) {
                var newPerson = new personAdd(newPersonData),
                    dfd = $q.defer();

                newPerson.$save().then(function () {
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            },

            updatePerson: function (newPersonData) {
                var updates = new personUpdate(newPersonData),
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
                    assetToDel = new personDelete(deleteData);
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
