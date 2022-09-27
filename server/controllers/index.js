const { login, logout, signUp } = require('./auth');
const { getCartProducts, postToCart, deleteFromCart } = require('./cart');
const {
  deleteProduct,
  getOneProduct,
  getProducts,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
} = require('./products');

module.exports = {
  login,
  logout,
  signUp,
  getCartProducts,
  deleteFromCart,
  postToCart,
  getOneProduct,
  getProducts,
  deleteProduct,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
};
