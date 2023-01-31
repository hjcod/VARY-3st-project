import express, { Router } from "express";
const router: Router = express.Router();
const userRouter = require("./userRouter");
const searchRouter = require("./searchRouter");
const updateRouter = require("./updateRouter");

router.use("/users", userRouter);
router.use("/search", searchRouter);
router.use("/update", updateRouter);

export { router };
