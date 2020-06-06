const router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

// POST http://localhost:3000/api/users/register
router.post('/register', (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 10);

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

// POST http://localhost:3000/api/users/login
router.post('/login', async (req, res) => {
    // Recibe dentro del BODY email y password (req.body.email / req.body.password)
    // Comprobar si el EMAIL existe en la BD -> Si existe recuperamos el usuario
    // Comprobar si la password es igual
    // Respondo con el TOKEN para ese usuario
    const usuarios = await User.find({ email: req.body.email });
    if (usuarios.length !== 1) {
        // Error si no existe el email o hay más de uno registrado
        return res.json({ error: 'Error en email y/o password' });
    }

    const usuario = usuarios[0];

    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (iguales) {
        // LOGIN CORRECTO
        const token = createToken(usuario);
        return res.json({ success: 'Login correcto', token });
    } else {
        //LOGIN INCORRECTO
        return res.json({ error: 'Error en email y/o password' });
    }
});

function createToken(pUser) {
    const obj = {
        userId: pUser._id,
        expiredAt: moment().add(15, 'minutes').unix()
    }
    return jwt.sign(obj, 'en un lugar de la mancha');
}

module.exports = router;