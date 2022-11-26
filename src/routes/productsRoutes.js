import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { getProductsValidation } from "../middlewares/productValidation.middleware.js";

const router = Router();

router.get("/products", getProductsValidation, getProducts);

export default router;

