const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

//  Import auth middleware
const authMiddleware = require("../middleware/auth");

//  PUBLIC ROUTES

//  GET all products
router.get("/", productController.getAllProducts);

//  GET product by ID
router.get("/id/:id", productController.getProductById);

//  GET product by SLUG
router.get("/slug/:slug", productController.getProductBySlug);


//  PROTECTED ROUTES (with middleware)

//  POST product
router.post("/", authMiddleware, productController.addProduct);

//  PUT update product
router.put("/:id", authMiddleware, productController.updateProduct);

//  DELETE product
router.delete("/:id", authMiddleware, productController.deleteProduct);


module.exports = router;