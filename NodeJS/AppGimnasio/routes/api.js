const router = require('express').Router();

const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');

router.use('/clients', apiClientsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;