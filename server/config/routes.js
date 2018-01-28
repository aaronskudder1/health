(function () {
    'use strict';
    /*global require*/
    /*global module*/
    var auth = require('./auth'),
        userCtrl = require('../controllers/userCtrl'),
        mainCtrl = require('../controllers/mainCtrl'),
        personCtrl = require('../controllers/personCtrl'),
        metricsCtrl = require('../controllers/metricsCtrl'),
        fitnessCtrl = require('../controllers/fitnessCtrl'),
        mongoose = require('mongoose'),  //?
        User = mongoose.model('User'); //?

    module.exports = function (app) {
        app.get('/api/users', userCtrl.getUsers);
  //      app.get('/api/users', auth.requiresRole('admin'), userCtrl.getUsers);
        
        app.post('/api/users', userCtrl.createUser);
        app.put('/api/users', userCtrl.updateUser);

        app.get('/api/main', mainCtrl.getMetrics);
        app.get('/api/main/:id', mainCtrl.getMetricsById);

        app.get('/api/persons', personCtrl.getPerson);
        app.get('/api/persons/:id', personCtrl.getPersonsById);
        app.post('/api/personAdd', personCtrl.createPerson);
        app.put('/api/personUpdate/:id', personCtrl.personUpdate);
        app.post('/api/personDelete/:id', personCtrl.delete);

        app.get('/api/metrics', metricsCtrl.getMetrics);
        app.get('/api/metrics/:id', metricsCtrl.getMetricsById);
        app.post('/api/create', metricsCtrl.createMetrics);
        app.put('/api/update/:id', metricsCtrl.updateMetrics);

        app.get('/api/fitness', fitnessCtrl.getFitness);
        app.get('/api/fitness/:id', fitnessCtrl.getFitnessById);
        app.post('/api/fitness', fitnessCtrl.createFitness);
        
        app.get('/partials/*', function (req, res) {
            res.render('../../public/app/' + req.params[0]);
        });

        app.post('/login', auth.authenticate);

        app.post('/logout', function (req, res) {
            req.logout();
            res.end();
        });
        app.all('/api/*', function (req, res) {
            res.send(404);
        });

        app.get('*', function (req, res) {
            res.render('index', {
                bootstrappedUser: req.user
            });
        });
    };
}());
