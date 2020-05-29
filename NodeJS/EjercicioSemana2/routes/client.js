const router = require('express').Router();

router.get('/index', (req, res) => {
    const clientes = [
        { nombre: 'Mario', apellidos: 'Girón' },
        { nombre: 'Hugo', apellidos: 'Prada' }
    ];
    res.render('client/index', { clientes })
});

router.get('/new', (req, res) => {
    res.render('client/new');
});

module.exports = router;