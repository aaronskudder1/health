(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('personAdd', function ($resource) {

            var personUpdate = $resource('/api/personAdd/', null, {
                post: {
                    method: '{POST}',
                    isArray: false
                }
            });
        return personUpdate;
    });
}());
