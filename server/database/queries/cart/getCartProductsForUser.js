const connection = require('../../config/connection');

const getCartProductsForUser = (userId) => {
  const sql = {
    text: `
      SELECT
        id, name, product_img price, category, description
      FROM
        products
      INNER JOIN
        cart
      ON
        products.id = cart.product_id
      INNER JOIN
        users
      ON
        cart.user_id = $1;
    `,
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = {
  getCartProductsForUser,
};
