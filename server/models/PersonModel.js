(function () {
    'use strict';
    /*global require, exports*/

//           Schema = mongoose.Schema,
//        ObjectId = Schema.Types.ObjectId,
//        metricsSchema = mongoose.Schema({

    var mongoose = require('mongoose'),
     //   Schema = mongoose.Schema,
        personSchema = mongoose.Schema({
            name: String,
            DOB: Date,
            gender: String,
            height : Number,
            initialWeight: Number,
            photo: String
        });

    var Persons = mongoose.model('Persons', personSchema);
    //to convert an object to json use the 'JSON.stringify(Employee)  method
    //to convert a JSON string to an object use  JSON.parse(json)

    function createDefaultPersons() {
        Persons.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Persons.create({
                    _id: "59ed027eeb16171314fd00ca",
                    name: 'Lan',
                    DOB: '1967-05-22',
                    gender: 'female',
                    height: 1.41,
                    initialWeight: 46.7,
                    photo: 'lan.jpg'
                });
                Persons.create({
                    _id: '59ea44bd6864283f0023cf20',
                    name: 'Maia',
                    DOB: '2001-09-18',
                    gender: 'female',
                    height: 1.515,
                    initialWeight: 54.2,
                    photo: 'maia.jpg'
                });
                Persons.create({
                    _id: '59ea44bd6864283f0023cf1e',
                    name: 'Aaron',
                    DOB: '1967-09-24',
                    gender: 'male',
                    height: 1.65,
                    initialWeight: 81.1,
                    photo: 'aaron.jpg'
                });
                Persons.create({
                    _id: '59ea44bd6864283f0023cf21',
                    name: 'Ariel',
                    DOB: '2008-02-19',
                    gender: 'male',
                    height: 1.31,
                    initialWeight: 29.6,
                    photo: 'ariel.jpg'
                });
                Persons.create({
                    _id: '5a1a4d8e8b77bd3ac088d1c0',
                    name: 'Helen',
                    DOB: '1969-05-25',
                    gender: 'female',
                    photo: 'helen.jpg'
                });
                Persons.create({
                    _id: '5a1a4d8e8b77bd3ac088d1c1',
                    name: 'Odette',
                    DOB: '1965-11-25',
                    gender: 'female',
                    photo: 'odette.jpg'
                });
                Persons.create({
                    _id: '5a1a4d8e8b77bd3ac088d1c2',
                    name: 'Nathan',
                    DOB: '2000-12-07',
                    gender: 'male',
                    photo: 'nathan.jpg'
                });
                Persons.create({
                    _id: '5a1a4d8e8b77bd3ac088d1c3',
                    name: 'Dante',
                    DOB: '1998-03-31',
                    gender: 'male',
                    photo: 'dante.jpg'
                });
                console.log('default persons created');
            }
        });
    }
    exports.createDefaultPersons = createDefaultPersons;
}());
