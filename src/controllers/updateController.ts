import { Response } from "express";
import * as updateService from "../services/updateService";
import { catchAsync } from "../utils/error";

export type Request = { [key: string]: any };

export const userDetail = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await updateService.updateDetail(data);
  return res.status(200).json(result);
});

export const emailPlan = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await updateService.emailPlan(data);
  return res.status(200).json(result);
});

export const webPlan = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await updateService.webPlan(data);
  return res.status(200).json(result);
});

export const paymentDetail = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await updateService.paymentDetail(data);
  return res.status(200).json(result);
});