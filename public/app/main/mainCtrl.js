(function () {
    'use strict';
    /*global angular*/
    angular.module('app').value('asFollowedPatients', []);
    angular.module('app').controller('mainCtrl', function ($scope, persons, asFollowedPatients) {
        //    $scope.metrics = cachedMetrics.query();
        $scope.patients = persons.query();

        $scope.asFollowedPatients = asFollowedPatients;
    });

    angular.module('app').directive('asPatients', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/partials/main/asPatients.jade',
            controller: 'mainCtrl'
        };
    });
    angular.module('app').directive('asFollowPatient', function (asFollowedPatients) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/partials/main/asFollowPatient.jade',
            scope: {
                patientToFollow: '='
            },
            link: function (scope, element, attrs) {
//unfollowPatient patient-to-follow
                scope.followed = function () {
                    return asFollowedPatients.indexOf(scope.patientToFollow) > -1;
                };
                scope.followPatient = function () {
                    console.log('follow ' + scope.patientToFollow);
                    asFollowedPatients.push(scope.patientToFollow);
                    console.log(asFollowedPatients);
                };
                scope.unfollowPatient = function () {
                    console.log('unfollow' + scope.patientToFollow);
                    asFollowedPatients.splice(asFollowedPatients.indexOf(scope.patientToFollow), 1);
                    console.log(asFollowedPatients);
                };
            }
        };
    });
    /* angular.module('app').controller('patientsCtrl', function ($scope) {
         $scope.patientList = [
             {
                 id: 1,
                 name: 'asdf'
             },
             {
                 id: 2,
                 name: 'fdsa'
             },
             {
                 id: 3,
                 name: 'fese'
             }
         ];
     }); */
}());
