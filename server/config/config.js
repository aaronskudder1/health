(function () {
    'use strict';
    /*global require, module, process*/
    var path = require('path'),
        rootPath = path.normalize(__dirname + '/../../');

    module.exports = {
        development: {
            db: 'mongodb://localhost:27017/health',
            rootPath: rootPath,
            port: process.env.PORT || 3000
        },
        production: {
            rootPath: rootPath,
            db: 'mongodb://aaronskudder:Beli3l33@ds125053.mlab.com:25053/aaronskudder',
            port: process.env.PORT || 80
        }
    };
}());
