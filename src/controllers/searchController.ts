import { Request, Response } from "express";
import * as searchService from "../services/userService";
import { catchAsync, raiseCustomError } from "../utils/error";

export const searchWithEmail = catchAsync(async (req: Request, res: Response) => {
  const email = req.query.email
  console.log(req.query.email)
  const data = searchService.searchWithEmail();
  return res.status(200).json(data);
});