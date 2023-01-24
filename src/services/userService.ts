const userDao = require("../models/userDao");

export const getUserInfo = async <pagination>(page:number|pagination) => {
  const result = await userDao.getUserInfo(page);
  return result;
};

export const getUserDetail = async (userId: string) => {
  const result = await userDao.getUserDetail(userId);
  return result;
};
export function searchByEmail() {
  throw new Error("Function not implemented.");
}
