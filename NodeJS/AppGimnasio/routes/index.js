var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
  const numClientes = 14;
  const arrClientes = [
    { nombre: 'Mario', apellidos: 'Girón', numClient: 'AF9910' },
    { nombre: 'Rocío', apellidos: 'Martínez', numClient: 'AFG8891' },
    { nombre: 'Roberto', apellidos: 'Robles', numClient: 'AF1123' },
  ];
  res.render('home', {
    clients: numClientes,
    arrClientes: arrClientes
  });
  // Carpeta de Vistas + home + extensión del motor de plantillas
});

router.get('/contact', (req, res) => {

  res.render('contact', {
    numeros: [1, 4, 12, 56, 33, 89]
  });
});

module.exports = router;
