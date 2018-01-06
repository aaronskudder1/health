(function () {
    'use strict';
    /*global angular*/
    angular.module('app', ['ngResource', 'ngRoute']);

    angular.module('app').config(function ($routeProvider, $locationProvider) {

        var routeRoleChecks = {
            admin: {
                auth: function (auth) {
                    return auth.authorizeCurrentUserForRoute('admin');
                }
            },
            user: {
                auth: function (auth) {
                    return auth.authorizeAuthenticatedUserForRoute();
                }
            }
        };

        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mainCtrl',
                resolve: routeRoleChecks.admin
            })
            .when('/admin/users', {
                templateUrl: '/partials/admin/user-list',
                controller: 'userListCtrl',
                resolve: routeRoleChecks.admin
            })
            .when('/signup', {
                templateUrl: '/partials/account/signup',
                controller: 'signupCtrl'
            })
            .when('/profile', {
                templateUrl: '/partials/account/profile',
                controller: 'profileCtrl',
                resolve: routeRoleChecks.user
            })
            .when('/main/:id', {
                templateUrl: '/partials/metrics/personMetrics',
                controller: 'personMetricsCtrl'
            })
            .when('/metricsDetail/:id', {
                templateUrl: '/partials/metrics/metricsDetail',
                controller: 'metricsDetailCtrl'
            })
            .when('/persons/personDetails/:id', {
                templateUrl: '/partials/persons/PersonDetails',
                controller: 'personDetailsCtrl'
            })
            .when('/persons', {
                templateUrl: '/partials/persons/persons',
                controller: 'personsCtrl'
            })
            .when('/personEdit/:id', {
                templateUrl: '/partials/persons/personEdit',
                controller: 'personEditCtrl'
            })

            .when('/addPerson', {
                templateUrl: '/partials/persons/addPerson',
                controller: 'addPersonCtrl'
            })
            .when('/addMetrics', {
                templateUrl: '/partials/metrics/metricsAdd',
                controller: 'metricsAddCtrl'
            });


    });

}());
