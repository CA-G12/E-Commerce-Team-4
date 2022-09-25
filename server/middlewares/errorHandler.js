const notFound = (req, res) => {
  res.json({ status: 404, message: 'Page is not found!' });
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  const { status, message } = err;
  res.json({ status, message });
};

module.exports = {
  notFound,
  serverError,
};
