(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('personUpdate', function ($resource, $routeParams) {

            var personUpdate = $resource('/api/personUpdate/' + $routeParams.id, null, {
                update: {
                    method: 'PUT',
                    isArray: false
                }
            });
        return personUpdate;
    });
}());
