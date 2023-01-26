import { Request, Response } from "express";
import * as searchService from "../services/searchService";
import { catchAsync } from "../utils/error";

export const searchWithEmail = catchAsync(async (req: Request, res: Response) => {
  const email = req.query.email as string
  console.log(req.query)
  const data = await searchService.searchWithEmail(email);
  return res.status(200).json(data);
});