class ServerError extends Error {
  constructor(message , statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode % 100 === 4 ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor)
  }

  pagesNotfound() {
    throw new ServerError("We could not find the page you are looking for", 403);
  }

  classError(msg, Class) {
    const errorMsg = Class.constructor.name + ": " + msg;
    throw new ServerError(errorMsg, 500);
  }
}

module.exports = ServerError;