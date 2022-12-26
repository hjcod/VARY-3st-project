const userService = require("../services/userService");
const { catchAsync, raiseCustomError } = require("../utils/error.js");

const getUserInfo = catchAsync(async (req, res) => {
  const data = await userService.getUserInfo();
  return res.status(200).json(data);
});

const getUserDetail = catchAsync(async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    raiseCustomError("NEED_USERINFO", 401);
  }

  const userDetail = await userService.getUserDetail(userId);
  return res.status(200).json(userDetail);
});

module.exports = {
  getUserInfo,
  getUserDetail,
};
