const { deleteProductFromCartQuery } = require('../../database/queries');
const CustomizedError = require('../../errors/customError');

const deleteFromCart = (req, res) => {
  const { id } = req.params;

  deleteProductFromCartQuery(id)
    .then((data) => res.json({ deletedId: data.rows[0].id }))
    .catch((err) => {
      throw new CustomizedError(500, `Error: ${err}`);
    });
};

module.exports = {
  deleteFromCart,
};
