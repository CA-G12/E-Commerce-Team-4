const router = require('express').Router();

const {
  deleteFromCart,
  getCartProducts,
  postToCart,
} = require('../controllers');
const { verifyAccessToken } = require('../middlewares/verifyToken');

router.get('/cart', verifyAccessToken, getCartProducts);
router.delete('/cart/:id', verifyAccessToken, deleteFromCart);
router.post('/cart', verifyAccessToken, postToCart);

module.exports = router;
