var express = require('express');
var router = express.Router();

/* GET users listing. */
// GET http://localhost:3000/users/otro
router.get('/otro', function (req, res, next) {
  res.send('respond with a resource');
});

// GET http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Respondo a USERS NEW');
});

router.get('/:usuarioId/proyecto/:proyectoId', (req, res) => {
  // const usuarioId = req.params.usuarioId;
  // const proyectoId = req.params.proyectoId;
  // Destructuring
  const { usuarioId, proyectoId } = req.params;
  console.log(usuarioId, proyectoId);
  res.send(`Obtengo el usuario: ${usuarioId} y el proyecto: ${proyectoId}`);
});

router.post('/create', (req, res) => {
  console.log(req.body);
  const { nombre, apellidos } = req.body;
  console.log(nombre, apellidos);
  res.send('Estoy dentro de POST /users/create');
});

module.exports = router;
