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
                    dia: 146,
                    sys: 88,
                    pulse: 83,
                    weight: 46.7,
                    date: '2017-11-24',
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
                    date: '2017-11-11',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 80,
                    sys: 128,
                    pulse: 69,
                    weight: 81.1,
                    date: '2017-11-10',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Metrics.create({
                    dia: 80,
                    sys: 128,
                    pulse: 69,
                    weight: 81.1,
                    date: '2017-12-31',
                    person: '59ea44bd6864283f0023cf1e'
                });
                //Maia
                Metrics.create({
                    dia: 62,
                    sys: 109,
                    pulse: 78,
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
                console.log('default metrics created');
            }
        });
    }
    exports.createDefaultMetrics = createDefaultMetrics;
}());
