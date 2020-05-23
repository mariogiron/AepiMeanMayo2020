/**
 * FICHERO DE PRUEBAS SOBRE MONGODB
 */

const router = require('express').Router();

const Persona = require('../models/persona');

router.get('/', (req, res) => {
    let pers = new Persona();
    pers.nombre = 'Ramón';
    pers.apellidos = 'González';
    pers.edad = 23;
    pers.activo = true;
    pers.save();
    res.send('Estoy en /test');
});

module.exports = router;