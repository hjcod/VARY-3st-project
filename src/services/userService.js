const userDao = require("../models/userDao");

const getUserInfo = async () => {
  const result = await userDao.getUserInfo();
  return result;
};

module.exports = {
  getUserInfo,
};
