const express = require('express');
const app = express();

const matematicas = require('./matematicas');

app.get('/', (req, res) => {
    console.log('Entra por la petición');
    console.log(matematicas.suma(4, 9));
    console.log(matematicas.mult(4, 5));
    res.end('Fin de la petición');
});

app.get('/contacto', (req, res) => {
    res.end('Respuesta de GET sobre /contacto');
});

app.post('/', (req, res) => {
    res.end('Respuesta de la petición POST');
});

app.listen(3000, () => {
    console.log('App escuchando sobre el puerto 3000!');
});