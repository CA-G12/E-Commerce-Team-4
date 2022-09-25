const connection = require('../../config/connection');

const getAccount = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  getAccount,
};
