const logout = (req, res) => {
  res.clearCookie('token').json({ msg: 'logout' });
};

module.exports = {
  logout,
};
