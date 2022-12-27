import express, { Router } from "express";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.get("", userController.getUserInfo);
router.get("/:userId", userController.getUserDetail);

module.exports = router;
