const userDao = require("../models/userDao");

export const getUserInfo = async () => {
  const result = await userDao.getUserInfo();
  return result;
};

export const getUserDetail = async (userId: string) => {
  const result = await userDao.getUserDetail(userId);
  return result;
};
