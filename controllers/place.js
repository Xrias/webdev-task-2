'use strict';

let store = [];

const Place = require('../models/place');

module.exports = class PlaceController {
    static listPlaces(req, res) {
        const { pageNumber, pageSize, sort } = req.body;
        res.json(Place.getList(pageNumber, pageSize, sort));
    }

    static options(req, res) {
        res.sendStatus(200);
    }

    static addPlace(req, res) {
        const desc = req.body.desc;
        if (desc && typeof (desc) === 'string') {
            Place.add(desc);
            res.send('OK');

            return;
        }
        res.status(400);
    }

    static clear(req, res) {
        Place.clear();
        res.send('OK');
    }

    static deletePlace(req, res) {
        const id = req.body.id;
        if (id) {
            Place.delete(id);
            res.send('OK');

            return;
        }
        res.status(400);
    }

    static findPlace(req, res) {
        const desc = req.body.desc;
        if (desc && typeof (desc) === 'string') {
            res.json(Place.findDesc(desc));

            return;
        }
        res.status(400);
    }

    static editPlace(req, res) {
        const id = req.params.id;
        const { desc, isVisited } = req.body;
        if (id) {
            Place.edit(id, desc, isVisited);
            res.send('OK');

            return;
        }
        res.status(400);
    }

    static insertPlace(req, res) {
        const { id, indexTo } = req.body;
        if (req.body.id !== undefined) {
            Place.insert(id, indexTo);
            res.send('OK');

            return;
        }
        res.status(400);
    }
};
