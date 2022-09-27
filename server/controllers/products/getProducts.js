const {
  getAllProductsQuery,
  getAllProductsDescQuery,
  getAllProductsAscQuery,
  getProductsByCategoryQuery,
  showMoreProductsQuery,
} = require('../../database/queries/products');

const getProducts = (req, res) => {
  // ? Do something.
  getAllProductsQuery()
    .then((result) => res.json({ data: result.rows, statusCode: 200 }))
    .catch((err) =>
      res.send({
        msg: err.message || 'Internal server error',
        statusCode: err.status || 500,
      })
    );
};

const getProductsByPriceDesc = (req, res) => {
  // ? Do something.
  getAllProductsDescQuery()
    .then((result) => res.json({ data: result.rows, statusCode: 200 }))
    .catch((err) =>
      res.send({
        msg: err.message || 'Internal server error',
        statusCode: err.status || 500,
      })
    );
};

const getProductsByPriceAsc = (req, res) => {
  // ? Do something.
  getAllProductsAscQuery()
    .then((result) => res.json({ data: result.rows, statusCode: 200 }))
    .catch((err) =>
      res.send({
        msg: err.message || 'Internal server error',
        statusCode: err.status || 500,
      })
    );
};

// ! create function to get by category
const getProductsByCategory = (req, res) => {
  // ? Do something.
  const { category } = req.params;
  getProductsByCategoryQuery(category)
    .then((result) => res.json({ data: result.rows, statusCode: 200 }))
    .catch((err) =>
      res.send({
        msg: err.message || 'Internal server error',
        statusCode: err.status || 500,
      })
    );
};

// ! showMore
const showMoreProducts = (req, res) => {
  // ? Do something.
  const { number } = req.params
  showMoreProductsQuery(number)
    .then((result) => {
      return res.json({ data: result.rows, statusCode: 200 })})
    .catch((err) =>
      res.send({
        msg: err.message || 'Internal server error',
        statusCode: err.status || 500,
      })
    );
};

module.exports = {
  getProducts,
  getProductsByPriceDesc,
  getProductsByPriceAsc,
  getProductsByCategory,
  showMoreProducts,
};
