const express = require('express'),
    app = express(),
    routes = require('./routes'),
    cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);