const jwt = require('jsonwebtoken');
const moment = require('moment');

const checkToken = (req, res, next) => {
    // Comprobar si la cabecera user-token viene incluida
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir la cabecera user-token' });
    }

    // Comprobar si el token está bien formado
    const token = req.headers['user-token'];
    let obj = {};
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (err) {
        return res.json({ error: 'El formato del token no es el correcto' });
    }

    // Comprobar si la fecha de expiración ha pasado
    const currentDate = moment().unix();
    if (currentDate > obj.expiredAt) {
        return res.json({ error: 'El token está caducado' });
    }

    console.log(obj);

    req.userId = obj.userId;

    next();
}

module.exports = {
    checkToken
}