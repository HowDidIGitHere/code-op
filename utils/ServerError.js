class ServerError extends Error {
  constructor(message , statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode % 100 === 4 ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = ServerError;