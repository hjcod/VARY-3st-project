import express, { Router } from "express";
import * as updateController from "../controllers/updateController";

const router: Router = express.Router();

router.patch('/UserDetail', updateController.userDetail);
router.patch('/EmailPlan', updateController.emailPlan)
router.patch('/WebPlan', updateController.webPlan)
router.patch('/paymentDetail', updateController.paymentDetail)

module.exports = router;