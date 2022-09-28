const {productDetailsQuery} = require('../../database/queries')

const productDetails = (req, res, next) => {
  const { id } = req.params;
  
  productDetailsQuery(id)
    .then(({ rows, rowCount }) => {
      !rowCount ? next() : res.json({data: rows});
    })
    .catch(err => res.json(err))
}

module.exports = productDetails;