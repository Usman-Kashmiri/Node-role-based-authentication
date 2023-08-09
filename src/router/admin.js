const router = require("express").Router();
const { adminAuth } = require("../middleware/auth");
const adminController = require("../controllers/adminController");

router.route("/info").get(adminAuth, adminController.userData);

module.exports = router;