const { getCartProductsForUserQuery } = require('../../database/queries');
const CustomizedError = require('../../errors/customError');

const getCartProducts = (req, res) => {
  const { id } = req.params;

  getCartProductsForUserQuery(id)
    .then((data) => res.json({ products: data.rows }))
    .catch((err) => {
      throw new CustomizedError(500, `Error: ${err}`);
    });
};

module.exports = {
  getCartProducts,
};
