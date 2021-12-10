const ServerError = require('../utils/ServerError');
const keys = require('../config/keys')

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new ServerError(message, 400);
};

const handleDuplicateKeyError = err => {
  const errValue = Object.values(err.keyValue)[0];
  const message = `'${errValue}' is taken`;
  return new ServerError(message, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  return new ServerError(message, 400);
};

const handleJWTValidationError = () => {
  const message = 'Invalid token.';
  return new ServerError(message, 401);
};

const handleJWTExpireError = () => {
  const message = 'Token expired. Please login again';
  return new ServerError(message, 401);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

  // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('----------------- INTERNAL ERROR -----------------\n', 'err: ', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong on our end...'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  console.log(process.env.NODE_ENV + ' error');

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // make copy of err object
    let error = JSON.parse(JSON.stringify(err));
    error.message = err.message;

    if(error.code === 11000) {
      error = handleDuplicateKeyError(error);
    }

    if (error.name === 'CastError') {
      error = handleCastErrorDB(error);
    }

    if (error.name === 'ValidationError' || error.errors? Object.values(error.errors)[0].name === 'ValidatorError'? true: false: false ){
      error = handleValidationErrorDB(error);
    }

    if (error.name === 'JsonWebTokenError') {
      error = handleJWTValidationError();
    }

    if (error.name === 'TokenExpiredError') {
      error = handleJWTExpireError();
    }

    sendErrorProd(error, res);
  }
};