const { hash } = require('bcrypt');
const { addUserQuery } = require('../../database/queries');
const { signUpValidationSchema } = require('../../utils');
const CustomizedError = require('../../errors/customError');

const signUp = (req, res) => {
  const { name, email, username, password, confirmPassword, country, address } =
    req.body;

  signUpValidationSchema
    .validateAsync({
      name,
      email,
      username,
      password,
      confirmPassword,
      country,
      address,
    })
    .then(() => hash(password, 12))
    .then((hashed) =>
      addUserQuery({
        name,
        email,
        username,
        hashed,
        confirmPassword,
        country,
        address,
      })
    )
    .then(({ rowCount }) => {
      if (rowCount) {
        res.json({ message: 'account is created successfully' });
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      throw new CustomizedError(500, `Error: ${err}`);
    });
};

module.exports = {
  signUp,
};
