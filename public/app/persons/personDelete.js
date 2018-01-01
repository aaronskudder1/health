(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('personDelete', function ($resource, $routeParams) {
        // var assetUpdate = $resource('/api/assetUpdate/' + $routeParams.id, null, {
        var personDel = $resource('/api/personDelete/' + $routeParams.id, null, {
            post: {
                method: 'delete',
                isArray: false
            }
            //      post: {method:'post', isArray:false}
        });
        return personDel;
    });
}());
