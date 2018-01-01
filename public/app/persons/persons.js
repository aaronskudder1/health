(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('persons', function ($resource) {
        var personsResource = $resource('/api/persons/', {
            post: {
                method: 'put',
                isArray: false
            }
            //       post: {method:'post', isArray:false}
        });
        return personsResource;
    });
}());
