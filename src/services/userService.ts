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

export const adminSignIn = async (email:string, password:string) =>{
  const user = await userDao.getUserInfoByEmail(email)
  
  const admin:boolean = user[0].is_admin
  const Email:string = user[0].email
  
  const match = await bcrypt.compareSync(password, user.password);   
  
    if(!match){
          throw new Error('WRONG PASSWORD')
      }
                                                                                                                                                                                                                                                    
  const jsonwebtoken = jwt.sign({ admin, Email },Secret,
    {
      algorithm,
      expiresIn: process.env.JWT_EXPIRES_IN
    })
  return jsonwebtoken
}

