const {
  getAllProductsQuery,
  getAllProductsDescQuery,
  getAllProductsAscQuery,
  getProductsByCategoryQuery,
  showMoreProductsQuery,
} = require('./getAllProducts');

const productDetailsQuery = require('./productDetailsQuery')

module.exports = {
  getAllProductsQuery,
  getAllProductsDescQuery,
  getAllProductsAscQuery,
  getProductsByCategoryQuery,
  showMoreProductsQuery,
  productDetailsQuery,
};
