const express = require("express");

const {
  createProductController,
  updateProductController,
  deleteProductController,
  getSingleProductController,
  getAllProductsController,
  searchProductController,
} = require("../controller/Product");

const productRouter = express.Router();

productRouter.post("/create-product", createProductController);
productRouter.put("/update-product/:id", updateProductController);
productRouter.delete("/delete-product/:id", deleteProductController);
productRouter.get("/get-product/:id", getSingleProductController);
productRouter.get("/get-products", getAllProductsController);
productRouter.get("/search-product/:key", searchProductController);

module.exports = productRouter;
