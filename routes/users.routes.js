var express = require('express');
var router = express.Router();
const users = require('../controllers/users.controller')

/* GET users listing. */
router.post('/SingUp', users.signUpUser);
router.post('/Login', users.getUser);
router.post('/updateInfo', users.updateUser);
router.post('/deleteUser', users.removeUser);

module.exports = router;
