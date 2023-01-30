import { Request } from "../controllers/updateController";
import * as updateDao from "../models/updateDao";

export const updateDetail = async (_data: Request) => {
  return await updateDao.userDetail(_data);
}

export const emailPlan = async (_data: Request) => {
  return await updateDao.emailPlan(_data);
}

export const paymentDetail = async (_data: Request) => {
  return await updateDao.paymentDetail(_data);
}