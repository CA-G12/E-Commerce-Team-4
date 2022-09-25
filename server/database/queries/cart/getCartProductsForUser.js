const connection = require('../../config/connection');

const getCArtProductsForUser = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  getCArtProductsForUser,
};
