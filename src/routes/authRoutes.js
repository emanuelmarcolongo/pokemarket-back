import { Router } from "express";
import { postSignIn, postSignUp } from "../controllers/authController.js";
import { singInBodyValidation, signUpBodyValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/login",singInBodyValidation, postSignIn);

router.post("/sign-up",signUpBodyValidation, postSignUp)



export default router;