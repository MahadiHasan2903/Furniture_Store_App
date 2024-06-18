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
productRouter.get(
  "/get-product/:id",
  isAuthenticated,
  getSingleProductController
);
productRouter.get("/get-products", isAuthenticated, getAllProductsController);
productRouter.get(
  "/search-product/:key",
  isAuthenticated,
  searchProductController
);

module.exports = productRouter;
