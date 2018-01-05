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
                    result = "HRPoor.png";
                }
                if (pulse >= 74 && pulse <= 81) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 70 && pulse <= 73) {
                    result = "HRAverage.png";
                }
                if (pulse >= 66 && pulse <= 69) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "HRGood.png";
                }
                if (pulse >= 56 && pulse <= 61) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 49 && pulse <= 55) {
                    result = "HRAthlete.png";
                }
                return result;
            },

            pulseLevel18to25: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "HRPoor.png";
                }
                if (pulse >= 74 && pulse <= 81) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 70 && pulse <= 73) {
                    result = "HRAverage.png";
                }
                if (pulse >= 66 && pulse <= 69) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "HRGood.png";
                }
                if (pulse >= 56 && pulse <= 61) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 49 && pulse <= 55) {
                    result = "HRAthlete.png";
                }
                return result;
            },
            pulseLevel26to35: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "HRPoor.png";
                }
                if (pulse >= 75 && pulse <= 81) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 71 && pulse <= 74) {
                    result = "HRAverage.png";
                }
                if (pulse >= 60 && pulse <= 70) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "HRGood.png";
                }
                if (pulse >= 55 && pulse <= 61) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 49 && pulse <= 54) {
                    result = "HRAthlete.png";
                }
                return result;
            },
            pulseLevel36to45: function (pulse) {
                var result;
                if (pulse > 83) {
                    result = "HRPoor.png";
                }
                if (pulse >= 76 && pulse <= 82) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 71 && pulse <= 75) {
                    result = "HRAverage.png";
                }
                if (pulse >= 67 && pulse <= 70) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 63 && pulse <= 66) {
                    result = "HRGood.png";
                }
                if (pulse >= 57 && pulse <= 62) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 50 && pulse <= 56) {
                    result = "HRAthlete.png";
                }
                return result;
            },
            pulseLevel46to55: function (pulse) {
                var result;
                if (pulse > 84) {
                    result = "HRPoor.png";
                }
                if (pulse >= 77 && pulse <= 83) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 72 && pulse <= 76) {
                    result = "HRAverage.png";
                }
                if (pulse >= 68 && pulse <= 71) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 64 && pulse <= 67) {
                    result = "HRGood.png";
                }
                if (pulse >= 58 && pulse <= 63) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 50 && pulse <= 57) {
                    result = "HRAthlete.png";
                }
                return result;
            },
            pulseLevel56to65: function (pulse) {
                var result;
                if (pulse > 82) {
                    result = "HRPoor.png";
                }
                if (pulse >= 76 && pulse <= 81) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 72 && pulse <= 75) {
                    result = "HRAverage.png";
                }
                if (pulse >= 68 && pulse <= 71) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 62 && pulse <= 67) {
                    result = "HRGood.png";
                }
                if (pulse >= 57 && pulse <= 61) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 51 && pulse <= 56) {
                    result = "HRAthlete.png";
                }
                return result;
            },
            pulseLevel65plus: function (pulse) {
                var result;
                if (pulse > 80) {
                    result = "HRPoor.png";
                }
                if (pulse >= 74 && pulse <= 79) {
                    result = "HRBelowAverage.png";
                }
                if (pulse >= 71 && pulse <= 73) {
                    result = "HRAverage.png";
                }
                if (pulse >= 66 && pulse <= 70) {
                    result = "HRAboveAverage.png";
                }
                if (pulse >= 62 && pulse <= 65) {
                    result = "HRGood.png";
                }
                if (pulse >= 56 && pulse <= 61) {
                    result = "HRExcellent.png";
                }
                if (pulse >= 50 && pulse <= 55) {
                    result = "HRAthlete.png";
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
            },
            getBMIImage: function (bmi) {
                var result;
                if (bmi < 18.5) {
                    result = "underWeight.jpg";
                }
                if (bmi >= 18.5 && bmi <= 24.9) {
                    result = "normalWeight.jpg";
                }
                if (bmi >= 25 && bmi <= 29.9) {
                    result = "overWeight.jpg";
                }
                if (bmi >= 30 && bmi <= 34.9) {
                    result = "obeseClass1.jpg";
                }
                if (bmi >= 35 && bmi <= 39.9) {
                    result = "obeseClass2.jpg";
                }
                if (bmi >= 40) {
                    result = "obeseClass3.jpg";
                }
                return result;
            }

        };
    });
}());
