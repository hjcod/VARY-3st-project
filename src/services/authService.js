const authDao = require("../models/authDao");
const { validateEmail, validatePw } = require("../utils/validate");

const signIn = async (email, password) => {
  validateEmail(email);
  validatePw(password);
};

module.exports = {
  signIn,
};
