import express, { Router } from "express";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.post("/admin", userController.adminSignIn)
router.get("", userController.getUserInfo);
router.get("/UserDetail/:userId", userController.getUserDetail);
router.get("/Serviceinfo/:userId", userController.getServiceInfo);
router.get("/Paymentinfo/:userId", userController.getPaymentInfo);

module.exports = router;
