class CustomizedError extends Error {
  constructor(status, message) {
    super();
    this.status = status || 500;
    this.message = message || 'Internal Server Error!!!';
  }
}

module.exports = CustomizedError;
