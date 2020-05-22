var express = require('express');
var router = express.Router();

/* GET home page. */
// GET http://localhost:3000
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:nombreDocumento.:extension', (req, res) => {
  const { nombreDocumento, extension } = req.params;
  res.send(`Accedo al fichero nombre: ${nombreDocumento} y extensión: ${extension}`);
});

module.exports = router;