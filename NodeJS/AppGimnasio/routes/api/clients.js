const router = require('express').Router();

const Client = require('../../models/client');

// GET http://localhost:3000/api/clients
router.get('/', (req, res) => {

    console.log(req.userId);

    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.json({ error: err.message }));
});

// router.get('/', async (req, res) => {
//     try {
//         const clients = await Client.find()
//     } catch (err) {

//     }
// });

// POST http://localhost:3000/api/clients
router.post('/', async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.json(client);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// PUT http://localhost:3000/api/clients
router.put('/', async (req, res) => {
    try {
        const editedClient = await Client.findByIdAndUpdate(req.body.id, req.body, { new: true });
        res.json(editedClient);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// DELETE http://localhost:3000/api/clients/IDCLIENTE
router.delete('/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    Client.findByIdAndDelete(clientId)
        .then(client => {
            if (client) {
                res.json({ success: 'El cliente se ha borrado' });
            } else {
                res.json({ error: 'El cliente no existe' });
            }
        })
        .catch(err => {
            res.json({ error: err.message });
        })
});

module.exports = router;