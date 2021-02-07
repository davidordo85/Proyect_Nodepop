'use strict';

var express = require('express');
var router = express.Router();

const Anuncio = require('../../models/Anuncio.js')

router.get('/', async function (req, res, next) {
    try {
        // para recogerlo por nombre
        const name = req.query.nombre;
        // para paginar
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);

        const filtro = {};

        if (name) {
            filtro.name = name
        }

        const result = await Anuncio.list(filtro, limit, skip);
        res.json(result)
    } catch (err) {
        next(err);
    }
})

// GET /api/anuncio:id
// Obtener un anuncio
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        const anuncio = await Anuncio.findOne({ _id: _id })
        if (!anuncio) {
            return res.status(404).json({ error: 'not found' });
        }
        res.json({ result: anuncio });
    } catch (err) {
        next(err);
    }
})

module.exports = router;