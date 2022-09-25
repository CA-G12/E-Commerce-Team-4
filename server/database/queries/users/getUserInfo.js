const connection = require('../../config/connection');

const getUserInfo = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = {
  getUserInfo,
};
