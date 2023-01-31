import { NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import { getUserInfoByEmail } from '../models/userDao';
import { Request,Response } from 'express'
const Secret : jwt.Secret = process.env.JWT_SECRET as jwt.Secret

export interface CustomRequest extends Request {
    token: string | JwtPayload;
   }
   
   export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');
   
      if (!token) {
        throw new Error("NEED_ACCESS_TOKEN");
      }
   
      const decoded = jwt.verify(token, Secret);
      (req as CustomRequest).token = decoded;
   
      next();
    } catch (err) {
      res.status(401).send('Please authenticate');
    }
   };




// export const adminLoginRequired = async (req:Request, res:Response, next: NextFunction) => {
    
//     const accessToken = req.headers.authorization

//     if (!accessToken) {
        
//         return res.status(401).json({ status: 401, message: "NEED_ACCESS_TOKEN" })
//     }

//     const decoded = jwt.verify(accessToken, Secret)
//     const JwtPayload:JwtPayload= decoded

//     const adminUser: any = await getUserInfoByEmail(JwtPayload)
    
//     if (!adminUser === true) {
        
//         return res.status(404).json({ status: 404, message: "IS_NOT_ADMIN_USER" })
//     }
//     next(adminUser)
// }



