import express from "express";
import { userSideBar } from "../controllers/user.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, userSideBar);

export default router;
