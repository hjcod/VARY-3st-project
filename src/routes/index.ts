import express, { Router } from "express";
const router: Router = express.Router();

const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

router.use("/auth", authRouter);
router.use("/users", userRouter);

export { router };
