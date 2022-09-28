const { getCartProductsForUserQuery } = require('../../database/queries');
const CustomizedError = require('../../errors/customError');

const getCartProducts = (req, res) => {
  const { userId } = req.user;

  getCartProductsForUserQuery(userId)
    .then((data) => {
      return res.json({ products: data.rows });
    })
    .catch((err) => {
      throw new CustomizedError(500, `Error: ${err}`);
    });
};

module.exports = {
  getCartProducts,
};
