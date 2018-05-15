'use strict';

const { error404 } = require('./controllers/errors');
const PlaceController = require('./controllers/place');

module.exports = app => {
    app.get('/', PlaceController.listPlaces);
    app.post('/', PlaceController.addPlace);
    app.delete('/', PlaceController.clear);
    app.options('/', PlaceController.options);
    app.post('/places', PlaceController.findPlace);
    app.delete('/places', PlaceController.deletePlace);
    app.put('/places', PlaceController.insertPlace);
    app.options('/places', PlaceController.options);
    app.post('/places/:id', PlaceController.editPlace);
    app.options('/places/:id', PlaceController.options);
    app.all('*', error404);
};
