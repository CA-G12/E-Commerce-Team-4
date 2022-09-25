const connection = require('../../config/connection');

const getOneProduct = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  getOneProduct,
};
