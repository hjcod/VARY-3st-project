import express, { Router } from "express";
const router: Router = express.Router();

const userRouter = require("./userRouter");

router.use("/users", userRouter);

export { router };
