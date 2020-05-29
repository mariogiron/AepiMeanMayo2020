/**
 * FICHERO DE PRUEBAS SOBRE MONGODB
 */

const router = require('express').Router();

const Persona = require('../models/persona');

// http://localhost:3000/test
router.get('/', (req, res) => {
    // Insert con el método SAVE
    let pers = new Persona();
    pers.nombre = 'Ramón';
    pers.apellidos = 'González';
    pers.edad = 23;
    pers.activo = true;
    pers.save();
    res.send('Estoy en /test');
});

router.get('/insert_v2', (req, res) => {
    // Insert con el método create.
    // Gestión de la promesa con THEN
    Persona.create({
        nombre: 'Álvaro',
        apellidos: 'García',
        edad: 24,
        activo: false
    }).then((persona) => {
        res.json(persona);
    });
});

router.get('/insert_v3', async (req, res) => {
    // Insert con el método CREATE
    // Promesa gestionada con ASYNC AWAIT
    const pers = await Persona.create({ nombre: 'Rosa', apellidos: 'Martínez', edad: 65, activo: true });
    res.json(pers);
});

router.get('/getAll', (req, res) => {
    // Recuperar todos los documentos de la colección personas
    // Promesa gestionada con THEN
    Persona.find()
        .then((personas) => {
            res.json(personas);
        });
});

router.get('/getAll_v2', async (req, res) => {
    // Recuperar todos los documentes de la colección personas
    // Gestion de la promesa con ASYNC AWAIT
    const personas = await Persona.find();
    res.json(personas);
});

router.get('/getByName', async (req, res) => {
    const personas = await Persona.find({ nombre: 'Ramón' });
    res.json(personas);
});

router.get('/mayoresEdad', async (req, res) => {
    const personas = await Persona.find({
        edad: { $gt: 18 }
    });
    res.json(personas);
});

router.get('/trabajadores', async (req, res) => {
    const personas = await Persona.find({
        edad: { $gt: 18, $lt: 65 }
    });
    res.json(personas);
});

router.get('/trabajadoresActivos', (req, res) => {
    // select * from personas where edad > 18 and edad < 65 and activo = true
    Persona.find({
        edad: { $gt: 18, $lt: 65 },
        activo: true
    }).then((personas) => {
        res.json(personas);
    });
});

router.get('/noTrabajadores', async (req, res) => {
    const personas = await Persona.find({
        $or: [
            { edad: { $lt: 18 } },
            { edad: { $gte: 65 } }
        ]
    });
    res.json(personas);
});

module.exports = router;