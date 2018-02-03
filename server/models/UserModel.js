(function () {
    'use strict';
    /*global exports, require*/
    var mongoose = require('mongoose'),
        encrypt = require('../utilities/encryption');

    var userSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: '{PATH} is required!'
        },
        lastName: {
            type: String,
            required: '{PATH} is required!'
        },
        username: {
            type: String,
            required: '{PATH} is required!',
            unique: true
        },
        salt: {
            type: String,
            required: '{PATH} is required!'
        },
        hashed_pwd: {
            type: String,
            required: '{PATH} is required!'
        },
        roles: [String]
    });
    
    userSchema.methods = {
        authenticate: function (passwordToMatch) {
            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        },
        hasRole: function (role) {
            return this.roles.indexOf(role) > -1;
        }
    };
    var User = mongoose.model('User', userSchema);

    function createDefaultUsers() {
        User.find({}).exec(function (err, collection) {
            if (collection.length === 2) {
                
                var salt, hash;/*
                salt = encrypt.createSalt();
                hash = encrypt.hashPwd(salt, 'aaron');
                User.create({
                    firstName: 'Aaron',
                    lastName: 'Skudder',
                    username: 'aaron@aaron.com',
                    salt: salt,
                    hashed_pwd: hash,
                    roles: ['admin']
                });*/
                salt = encrypt.createSalt();
                hash = encrypt.hashPwd(salt, 'lan');
                User.create({
                    firstName: 'Lan',
                    lastName: 'Skudder',
                    username: 'lan@lan.com',
                    salt: salt,
                    hashed_pwd: hash,
                    roles: ['admin']
                });
                salt = encrypt.createSalt();
                hash = encrypt.hashPwd(salt, 'T3mp#123');
                User.create({
                    firstName: 'Christopher',
                    lastName: 'Audain',
                    username: 'Chris',
                    salt: salt,
                    hashed_pwd: hash,
                    roles: ['admin']
                });
                console.log('default users written to database');
            }
        });
    }
    exports.createDefaultUsers = createDefaultUsers;
}());