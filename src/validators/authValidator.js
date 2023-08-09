const validator = require("validator");
const ErrorHandler = require("../utils/ErrorHandler");

const validateAuth = (type) => (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name && type === "register") {
    return ErrorHandler("First name is required", 400, req, res);
  }

  if (!last_name && type === "register") {
    return ErrorHandler("Last name is required", 400, req, res);
  }

  if (!email) {
    return ErrorHandler("Email is required", 400, req, res);
  }

  if (!password) {
    return ErrorHandler("Password is required", 400, req, res);
  }

  if (!validator.isEmail(email)) {
    return ErrorHandler("Invalid email", 400, req, res);
  }

  next();
};

module.exports = {
  validateAuth,
};
