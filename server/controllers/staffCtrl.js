(function () {
    'use strict';
    /*global require*/
    /*global exports*/
    var Staff = require('mongoose').model('Staff');

    exports.getStaff = function (req, res) {
        Staff.find({})
            .exec(function (err, collection) {
                res.send(collection);
            });
    };

    exports.getStaffById = function (req, res) {
        Staff.findOne({
            _id: req.params.id
        }).exec(function (err, collection) {
            res.send(collection);
        });
    };
    //create menu
    exports.createStaff = function (req, res) {
        var staffData = req.body;

        Staff.create(staffData, function (err) {
            if (err) {
                res.status(400);
                return res.send({
                    reason: err.toString()
                });
            }
        });
    };
}());
