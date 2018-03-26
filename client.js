'use strict';

const fetch = require('node-fetch');

const options = {
    method: 'DELETE'
};

fetch('http://localhost:8080/', options)
    .then(req => req.json)
    .then(req => console.info(req));
