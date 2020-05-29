const router = require('express').Router();

const Client = require('../models/client');

// http://localhost:3000/clients
router.get('/', async (req, res) => {
    const clients = await Client.find();
    res.render('clients/index', { clients });
});

// http://localhost:3000/clients/new
// Muestra un formulario para insertar clientes
router.get('/new', (req, res) => {
    res.render('clients/formulario');
});

router.get('/:clientId', async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const client = await Client.findById(clientId);
        res.render('clients/detalle', { client });
    } catch (err) {
        res.send('Error al recuperar el Cliente ' + err.message);
    }
});

// POST http://localhost:3000/clients/create
// Gestiona los datos enviados por el formulario anterior
router.post('/create', async (req, res) => {
    req.body.active = (req.body.active === 'on') ? true : false;
    await Client.create(req.body);
    res.redirect('/clients');
});

module.exports = router;