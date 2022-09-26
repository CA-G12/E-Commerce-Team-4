const {
  login,
  logout,
  signUp,
} = require('./auth');
const {
  getCartProduct,
  postToCart,
  deleteFromCart,
} = require('./cart');
const {
  deleteProduct,
  getOneProduct,
  getProducts,
} = require('./products');

module.exports = {
  login,
  logout,
  signUp,
  getCartProduct,
  deleteFromCart,
  postToCart,
  getOneProduct,
  getProducts,
  deleteProduct,
};
