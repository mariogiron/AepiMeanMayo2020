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

module.exports = router;
