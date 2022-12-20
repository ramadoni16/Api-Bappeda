const user_service = require("../services/user_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
// const joi = require("joi");
const { v4 } = require("uuid");

let response;

// REGISTRASI
const registrasi = async (req, res) => {
  try {
    req.body.GUID = v4();
    console.log(req.body);
    const user = await user_service.registrasi(req.body);
    response = { ...user };
  } catch (err) {
    logger.error(err);
    response = { ...requestResponse.server_error };
  }
  res.status(response.code).json(response);
};

module.exports = {
  registrasi
};
