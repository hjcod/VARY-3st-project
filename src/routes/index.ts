import express, { Router } from "express";
const router: Router = express.Router();
const userRouter = require("./userRouter");
const searchRouter = require("./searchRouter");

router.use("/users", userRouter);
router.use("/search", searchRouter);

export { router };
