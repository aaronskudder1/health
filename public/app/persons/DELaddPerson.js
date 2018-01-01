//createPerson
(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('addPerson', function ($http, $q, persons) {
        return {
            createPerson: function (newPersonData) {
                var newPerson = new persons(newPersonData),
                    dfd = $q.defer();

                newPerson.$save().then(function () {
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            },
            updateCurrentPerson: function (newPersonData) {
                var dfd = $q.defer();

                var person = newPersonData;
                //        angular.extend(clone, newUserData);
                person.$update().then(function () {
                    //  identity.currentUser = clone;
                    dfd.resolve();
                }, function (response) {
                    dfd.reject(response.data.reason);
                });
                return dfd.promise;
            },
        };
    });
}());
