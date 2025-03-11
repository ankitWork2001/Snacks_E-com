import { Router } from "express";
import { register, login, logout, forgotPassword, userProfile, updateUser, addAddress } from "../controllers/userController.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/forgot-password", forgotPassword);

router.get("/profile", userProfile);

router.put("/update", updateUser);

router.post("/address", addAddress);

export default router;
