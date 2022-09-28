const { checkEmail, getPassword } = require('../../database/queries');
const { schemaLogin } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomizedError = require('../../errors/customError');

const controllerLogin = (req, res) => {
  let userId;
  schemaLogin.validateAsync(req.body)
    .then((data) => checkEmail(data.email))
    .then((emailData) => {
      if (emailData.rowCount === 0) {
        throw new CustomizedError(400, 'Email does not exist');
      }
      return getPassword(req.body.email);
    })
    .then((res) => {
      if (res.rowCount === 0) {
        throw new CustomizedError(400, 'wrong email or password');
      }
      const { id, password } = res.rows[0];
      userId = id;
      return bcrypt.compare(req.body.password, password);
    })
    .then((data) => {
      if (data === false) {
        throw new CustomizedError(400, 'wrong email or password');
      } else {
        jwt.sign({ userId, password: req.body.password }, process.env.SECRET_KEY, (err, token) => {
          if (err) {
            throw new CustomizedError(500, 'server error');
          } else {
            res.cookie('token', token).json({
              msg: 'login true',
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err, 'err');
      res.json({ msg: err.message });
    });
};
module.exports = {
  controllerLogin,
};
