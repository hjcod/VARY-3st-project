import express, { Router } from "express";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.get("", userController.getUserInfo);
router.get("/UserDetail/:UserId", userController.getUserDetail);
router.get("/ServiceInfo/:userId", userController.getServiceInfo);
router.get("/PaymentInfo/:userId", userController.getPaymentInfo);

module.exports = router;