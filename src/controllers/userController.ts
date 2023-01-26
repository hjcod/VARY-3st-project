import { Request, Response } from "express";
import * as userService from "../services/userService";
import { catchAsync, raiseCustomError } from "../utils/error";

export const getUserInfo = catchAsync(async (req: Request, res: Response) => {
  const page = req.query.page
  const data = await userService.getUserInfo(page);
  return res.status(200).json(data);
});

export const getUserDetail = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  if (!userId) {
    raiseCustomError("NEED_USERINFO", 401);
  }

  const userDetail = await userService.getUserDetail(userId);
  return res.status(200).json(userDetail);
});

export const adminSignIn = catchAsync(async (req: Request, res: Response)=> {
  const {email, password} = req.body
  //console.log(email)
  //console.log(password)
  const accessToken = await userService.adminSignIn(email,password)

  return res.status(200).json({ accessToken: accessToken })
})

//1.로그인할때 바디에 담겨오는 값을 통해서 is_admin 컬럼의 값이 true인지 확인하는 쿼리문이 필요
//2.true 확인 되면 jwt 토근이 발행됨
//3.jwt토큰의 payload에 해당 true값을 담아서 미들웨어로 내보내 준다.
//4.이후에 인가과정에서 is_admin = false일 경우에는 오류, true일때는 데이터에 접근하여 조회 할수 있게 한다. 