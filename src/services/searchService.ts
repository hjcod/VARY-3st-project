import * as searchDao from "../models/searchDao";

export const searchWithEmail = async (email: string) => {
  const result = await searchDao.searchWithEmail(email);
  return result;
}
