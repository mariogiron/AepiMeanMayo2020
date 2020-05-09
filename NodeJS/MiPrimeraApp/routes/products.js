const router = require('express').Router();

// GET http://localhost:3000/products/create
router.get('/create', (req, res) => {
    res.send('PRODUCTS CREATE');
});

// GET http://localhost:3000/products/create
router.get('/all', (req, res) => {
    res.send('PRODUCTS ALL');
});

// GET http://localhost:3000/products/json
router.get('/json', (req, res) => {
    const productos = [
        { nombre: 'Picadora', precio: 45.99, departamento: 'electrodoméstico' },
        { nombre: 'Macbook Pro', precio: 1200, departamento: 'informática' },
        { nombre: 'Lavadora', precio: 245.99, departamento: 'electrodoméstico' }
    ];
    res.json(productos);
});

module.exports = router;