const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user_controller");

// const { checkRequest, requiredRequest } = require("../utils");

router.post(
  "/create",
  // checkRequest(requiredRequest.authorization),
  controllers.registrasi
);

module.exports = router;
