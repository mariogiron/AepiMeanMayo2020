const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../../models/user');

// POST http://localhost:3000/api/users/register
router.post('/register', (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 15);

    User.create(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json({
                error: 'Ha ocurrido un error en el registro',
                message: err.message
            });
        });
});

module.exports = router;