const { getPassword } = require('../../database/queries');
const schemaLogin = require('../../utils/validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomizedError = require('../../errors/customError');

const controllerLogin = (req, res) => {
  let userId;
  schemaLogin
    .validateAsync(req.body)
    .then((data) => getPassword(data.email))
    .then((res) => {
      if (res.rowCount == 0) {
        throw new CustomizedError(500, 'wrong email or password');
      }
      const { id, password } = res.rows[0];
      userId = id;
      return bcrypt.compare(req.body.password, password);
    })
    .then((data) => {
      if (data == false) {
        throw new CustomizedError(500, 'wrong email or password');
      } else {
        jwt.sign({ userId }, process.env.SECRET_KEY, (err, token) => {
          if (err) {
            throw new Error('server error');
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
