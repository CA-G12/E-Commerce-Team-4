const { postToCartQuery } = require('../../database/queries');
const CustomizedError = require('../../errors/customError');

const postToCart = (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  postToCartQuery(userId, productId)
    .then((data) => res.json({ message: `${data.rowCount} rows were added!!` }))
    .catch((err) => {
      throw new CustomizedError(500, `Error: ${err}`);
    });
};

module.exports = {
  postToCart,
};
