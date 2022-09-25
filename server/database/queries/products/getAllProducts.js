const connection = require('../../config/connection');

const getAllProducts = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  getAllProducts,
};
