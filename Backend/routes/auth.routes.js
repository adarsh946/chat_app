import express from "express";
import { logIn, signUp, logOut } from "../controllers/auth.controllters.js";
const router = express.Router();

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.post("/logOut", logOut);
export default router;
