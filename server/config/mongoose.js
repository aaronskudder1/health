(function () {
    'use strict';
    /*global module, db, console, require*/
    var mongoose = require('mongoose'),
        MetricsModel = require('../models/MetricsModel'),
        UserModel = require('../models/UserModel'),
        StaffModel = require('../models/StaffModel'),
        PersonModel = require('../models/PersonModel');

    module.exports = function (config) {
        mongoose.connect(config.db);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error...'));
        db.once('open', function callback() {
            console.log('metrics db opened');
        });

        MetricsModel.createDefaultMetrics();
        PersonModel.createDefaultPersons();
        UserModel.createDefaultUsers();
        StaffModel.createDefaultStaff();
    };
}());
