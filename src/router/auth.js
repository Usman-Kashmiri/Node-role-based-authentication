const express = require("express");
const auth = require("../controllers/authController");
const { isAuthenticated, adminAuth, userAuth } = require("../middleware/auth");
const router = express.Router();
const { validateAuth } = require("../validators/authValidator");

//post
router.route("/register").post(validateAuth("register"), auth.register);
router.route("/login").post(validateAuth("login"), auth.login);

//get
router.route("/logout").get(auth.logout);

module.exports = router;
