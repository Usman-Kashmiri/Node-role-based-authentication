const auth = require("./auth");
const user = require("./user");
const admin = require("./admin");
const router = require("express").Router();
const { isAuthenticated } = require("../middleware/auth");

router.use("/auth", auth);
router.use("/admin", isAuthenticated, admin);
router.use("/user", isAuthenticated, user);

// API Documentation
router.route("/swagger.json").get((req, res) => {
    // Read the generated Swagger file (swagger_output.json)
    const swaggerDocument = require("../../swagger_output.json");
    res.json(swaggerDocument);
  });;

module.exports = router;