const searchDao = require("../models/searchDao");

export const searchByEmail = async (email: string) => {
  const result = await searchDao.searchWithEmail(email);
  return result;
}
