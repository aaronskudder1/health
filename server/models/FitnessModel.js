(function () {
    'use strict';
    /*global require, exports*/

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId,
        fitnessSchema = mongoose.Schema({
            //date: {type: Date, default: Date.now()},
            year: Number,
            week: Number,
            weekEnding: String,
            exerciseOnDay: [Number],
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
                    year: 2018,
                    week: 1,
                    weekEnding: "6th Jan",
                    exerciseOnDay: [0.5,0.5,0.5,0.5,0.5,0.5,0.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 2,
                    weekEnding: "13th Jan",
                    exerciseOnDay: [1.5,4,2,3,2,2,1.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 3,
                    weekEnding: "20th Jan",
                    exerciseOnDay: [6,0.5,0.5,0.5,0.5,0.5,0.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 4,
                    weekEnding: "27th Jan",
                    exerciseOnDay: [1,0.5,0.5,1,0.5,0.5,0.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 5,
                    weekEnding: "3rd Feb",
                    exerciseOnDay: [0.5,0.5,0.5,0.5,0.5,0.5,0.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 6,
                    weekEnding: "10th Feb",
                    exerciseOnDay: [0.5,0.5,0.5,0.5,0.5,0.5,0.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 7,
                    weekEnding: "17th Feb",
                    exerciseOnDay: [0.5,0.5,0.5,0.5,0.5,0.5,0.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 8,
                    weekEnding: "24th Feb",
                    exerciseOnDay: [0,0,0.5,0.5,0.5,0.5,2.5],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 9,
                    weekEnding: "3rd Mar",
                    exerciseOnDay: [4.5,4,4,1.5,1.5,3,1],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 10,
                    weekEnding: "10th Mar",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 11,
                    weekEnding: "17th Mar",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 12,
                    weekEnding: "24th Mar",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 13,
                    weekEnding: "31st Mar",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 14,
                    weekEnding: "7th Apr",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 15,
                    weekEnding: "14th Apr",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 16,
                    weekEnding: "21st Apr",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 17,
                    weekEnding: "28th Apr",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 18,
                    weekEnding: "5th May",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 19,
                    weekEnding: "12th May",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 20,
                    weekEnding: "19th May",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 21,
                    weekEnding: "26th May",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 22,
                    weekEnding: "2nd June",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 23,
                    weekEnding: "9th June",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 24,
                    weekEnding: "16th June",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 25,
                    weekEnding: "23rd June",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 26,
                    weekEnding: "30th June",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 27,
                    weekEnding: "7th July",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 28,
                    weekEnding: "14th July",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 29,
                    weekEnding: "21st July",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 30,
                    weekEnding: "28th July",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 31,
                    weekEnding: "4th August",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 32,
                    weekEnding: "11th August",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 33,
                    weekEnding: "18th August",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 34,
                    weekEnding: "25th August",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 35,
                    weekEnding: "1st September",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 36,
                    weekEnding: "8th September",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 37,
                    weekEnding: "15th September",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 38,
                    weekEnding: "22nd September",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 39,
                    weekEnding: "29th September",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 40,
                    weekEnding: "6th October",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 41,
                    weekEnding: "13th October",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 42,
                    weekEnding: "20th October",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 43,
                    weekEnding: "27th October",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 44,
                    weekEnding: "3rd November",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 45,
                    weekEnding: "10th November",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 46,
                    weekEnding: "17th November",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 47,
                    weekEnding: "24th November",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 48,
                    weekEnding: "1st December",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 49,
                    weekEnding: "8th December",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 50,
                    weekEnding: "15th December",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 51,
                    weekEnding: "22nd December",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                });
                Fitness.create({
                    year: 2018,
                    week: 52,
                    weekEnding: "29th December",
                    exerciseOnDay: [0,0,0,0,0,0,0],
                    person: '59ea44bd6864283f0023cf1e'
                })
                console.log('default Fitness created');
            }
        });
    }
    exports.createDefaultFitness = createDefaultFitness;
}());
