(function () {
    'use strict';
    /*global require, exports*/

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId,
        metricsSchema = mongoose.Schema({
            dia: Number,
            sys: Number,
            pulse: Number,
            date: {
                type: Date,
                default: Date.now
            },
            weight: Number,
            waist: Number,
            chest: Number,
            person: {
                type: ObjectId,
                ref: 'Persons'
            }
        }),
        Metrics = mongoose.model('Metrics', metricsSchema);

    function createDefaultMetrics() {
        Metrics.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                //Lan
                Metrics.create({
                    dia: 96,
                    sys: 168,
                    pulse: 90,
                    date: '2017-10-08',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 86,
                    sys: 154,
                    pulse: 91,
                    date: '2017-11-11',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 80,
                    sys: 128,
                    pulse: 69,
                    date: '2017-11-17',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 104,
                    sys: 160,
                    pulse: 77,
                    date: '2017-11-24',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 88,
                    sys: 146,
                    pulse: 83,
                    weight: 46.7,
                    date: '2017-12-31',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 88,
                    sys: 144,
                    pulse: 78,
                    weight: 46.7,
                    date: '2018-01-16',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 100,
                    sys: 159,
                    pulse: 79,
                    weight: 46.7,
                    date: '2018-02-03',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 75,
                    sys: 123,
                    pulse: 77,
                    weight: 46,
                    date: '2018-02-10',
                    person: '59ed027eeb16171314fd00ca'
                });
                Metrics.create({
                    dia: 96,
                    sys: 148,
                    pulse: 96,
                    weight: 46,
                    date: '2018-02-25',
                    person: '59ed027eeb16171314fd00ca'
                });
                //Aaron
                Metrics.create({
                    dia: 79,
                    sys: 114,
                    pulse: 75,
                    date: '2017-10-08',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 73,
                    sys: 127,
                    pulse: 69,
                    date: '2017-11-10',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 80,
                    sys: 128,
                    pulse: 69,
                    weight: 81.1,
                    date: '2017-11-11',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 72,
                    sys: 127,
                    pulse: 73,
                    weight: 81.1,
                    date: '2017-12-31',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 77,
                    sys: 119,
                    pulse: 66,
                    weight: 79.9,
                    date: '2018-01-14',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 65,
                    sys: 114,
                    pulse: 67,
                    weight: 79.8,
                    waist: 1045,                    
                    date: '2018-02-03',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({ 
                    dia: 78,
                    sys: 115,
                    pulse: 98,
                    weight: 77.9,
                    waist: 1040,
                    date: '2018-02-24',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 76,
                    sys: 117,
                    pulse: 62,
                    weight: 77.9,
                    waist: 1030,
                    chest: 1050,
                    date: '2018-03-03',
                    person: '59ea44bd6864283f0023cf1e'
                });
                //Maia
                Metrics.create({
                    dia: 62,
                    sys: 109,
                    pulse: 78,
                    weight: 51.2,
                    date: '2017-10-08',
                    person: '59ea44bd6864283f0023cf20'
                });
                Metrics.create({
                    dia: 64,
                    sys: 120,
                    pulse: 80,
                    date: '2017-11-11',
                    person: '59ea44bd6864283f0023cf20'
                });
                Metrics.create({
                    dia: 70,
                    sys: 123,
                    pulse: 80,
                    date: '2017-11-20',
                    person: '59ea44bd6864283f0023cf20'
                });
                Metrics.create({
                    dia: 69,
                    sys: 106,
                    pulse: 81,
                    date: '2017-11-24',
                    person: '59ea44bd6864283f0023cf20'
                });
                Metrics.create({
                    dia: 68,
                    sys: 115,
                    pulse: 79,
                    date: '2017-12-31',
                    person: '59ea44bd6864283f0023cf20'
                });
                Metrics.create({
                    dia: 60,
                    sys: 120,
                    pulse: 80,
                    waist: 670,
                    weight: 51.2,
                    date: '2018-02-03',
                    person: '59ea44bd6864283f0023cf20'
                });
                Metrics.create({
                    dia: 64,
                    sys: 119,
                    pulse: 70,
                    waist: 670,
                    weight: 51.2,
                    date: '2018-02-03',
                    person: '59ea44bd6864283f0023cf20'
                });
                //Ariel
                Metrics.create({
                    dia: 60,
                    sys: 102,
                    pulse: 75,
                    date: '2017-10-09',
                    person: '59ea44bd6864283f0023cf21'
                });
                Metrics.create({
                    dia: 56,
                    sys: 90,
                    pulse: 90,
                    weight: 29.6,
                    date: '2017-11-25',
                    person: '59ea44bd6864283f0023cf21'
                });
                //dante
                Metrics.create({
                    dia: 71,
                    sys: 139,
                    pulse: 66,
                    date: '2017-11-26',
                    person: '5a1a4d8e8b77bd3ac088d1c3'
                }); 
                Metrics.create({
                    dia: 69,
                    sys: 121,
                    pulse: 63,
                    date: '2018-02-03',
                    person: '5a1a4d8e8b77bd3ac088d1c3'
                });
                //Helen
                Metrics.create({
                    dia: 57,
                    sys: 111,
                    pulse: 82,
                    date: '2017-11-26',
                    person: '5a1a4d8e8b77bd3ac088d1c0'
                });
                //Odette
                Metrics.create({
                    dia: 90,
                    sys: 158,
                    pulse: 73,
                    date: '2017-11-26',
                    person: '5a1a4d8e8b77bd3ac088d1c1'
                });
                //Nathan
                Metrics.create({
                    dia: 76,
                    sys: 132,
                    pulse: 96,
                    date: '2017-11-26',
                    person: '5a1a4d8e8b77bd3ac088d1c2'
                });
                //Kevin
                Metrics.create({
                    dia: 75,
                    sys: 116,
                    pulse: 65,
                    weight: 57.6,
                    date: '2018-01-02',
                    person: '5a4b083aeee5693050f890d5'
                });
                console.log('default metrics created');
            }
        });
    }
    exports.createDefaultMetrics = createDefaultMetrics;
}());
