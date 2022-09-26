const router = require('express').Router();

const { controllerLogin } = require('../controllers/auth/login.js')
router.post('/login', controllerLogin)

module.exports = router;
