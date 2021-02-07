'use strict'

require('../lib/connectMongoose');

const fileJson = require('./anuncios.json');
const Anuncio = require('../models/Anuncio');

const anuncio_1 = new Anuncio({
    name: 'Raqueta',
    sale: true,
    price: 25,
    image: "Raqueta.jpg",
    tags: ['lifestyle, work']
});

anuncio_1.save(function (err, anuncioCreated) {
    if (err) throw err;
    console.log('anuncio de prueba ' + anuncioCreated.name + ' creado')
});

async function initDB() {
    try {
        const delet = await Anuncio.deleteMany()
        console.log('se ha borrado', delet);

        const chargedAnuncio = await Anuncio.insertMany(fileJson);
        console.log('carga fichero anuncios.json', chargedAnuncio);

    } catch (error) {
        console.log('fallo en la inicializacion', error)
    }
}

initDB().catch(err => {
    console.log(err);
})


