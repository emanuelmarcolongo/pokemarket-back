import { Router } from "express";
import { postSale } from "../controllers/saleController.js";
import { postSaleValidation } from "../middlewares/saleValidation.middleware.js";

const router = Router();

router.post("/sale", postSaleValidation, postSale);

export default router;