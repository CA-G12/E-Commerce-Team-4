const {
  login,
  logout,
  signup,
} = require('./auth');
const {
  getCartProducts,
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
  signup,
  getCartProducts,
  deleteFromCart,
  postToCart,
  getOneProduct,
  getProducts,
  deleteProduct,
};
