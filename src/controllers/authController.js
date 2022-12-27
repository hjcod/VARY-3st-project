const authService = require("../services/authService");
<<<<<<< HEAD
const { catchAsync, raiseCustomError } = require("../utils/error.js");
=======
const { catchAsync, raiseCustomError } = require("../utils/error.ts");
>>>>>>> 7860233 (Modify: convert js to ts)

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    raiseCustomError("KEY_ERROR", 400);
  }

  const result = await authService.signIn(email, password);
  return res.status(200).json(result);
});

module.exports = {
  signIn,
};
