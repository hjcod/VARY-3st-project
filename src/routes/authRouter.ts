import express, { Router } from "express";
const authController = require("../controllers/authController");

const router: Router = express.Router();

router.post("/signin", authController.signIn);

module.exports = router;
