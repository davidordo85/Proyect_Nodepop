'use strict';

const mongoose = require('mongoose');

// esquema

const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    image: String,
    tags: [String]
});

const Anuncio = mongoose.model('Anuncio', anuncioSchema)


module.exports = Anuncio;