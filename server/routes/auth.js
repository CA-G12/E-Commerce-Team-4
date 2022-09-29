const router = require('express').Router();

const { controllerLogin } = require('../controllers/auth/login.js');
const { checkLogin } = require('../controllers');
const { logout } = require('../controllers')

router.post('/login', controllerLogin);
router.get('/logout', logout);
router.get('/check-login', checkLogin);

module.exports = router;
