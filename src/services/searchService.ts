import * as searchDao from "../models/searchDao";

export const searchWithEmail = async (email: string | import("qs").ParsedQs | string[] | import("qs").ParsedQs[] | undefined) => {
  const result = await searchDao.searchWithEmail(email);
  return result;
}


