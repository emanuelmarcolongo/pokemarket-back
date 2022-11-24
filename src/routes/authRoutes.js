import { Router } from "express";
import { postSignIn } from "../controllers/authController.js";
import { singInBodyValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/login",singInBodyValidation, postSignIn);



export default router;