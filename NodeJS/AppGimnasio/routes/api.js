const router = require('express').Router();

const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');

const { checkToken } = require('./middlewares');

router.use('/clients', checkToken, apiClientsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;