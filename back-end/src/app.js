const express = require('express'),
    app = express(),
    routes = require('./routes'),
    cors = require('cors'),
    { errors } = require('celebrate'); 

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

module.exports = app;