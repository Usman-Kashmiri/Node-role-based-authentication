const User = require("../models/user");
const SuccessHandler = require("../utils/SuccessHandler");
const ErrorHandler = require("../utils/ErrorHandler");

// User Data
const userData = async (req, res) => {
  try {
    const user = req.user;
    return SuccessHandler(
      {
        message: "You're a user of this app",
        userData: user,
      },
      200,
      res
    );
  } catch (error) {
    return ErrorHandler(error.message, 500, req, res);
  }
};

module.exports = {
  userData,
};
