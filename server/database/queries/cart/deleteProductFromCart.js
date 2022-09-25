const connection = require('../../config/connection');

const deleteProductFromCart = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  deleteProductFromCart,
};
