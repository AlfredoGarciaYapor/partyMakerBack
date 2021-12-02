var express = require('express');
var router = express.Router();
const users = require('../controllers/users.controller')

/* GET users listing. */
router.post('/SingUp', users.signUpUser);
router.post('/Login', users.getUser);

module.exports = router;
