import express from "express";
import {
  getAllProducts,
  getHealthStatus,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/health", getHealthStatus);
router.get("/", getAllProducts);

export default router;