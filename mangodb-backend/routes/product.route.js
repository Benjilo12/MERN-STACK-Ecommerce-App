import express from "express";
import {
  getFeaturedProducts,
  getAllProducts,
} from "../controllers/product.controller.js";
import { adminRoute, verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/", verifyToken, adminRoute, createProducts);

export default router;
