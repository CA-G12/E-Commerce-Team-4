const connection = require('../../config/connection');

const getAllProductsQuery = () => {
  const sql = {
    text: 'select * from products Limit 2;',
    values: [],
  };
  return connection.query(sql.text);
};

const getAllProductsDescQuery = () => {
  const sql = {
    text: 'select * from products ORDER BY price DESC',
    values: [],
  };
  return connection.query(sql.text);
};


const getAllProductsAscQuery = () => {
  const sql = {
    text: 'select * from products ORDER BY price ASC',
    values: [],
  };
  return connection.query(sql.text);
};

const getProductsByCategoryQuery = (category) => {
  const sql = {
    text: `select * from products where category=$1`,
    values: [category],
  };
  return connection.query(sql.text, sql.values);
};


const showMoreProductsQuery = () => {
  const sql = {
    text: 'select * from products OFFSET 2 ROWS FETCH NEXT 2 ROWS ONLY;',
    values: [],
  };
  return connection.query(sql.text);
};


module.exports = {
  getAllProductsQuery, getAllProductsDescQuery, getAllProductsAscQuery, getProductsByCategoryQuery, showMoreProductsQuery
};
