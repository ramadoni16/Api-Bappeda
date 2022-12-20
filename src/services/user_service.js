const bcrypt = require("bcrypt");
const user_model = require("../models/user_model");
const { requestResponse } = require("../utils");

let response;
const registrasi = async (data) => {
  const cekData = await user_model.findOne(
    { EMAIL: data.EMAIL },
    { _id: false },
    { lean: true }
  );

  if (cekData !== undefined && cekData !== null) {
    response = { ...requestResponse.unprocessable_entity };
    response.message = "Email ini sudah terdaftar.";
    return response;
  }

  const saltRounds = 12;
  const hashPassword = await bcrypt.hash(data.PASSWORD, saltRounds);
  data.PASSWORD = hashPassword;

  await user_model.create(data);

  return { ...requestResponse.success, data: user_model };
};

module.exports = {
  registrasi
};
