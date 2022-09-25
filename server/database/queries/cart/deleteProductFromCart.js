const connection = require('../../config/connection');

const deleteProductFromCart = (productId) => {
  const sql = {
    text: `
      DELETE FROM
        cart
      WHERE
        product_id = $1
      RETURNING
        product_id;
    `,
    values: [productId],
  };
  return connection.query(sql);
};

module.exports = {
  deleteProductFromCart,
};
