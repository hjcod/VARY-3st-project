import { Request, Response } from "express";
import * as userService from "../services/userService";
import { catchAsync, raiseCustomError } from "../utils/error";

export const getUserInfo = catchAsync(async (req: Request, res: Response) => {
  const page = req.query.page
  const data = await userService.getUserInfo(page);
  return res.status(200).json(data);
});

export const getUserDetail = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.UserId;
  
  if (!userId) {
    raiseCustomError("NEED_USERINFO", 401);
  }
  const userDetail = await userService.getUserDetail(userId);
  return res.status(200).json(userDetail);
});

export const getServiceInfo = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  if (!userId) {
    raiseCustomError("NEED_USERINFO", 401);
  }
  const userDetail = await userService.getServiceInfo(userId);
  return res.status(200).json(userDetail);
});

export const getPaymentInfo = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  if (!userId) {
    raiseCustomError("NEED_USERINFO", 401);
  }
  const userDetail = await userService. getPaymentInfo(userId);
  return res.status(200).json(userDetail);
});
export const adminSignIn = catchAsync(async (req: Request, res: Response)=> {
  const {email, password} = req.body
  
  const accessToken = await userService.adminSignIn(email,password)

  return res.status(200).json({ accessToken: accessToken })
})

