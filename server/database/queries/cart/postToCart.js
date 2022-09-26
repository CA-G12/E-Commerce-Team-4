const connection = require('../../config/connection');

const postToCartQuery = (userId, productID) => {
  const sql = {
    text: `
      INSERT INTO
        cart
      (user_id, product_id)
        VALUES
      ($1, $2)
      RETURNING cart.id;
    `,
    values: [userId, productID],
  };
  return connection.query(sql);
};

module.exports = {
  postToCartQuery,
};