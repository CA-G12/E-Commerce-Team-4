const connection = require('../../config/connection');

const addUserQuery = ({ name, username, email, hashed, country, address }) => {
  const sql = {
    text: `
    INSERT INTO
      users 
        (name, username, email, password, country, address)
      VALUES 
        ($1, $2, $3, $4, $5, $6);
    `,
    values: [name, username, email, hashed, country, address],
  };
  return connection.query(sql);
};

module.exports = {
  addUserQuery,
};
