'use strict';

var express = require('express');
var router = express.Router();

const Anuncio = require('../../models/Anuncio.js')

router.get('/', async function (req, res, next) {
    try {
        // para recogerlo por nombre
        const name = req.query.name;
        // para recogerlo por tags
        const tags = req.query.tags;

        // para recogerlo si se vende
        const sale = req.query.sale;

        // para paginar
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);

        const filtro = {};

        if (name) {
            filtro.name = name
        }

        if (tags) {
            filtro.tags = tags
        }

        if (sale) {
            filtro.sale = sale
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

// GET /api/anuncio:tags
// Obtener anuncios si 

// POST /api/anuncios (body)
router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;
        const anuncio = new Anuncio(anuncioData);

        const anuncioCreated = await anuncio.save();

        res.status(201).json({ result: anuncioCreated });
    } catch (err) {
        next(err);
    }
})

module.exports = router;