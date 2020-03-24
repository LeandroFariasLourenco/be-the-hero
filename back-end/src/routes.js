const express = require('express'),
      routes = express.Router(),
      ongController = require('./controllers/T_HERO_ONGS'),
      ongProfile = require('./controllers/ONG_Profile'),
      ongSession = require('./controllers/ONG_Session'),
      incidentController = require('./controllers/T_HERO_INCIDENTS');

routes.post('/ongs', ongController.post);
routes.post('/session', ongSession.post);
routes.get('/ongs', ongController.get);

routes.get('/profile', ongProfile.get);

routes.post('/incidents', incidentController.post);
routes.get('/incidents', incidentController.get);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;