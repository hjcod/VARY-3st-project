const { raiseCustomError } = require("../utils/error");

const validateEmail = (userEmail) => {
  const userEmailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!userEmailRegex.test(userEmail)) {
    return raiseCustomError("INVALID_USEREMAIL", 401);
  }
};

const validatePw = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (!passwordRegex.test(password)) {
    return raiseCustomError("INVALID_PASSWORD", 401);
  }
};

module.exports = {
  validateEmail,
  validatePw,
};
