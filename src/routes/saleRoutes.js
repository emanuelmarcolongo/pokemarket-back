import { Router } from "express";
import { postSale, getSale } from "../controllers/saleController.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { postSaleValidation } from "../middlewares/saleValidation.middleware.js";

const router = Router();

router.post("/sale", postSaleValidation, postSale);

router.get("/sale", authValidation, getSale)

export default router;