const router = require('express').Router();

// http://localhost:3000/clients
router.get('/', (req, res) => {
    res.render('clients/index');
});

// http://localhost:3000/clients/new
router.get('/new', (req, res) => {
    res.render('clients/formulario');
});

// POST http://localhost:3000/clients/create
router.post('/create', (req, res) => {
    // ¿Me están llegando los datos del formulario?
    console.log(req.body);
    res.redirect('/clients');
});

module.exports = router;