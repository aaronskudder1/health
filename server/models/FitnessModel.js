(function () {
    'use strict';
    /*global require, exports*/

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId,
        fitnessSchema = mongoose.Schema({
            date: {type: Date, default: Date.now()},
            exercise: Number,
            description: String,
            person: {
                type: ObjectId,
                ref: 'Persons'
            }
        }),
        Fitness = mongoose.model('Fitness', fitnessSchema);

    function createDefaultFitness() {
        Fitness.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                //Aaron
                Fitness.create({
                    exercise: 90,
                    description: "Walking, Swimming",
                    exerciseCategories: ['Walking', 'Swimming'],
                    date: '2018-01-07',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 120,
                    description: "Cycling",
                    date: '2018-01-08',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 60,
                    description: "Swimming, Walking",
                    date: '2018-01-09',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 90,
                    description: "Cycling",
                    date: '2018-01-10',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 50,
                    description: "Swimming",
                    date: '2018-01-11',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 50,
                    description: "Swimming",
                    date: '2018-01-12',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 90,
                    description: "Walking",
                    date: '2018-01-13',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 180,
                    description: "Swimming, Cycling, Walking",
                    date: '2018-01-14',
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    exercise: 120,
                    description: "Cycling",
                    date: '2018-01-14',
                    person: '59ea44bd6864283f0023cf1e'
                });
                //Lan
                Fitness.create({
                    exercise: 120,
                    description: "Walking, cycle",
                    date: '2018-01-07',
                    person: '59ed027eeb16171314fd00ca'
                });
                Fitness.create({
                    exercise: 120,
                    description: "Walking",
                    date: '2018-01-08',
                    person: '59ed027eeb16171314fd00ca'
                });
                Fitness.create({
                    exercise: 35,
                    description: "Walking",
                    date: '2018-01-19',
                    person: '59ed027eeb16171314fd00ca'
                });
                console.log('default Fitness created');
            }
        });
    }
    exports.createDefaultFitness = createDefaultFitness;
}());
