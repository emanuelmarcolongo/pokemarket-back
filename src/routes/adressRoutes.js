import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { adressValidation } from "../middlewares/adressValidation.middleware.js";
import { putAdress, getAdress } from "../controllers/adressController.js";



const router = Router();

router.use(authValidation)

router.put("/adress", adressValidation ,putAdress);

router.get("/adress", getAdress);



export default router;
