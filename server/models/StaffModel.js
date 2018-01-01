(function () {
    'use strict';
    /*global require, exports*/

    var mongoose = require('mongoose'),
       
        staffSchema = mongoose.Schema({
            firstName: String,
            lastName: Date,
            userName: String
        });

    var Staff = mongoose.model('Staff', staffSchema);
    //to convert an object to json use the 'JSON.stringify(Employee)  method
    //to convert a JSON string to an object use  JSON.parse(json)

    function createDefaultStaff() {
        Staff.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Staff.create({
                    firstName: 'aaron',
                    lastName: 'skudder',
                    userName: 'aaron@aaron.com'
                });
            }

            console.log('default staff written to database');
        });
    }
    exports.createDefaultStaff = createDefaultStaff;
}());
