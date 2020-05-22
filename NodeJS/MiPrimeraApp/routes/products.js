const router = require('express').Router();

const productos = [
    { nombre: 'Picadora', precio: 45.99, departamento: 'electrodomestico' },
    { nombre: 'Macbook Pro', precio: 1200, departamento: 'informatica' },
    { nombre: 'Lavadora', precio: 245.99, departamento: 'electrodomestico' }
];

// GET http://localhost:3000/products/create
router.get('/create', (req, res) => {
    res.send('PRODUCTS CREATE');
});

// GET http://localhost:3000/products/all
router.get('/all', (req, res) => {
    console.log(req.query);
    res.send('PRODUCTS ALL');
});

// GET http://localhost:3000/products/json
router.get('/json', (req, res) => {
    res.json(productos);
});

router.get('/categoria/:departamento', (req, res) => {
    console.log(req.params.departamento);
    const arrFiltrado = productos.filter((producto) => {
        return (producto.departamento === req.params.departamento);
    });
    console.log(arrFiltrado);
    res.send('Entro a la petición de las CATEGORÍAS: ' + req.params.departamento);
});

module.exports = router;