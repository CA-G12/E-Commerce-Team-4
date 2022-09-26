const {
  login,
  logout,
  signup,
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
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
} = require('./products');

module.exports = {
  login,
  logout,
  signup,
  getCartProduct,
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
