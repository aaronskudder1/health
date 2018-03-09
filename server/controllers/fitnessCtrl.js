(function () {
    'use strict';
    /*global exports, require*/

    var Fitness = require('mongoose').model('Fitness');

    exports.getFitness = function (req, res) {
        Fitness.find({})
            .populate('person')
            .exec(function (err, collection) {
                res.send(collection);
            });
    };

    exports.getFitnessById = function (req, res) {
        Fitness.findOne({
                _id: req.params.id
            })
            .populate('person')
            .exec(function (err, collection) {
                res.send(collection);
            });
    };
    exports.createFitness = function (req, res) {
        var entry = ({
            year: req.body.year,
            week: req.body.week,
            date: req.body.date,
            exerciseOnDay: req.body.exercise,
            description: req.body.description,
            person: req.body.person,
        });

        Fitness.create(entry, function (err) {
            if (err) {
                var errMsg = 'Sorry, there was an error saving: ' + err;
                res.render('fitness', {
                    title: 'Fitness - (error)',
                    message: errMsg
                });
                console.log('error saving Fitness');
            } else {
                console.log('Item was saved!');
                // Redirect to the home page to display list of notes...
                res.redirect(301, '/');
            }
        });
    };
    exports.fitnessUpdate = function (req, res, next) {
        var entry = ({
            year: req.body.year,
            week: req.body.week,
            weekEnding: req.body.weekEnding,
            person: req.body.person,
            exerciseOnDay: req.body.exerciseOnDay
        });
        console.log(entry);
        Fitness.findByIdAndUpdate(req.params.id, entry, {}, function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    };
}());
