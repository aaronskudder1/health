(function () {
    'use strict';
    /*global exports, require*/
    var Metrics = require('mongoose').model('Metrics');

    exports.getMetrics = function (req, res) {
        Metrics.find({})
            .populate('person')
            .exec(function (err, collection) {
                res.send(collection);
            });
    };

    exports.getMetricsById = function (req, res) {
        Metrics.findOne({
            _id: req.params.id
        })
            .populate('person')
            .exec(function (err, collection) {
                res.send(collection);
            });
    };
    
    exports.createMetrics = function (req, res) {
        var entry = ({
            dia : req.body.dia,
            sys : req.body.sys,
            pulse : req.body.pulse,
            weight : req.body.weight,
            person : req.body.person,
            date : req.body.date
        });

        Metrics.create(entry, function (err) {
            if (err) {
                var errMsg = 'Sorry, there was an error saving: ' + err;
                res.render('metrics', {
                    title: 'Metrics - New metrics (error)',
                    message: errMsg
                });
                console.log('error saving Metrics');
            } else {
                console.log('Item was saved!');
                // Redirect to the home page to display list of notes...
                res.redirect(301, '/');
            }
        });
    };
    
    exports.updateMetrics = function (req, res) {};

}()); 

//       var personData = req.body;

//        Persons.create(personData, function (err) {
//            if (err) {
//                res.status(400);
//                return res.send({
//                    reason: err.toString()
//                });
//            }
//        });