const connection = require('../../config/connection');

const getPassword = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  getPassword,
};
