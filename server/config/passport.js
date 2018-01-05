(function () {
    'use strict';
    /*global require, module */
    var passport = require('passport'),
        mongoose = require('mongoose'),
        LocalStrategy = require('passport-local').Strategy,
        User = mongoose.model('User');

    module.exports = function () {
        passport.use(new LocalStrategy(
            function (username, password, done) {
                console.log(username, password);
                User.findOne({
                    username: username
                }).exec(function (err, user) {
   //                 if (user && user.authenticate(password)) {
                    if (user) {
                        return done(null, user);
                        console.log('user found', user);
                    } else {
                        return done(null, false);
                    }
                });
            }
        ));

        passport.serializeUser(function (user, done) {
            if (user) {
                done(null, user._id);
            }
        });

        passport.deserializeUser(function (id, done) {
            User.findOne({
                _id: id
            }).exec(function (err, user) {
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        });
    };
}());
