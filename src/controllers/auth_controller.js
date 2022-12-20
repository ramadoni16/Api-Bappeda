const authService = require("../services/auth_service");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");

let response;

const login = async (req, res) => {
  let loginResponse;
  try {
    const { EMAIL, PASSWORD, ROLE } = req.body;
    loginResponse = await authService.login({ EMAIL, PASSWORD, ROLE });
    response = { ...loginResponse };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }

  res.json(response);
};

module.exports = {
  login
};
