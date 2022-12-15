const userService = require("../services/userService");
const { catchAsync } = require("../utils/error.js");

const getUserInfo = catchAsync(async (req, res) => {
  const data = await userService.getUserInfo();
  return res.status(200).json(data);
});

module.exports = {
  getUserInfo,
};
