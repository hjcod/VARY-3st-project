const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("", userController.getUserInfo);
router.get("/:userId", userController.getUserDetail);

module.exports = router;
