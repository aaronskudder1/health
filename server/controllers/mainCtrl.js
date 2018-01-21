var Metrics = require('mongoose').model('Metrics');

exports.getMetrics = function (req, res) {
    Metrics.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};

exports.getMetricsById = function (req, res) {
    Metrics.findOne({
        _id: req.params.id
    }).exec(function (err, Metrics) {
        res.send(Metrics);
    });
};