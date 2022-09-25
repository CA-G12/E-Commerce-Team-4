require('dotenv').config();

const jwt = require('jsonwebtoken');
const CustomizedError = require('../errors/customError');

const secretKey = process.env.SECRET_KEY;

const verifyAccessToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new CustomizedError(401, 'Unauthenticated');

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) throw new CustomizedError(401, 'Unauthenticated');
    req.user = decoded;
    next();
  });
};

module.exports = {
  verifyAccessToken,
};
