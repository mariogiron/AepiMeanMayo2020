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

// GET http://localhost:3000/clients/edit/IDCLIENT
router.get('/edit/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    Client.findById(clientId)
        .then((client) => {
            res.render('clients/formularioEdit', { client });
        })
        .catch((err) => {
            res.send('Error al recuperar al Cliente');
        });
});

// GET http://localhost:3000/clients/remove/IDCLIENT
router.get('/remove/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    Client.findByIdAndDelete(clientId)
        .then(client => {
            res.redirect('/clients');
        })
        .catch((err) => {
            res.send('Error al borrar el cliente ' + err.message);
        })
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

// POST http://localhost:3000/clients/update
// Gestiona los datos recibidos desde el formulario de actualización
router.post('/update', async (req, res) => {
    try {
        await Client.findByIdAndUpdate(req.body.id, req.body);
        res.redirect('/clients');
    } catch (err) {
        res.send('Error en la actualización del cliente');
    }
});

module.exports = router;