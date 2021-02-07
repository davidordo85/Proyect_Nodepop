var express = require('express');
var router = express.Router();

const { query, param, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Nodepop' });

});

/*
// GET /parametroenruta/*
router.get('/parametroenruta/:dato', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params);
  res.send('He recibido el dato: ' + dato);
});

router.get('/parametrofiltrado/:dato([0-9]+)', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params);
  res.send('He recibido el dato: ' + dato);
})

router.get('/parametroopcional/:dato?', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params);
  res.send('He recibido el dato: ' + dato);
})

// http://localhost:3000/parametros/55/piso/2/puerta/B
router.get('/parametros/:dato/piso/:piso/puerta/:puerta', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params);
  res.send('He recibido el dato: ' + dato);
})

// recibir datos en query-string
// /querystring?dato=20
router.get('/querystring', [ // validaciones
  query('dato').isNumeric().withMessage('must be numeric'),
  query('talla').isAlpha().withMessage('must be literal')
], (req, res, next) => {
  validationResult(req).throw();
  const dato = req.query.dato;
  console.log(req.query);
  res.send('He recibido el dato: ' + dato);
});

router.post('/enelbody', (req, res, next) => {
  console.log(req.body);
  console.log('Cabecera', req.get('Content-type'));
  res.send('He recibido el dato:' + req.body.numero);
})

*/

module.exports = router;
