const userDao = require("../models/userDao");
const { raiseCustomError } = require("../utils/error.js");

const getUserInfo = async () => {
  const result = await userDao.getUserInfo();
  return result;
};

const getUserDetail = async (userId) => {
  const result = await userDao.getUserDetail(userId);
  return result;
};

module.exports = {
  getUserInfo,
  getUserDetail,
};
