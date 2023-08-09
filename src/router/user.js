const router = require("express").Router();
const { isAuthenticated, userAuth } = require("../middleware/auth");
const userController = require("../controllers/userController");

router.route("/info").get(userAuth, userController.userData);

module.exports = router;
