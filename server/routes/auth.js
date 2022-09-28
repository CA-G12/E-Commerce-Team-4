const router = require('express').Router();

const { controllerLogin } = require('../controllers/auth/login.js');
const { checkLogin } = require('../controllers');

router.get('/check-login', checkLogin);
router.post('/login', controllerLogin);

module.exports = router;
