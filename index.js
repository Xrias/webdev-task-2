'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
routes(app);

app.listen(8080, () => {
    console.info('Open http://localhost:8080/');
});
