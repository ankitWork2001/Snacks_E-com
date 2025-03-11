import express from "express";
import {
    latestProducts,
    toggleLatestProduct,
    getAllProducts,
    getProductsByCategory,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/api/products/latest", latestProducts);
router.post("/api/products", addProduct);
router.get("/api/products", getAllProducts);
router.get("/api/products/category/:id", getProductsByCategory);
router.get("/api/products/:id", getProductById);
router.put("/api/products/:id", updateProduct);
router.delete("/api/products/:id", deleteProduct);
router.patch("/api/products/toggle/:id", toggleLatestProduct);

export default router;
