import { RandomUUIDOptions } from "crypto";
import { Request, Response } from "express";
import * as updateService from "../services/updateService";
import { catchAsync } from "../utils/error";

export interface reqBody extends Request {
  company_name: string;
  company_size: string;
  company_industry: string;
  company_position: string;
  userId: string;
}

export const userDetail = catchAsync(async (req: reqBody, res: Response) => {
  const data = req.body;
  const result = await updateService.updateDetail(data);
  return res.status(200).json(result);
});


