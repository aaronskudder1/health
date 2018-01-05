(function () {
    'use strict';
    /*global angular, moment*/
    angular.module('app').controller('metricsDetailCtrl', function ($scope, metricsDetail, resource, $routeParams) {
        $scope.bloodPressure = '';
        //       var metrics = [];
        metricsDetail.query().$promise.then(function (collection) {
            collection.forEach(function (metrics) {
                if (metrics._id === $routeParams.id) {
                    $scope.metrics = metrics;
                }
            });
            var DOB = $scope.metrics.person.DOB,
                pulse = $scope.metrics.pulse,
                d = moment(DOB),
                age = resource.getAge(d),
                bmi = 0,
                weightHeight = 0,
                bloodPressure = resource.bloodPressure($scope.metrics.dia, $scope.metrics.sys);
            
                if ($scope.metrics.weight >= 1) {
                    weightHeight = {
                        weight: $scope.metrics.weight,
                        height: $scope.metrics.person.height
                        };
                } else {
                    weightHeight = {
                        weight: $scope.metrics.person.initialWeight,
                        height: $scope.metrics.person.height
                        };
                }
            console.log(weightHeight);

            $scope.bpHigh = false;
            $scope.bpPreHigh = false;
            $scope.bpNormal = false;
            $scope.bpLow = false;
            $scope.showBP = false;
            $scope.showHR = false;
            $scope.showBMI = false;

            $scope.HRAthlete = false;
            $scope.HRExcellent = false;
            $scope.HRGood = false;
            $scope.HRAboveAverage = false;
            $scope.HRAverage = false;
            $scope.HRBelowAverage = false;
            $scope.HRPoor = false;

            $scope.bloodPressure = bloodPressure;
            if (bloodPressure === 'High') {
                $scope.bpHigh = true;
            }
            if (bloodPressure === 'Pre-high') {
                $scope.bpPreHigh = true;
            }
            if (bloodPressure === 'Normal') {
                $scope.bpNormal = true;
            }
            if (bloodPressure === 'Low') {
                $scope.bpLow = true;
            }
            //PULSE (heart rate)
            $scope.age = age;
            if (age > 65) {
                $scope.HRImage = resource.pulseLevel65plus(pulse);
            }
            if (age >= 56 && age <= 65) {
                $scope.HRImage = resource.pulseLevel56to65(pulse);
            }
            if (age >= 46 && age <= 55) {
                $scope.HRImage = resource.pulseLevel46to55(pulse);
            }
            if (age >= 36 && age <= 45) {
                $scope.HRImage = resource.pulseLevel36to45(pulse);
            }
            if (age >= 26 && age <= 35) {
                $scope.HRImage = resource.pulseLevel26to35(pulse);
            }
            if (age >= 18 && age <= 25) {
                $scope.HRImage = resource.pulseLevel26to35(pulse);
            }
            if (age < 18) {
                $scope.HRImage = resource.pulseLevelLessThan18(pulse);
                $scope.pulseLevelMessage = "Pluse Level is not an accurate indication of Health under the age of 18";
            }

            bmi = resource.bmi(weightHeight);
            $scope.bmi = bmi;
            console.log('bmi');
            $scope.bmiImage = resource.getBMIImage(bmi);

        });
    });
}());
