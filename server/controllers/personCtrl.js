(function () {
    'use strict';
    /*global require*/
    /*global exports*/
    var Persons = require('mongoose').model('Persons');

    exports.getPerson = function (req, res) {
        Persons.find({})
            .exec(function (err, collection) {
                res.send(collection);
            });
    };

    exports.getPersonsById = function (req, res) {
        Persons.findOne({
            _id: req.params.id
        }).exec(function (err, collection) {
            res.send(collection);
        });
    };
    //create menu
    exports.createPerson = function (req, res) {
        var personData = ({
            name: req.body.name,
            gender: req.body.gender,
            DOB: req.body.DOB,
            height: req.body.height,
            initialWeight: req.body.initialWeight,
            photo: req.body.photo
        });

        Persons.create(personData, function (err) {
            if (err) {
                res.status(400);
                return res.send({
                    reason: err.toString()
                });
            } else {
                console.log('Person was saved');
                res.redirect(301, '/');

            }
        });
    };
    exports.personUpdate = function (req, res, next) {

        var entry = new Persons({
            _id: req.params.id,
            name: req.body.name,
            gender: req.body.gender,
            DOB: req.body.DOB,
            height: req.body.height,
            initialWeight: req.body.initialWeight,
            photo: req.body.photo
        });
        console.log(entry);
        Persons.findByIdAndUpdate(req.params.id, entry, {}, function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    };
    //        req.user.save(function (err) {
    //        if (err) {
    //            res.status(400);
    //            return res.send({
    //                reason: err.toString()
    //            });
    //        }
    //        res.send(req.user);
    //    });

    //        Persons.findByIdAndUpdate({
    //            _id: req.params.id
    //        }, entry).then(function (person) {
    //            res.send(person);
    //        });
    //    };
    exports.delete = function (req, res) {
        var _id = req.params.id;

        Persons.findByIdAndRemove(_id, function (err) {
            if (!err) {
                console.log('find and remove doc ');
                res.redirect(301, '/');
            } else {
                console.log('Sulu to bridge, we have a problem :', err);
                res.redirect(500, '/');
            }
        });
    };
}());
