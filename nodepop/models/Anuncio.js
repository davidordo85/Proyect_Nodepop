'use strict';

const mongoose = require('mongoose');

// esquema

const anuncioSchema = mongoose.Schema({
    name: { type: String, index: true },
    sale: { type: Boolean, index: true },
    price: { type: Number, index: true },
    image: String,
    tags: { type: [String], index: true }
}, {
    collection: 'anuncios'
});

anuncioSchema.statics.list = function (filtro, limit, skip) {
    const query = Anuncio.find(filtro);
    query.limit(limit);
    query.skip(skip);
    return query.exec();
}


const Anuncio = mongoose.model('Anuncio', anuncioSchema)


module.exports = Anuncio;