const router = require('express').Router();

const auth = require('./auth');
const errors = require('./errors');
const cart = require('./cart');
const products = require('./products');
const users = require('./users');

router.use(auth);
router.use(errors);
router.use(cart);
router.use(products);
router.use(users);
module.exports = router;
