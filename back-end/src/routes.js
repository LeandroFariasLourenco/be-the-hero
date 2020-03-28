const express = require('express'),
  routes = express.Router(),
  ongController = require('./controllers/T_HERO_ONGS'),
  ongProfile = require('./controllers/ONG_Profile'),
  ongSession = require('./controllers/ONG_Session'),
  incidentController = require('./controllers/T_HERO_INCIDENTS'),
  { celebrate, Segments, Joi } = require('celebrate');


routes.get('/ongs', ongController.get);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}) , incidentController.get);
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.required()
  }).unknown()
}) , ongProfile.get);


routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    telefone: Joi.string().required().max(15).min(10),
    cidade: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongController.post);
routes.post('/session', ongSession.post);
routes.post('/incidents', incidentController.post);


routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;