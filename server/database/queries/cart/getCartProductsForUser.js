const connection = require('../../config/connection');

const getCartProductsForUserQuery = (userId) => {
  const sql = {
    text: `
      SELECT
        products.id, products.name, product_img, price, category, description, user_id, product_id
      FROM
        products
      INNER JOIN
        cart
      ON
        products.id = cart.product_id
      WHERE
        cart.user_id = $1;
    `,
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = {
  getCartProductsForUserQuery,
};
