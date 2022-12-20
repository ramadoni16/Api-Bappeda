const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller");

const user = require("./user");
const bappeda = require("./bappeda");

router.post(
  "/users/login",
  // checkRequest(requiredRequest.admin_login),
  authController.login
);

router.use("/users", user);
router.use("/bappeda", bappeda);
module.exports = router;
