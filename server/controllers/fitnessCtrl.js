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

}());
