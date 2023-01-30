import { reqBody } from "../controllers/updateController";
import * as updateDao from "../models/updateDao";

export const updateDetail = async (_data: reqBody) => {
  return await updateDao.userDetail(_data);
}

export const planDetail = async (_data: reqBody) => {
  return await updateDao.userDetail(_data);
}


