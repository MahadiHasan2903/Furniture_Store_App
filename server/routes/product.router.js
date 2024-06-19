const express = require("express");

const {
  isAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const {
  createProductController,
  updateProductController,
  deleteProductController,
  getSingleProductController,
  getAllProductsController,
  searchProductController,
} = require("../controller/Product");

const productRouter = express.Router();

productRouter.post(
  "/create-product",
  isAuthenticated,
  authorizeRoles("admin"),
  createProductController
);
productRouter.put(
  "/update-product/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateProductController
);
productRouter.delete(
  "/delete-product/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteProductController
);
productRouter.get("/get-product/:id", getSingleProductController);
productRouter.get("/get-products", getAllProductsController);
productRouter.get("/search-product/:key", searchProductController);

module.exports = productRouter;
