import express, { Router } from "express";
import * as searchController from "../controllers/searchController";

const router: Router = express.Router();

router.get('', searchController.searchWithEmail);

module.exports = router;
