function ApiError(statusCode, message, isOperational = true, stack = "") {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.isOperational = isOperational;
  if (stack) {
    error.stack = stack;
  } else {
    Error.captureStackTrace(error, ApiError);
  }
  return error;
}

module.exports = ApiError;

// class ApiError extends Error {
//     constructor(statusCode, message, isOperational = true, stack = "") {
//       super(message);
//       this.statusCode = statusCode;
//       this.isOperational = isOperational;
//       if (stack) {
//         this.stack = stack;
//       } else {
//         Error.captureStackTrace(this, this.constructor);
//       }
//     }
//   }
  
//   module.exports = ApiError;
