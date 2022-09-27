const { hash } = require('bcrypt');
const { signUpQuery } = require('../../database/queries');
const { signUpValidationSchema } = require('../../utils');

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
    .then(() => hash(password, 10))
    .then((hashed) =>
      signUpQuery({
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
        res.json({ message: 'created account succesfuly' });
      }
    })
    .catch((err) => console.log('errrrorrrrrrrrrr', err));
};

module.exports = {
  signUp,
};
