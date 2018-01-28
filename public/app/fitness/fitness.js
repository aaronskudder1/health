(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('fitness', function ($resource) {
        var fitness = $resource('/api/fitness/:_id', {
            _id: "@id"
        }, {
            post: {
                method: 'put',
                isArray: false
            }
            //      post: {method:'post', isArray:false}
        });
        return fitness;
    });
}());
