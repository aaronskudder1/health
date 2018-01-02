(function () {
    'use strict';
    /*global angular*/
    angular.module('app').factory('resource', function () {
        return {
            getAge: function (d) {
                var birthday = +new Date(d),
                    dob = ((Date.now() - birthday) / (31557600000));
                return Math.trunc(dob);
            },
            pulseLevelLessThan18: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "Poor";
                }
                if (pulse >= 74 && pulse <= 81) {
                    result = "BelowAverage";
                }
                if (pulse >= 70 && pulse <= 73) {
                    result = "Average";
                }
                if (pulse >= 66 && pulse <= 69) {
                    result = "AboveAverage";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "Good";
                }
                if (pulse >= 56 && pulse <= 61) {
                    result = "Excellent";
                }
                if (pulse >= 49 && pulse <= 55) {
                    result = "Athlete";
                }
                return result;
            },

            pulseLevel18to25: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "Poor";
                }
                if (pulse >= 74 && pulse <= 81) {
                    result = "BelowAverage";
                }
                if (pulse >= 70 && pulse <= 73) {
                    result = "Average";
                }
                if (pulse >= 66 && pulse <= 69) {
                    result = "AboveAverage";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "Good";
                }
                if (pulse >= 56 && pulse <= 61) {
                    result = "Excellent";
                }
                if (pulse >= 49 && pulse <= 55) {
                    result = "Athlete";
                }
                return result;
            },
            pulseLevel26to35: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "Poor";
                }
                if (pulse >= 75 && pulse <= 81) {
                    result = "BelowAverage";
                }
                if (pulse >= 71 && pulse <= 74) {
                    result = "Average";
                }
                if (pulse >= 60 && pulse <= 70) {
                    result = "AboveAverage";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "Good";
                }
                if (pulse >= 55 && pulse <= 61) {
                    result = "Excellent";
                }
                if (pulse >= 49 && pulse <= 54) {
                    result = "Athlete";
                }
                return result;
            },
            pulseLevel36to45: function (pulse) {
                var result;
                if (pulse > 83) {
                    result = "Poor";
                }
                if (pulse >= 76 && pulse <= 82) {
                    result = "BelowAverage";
                }
                if (pulse >= 71 && pulse <= 75) {
                    result = "Average";
                }
                if (pulse >= 67 && pulse <= 70) {
                    result = "AboveAverage";
                }
                if (pulse >= 63 && pulse <= 66) {
                    result = "Good";
                }
                if (pulse >= 57 && pulse <= 62) {
                    result = "Excellent";
                }
                if (pulse >= 50 && pulse <= 56) {
                    result = "Athlete";
                }
                return result;
            },
            pulseLevel46to55: function (pulse) {
                var result;
                if (pulse > 84) {
                    result = "Poor";
                }
                if (pulse >= 77 && pulse <= 83) {
                    result = "BelowAverage";
                }
                if (pulse >= 72 && pulse <= 76) {
                    result = "Average";
                }
                if (pulse >= 68 && pulse <= 71) {
                    result = "AboveAverage";
                }
                if (pulse >= 64 && pulse <= 67) {
                    result = "Good";
                }
                if (pulse >= 58 && pulse <= 63) {
                    result = "Excellent";
                }
                if (pulse >= 50 && pulse <= 57) {
                    result = "Athlete";
                }
                return result;
            },
            pulseLevel56to65: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "Poor";
                }
                if (pulse >= 76 && pulse <= 81) {
                    result = "BelowAverage";
                }
                if (pulse >= 72 && pulse <= 75) {
                    result = "Average";
                }
                if (pulse >= 68 && pulse <= 71) {
                    result = "AboveAverage";
                }
                if (pulse >= 62 && pulse <= 67) {
                    result = "Good";
                }
                if (pulse >= 57 && pulse <= 61) {
                    result = "Excellent";
                }
                if (pulse >= 51 && pulse <= 56) {
                    result = "Athlete";
                }
                return result;
            },
            pulseLevel65plus: function (pulse) {
                var result;
                if (pulse > 80) {
                    result = "Poor";
                }
                if (pulse >= 74 && pulse <= 79) {
                    result = "BelowAverage";
                }
                if (pulse >= 71 && pulse <= 73) {
                    result = "Average";
                }
                if (pulse >= 66 && pulse <= 70) {
                    result = "AboveAverage";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "Good";
                }
                if (pulse >= 56 && pulse <= 61) {
                    result = "Excellent";
                }
                if (pulse >= 50 && pulse <= 55) {
                    result = "Athlete";
                }
                return result;
            },

            bloodPressure: function (dia, sys) {
                var result = 'unknown';
                if (dia >= 90 && sys > 140) {
                    result = 'High';
                }
                if (dia <= 89 && sys <= 140) {
                    result = 'Pre-high';
                    if (dia <= 80 && sys <= 120) {
                        result = 'Normal';
                        if (dia <= 60 && sys <= 90) {
                            result = 'Low';
                        }
                    }
                }
                return result;
            },
            bmi : function (weightHeight) {
                var heightSquared = weightHeight.height * weightHeight.height,
                    bmi = weightHeight.weight / (heightSquared);
                return Math.trunc(bmi);
            }

        };
    });
}());
