const { controllerLogin } = require('./login');
const { signUp } = require('./signup');
const { logout } = require('./logout');
const { checkLogin } = require('./checkLogin')

module.exports = {
  controllerLogin,
  signUp,
  logout,
  checkLogin,
};
