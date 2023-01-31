const userDao = require("../models/userDao");
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
const Secret : jwt.Secret = process.env.JWT_SECRET as jwt.Secret
const algorithm: jwt.Algorithm =process.env.ALGORITHM as jwt.Algorithm


export const getUserInfo = async <pagination>(page:number|pagination) => {
  const result = await userDao.getUserInfo(page);
  return result;
};

export const getUserDetail = async (userId: string) => {
  const result = await userDao.getUserDetail(userId);
  return result;
};

export const getServiceInfo = async (userId: string) => {
  const result = await userDao.getServiceInfo(userId);
  return result;
};

export const getPaymentInfo = async (userId: string) => {
  const result = await userDao.getPaymentInfo(userId);
  return result;
};

