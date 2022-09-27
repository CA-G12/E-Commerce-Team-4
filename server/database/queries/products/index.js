const {
  getAllProductsQuery,
  getAllProductsDescQuery,
  getAllProductsAscQuery,
  getProductsByCategoryQuery,
  showMoreProductsQuery,
} = require('./getAllProducts');
const { getOneProduct } = require('./getOneProduct');

module.exports = {
  getOneProduct,
  getAllProductsQuery,
  getAllProductsDescQuery,
  getAllProductsAscQuery,
  getProductsByCategoryQuery,
  showMoreProductsQuery,
};
