const express = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware");

const {
  addToCartController,
  getCartController,
  deleteCartItemController,
  decrementCartItemController,
} = require("../controller/Cart");

const cartRouter = express.Router();

// POST endpoint to add an item to the cart
cartRouter.post("/add-to-cart", isAuthenticated, addToCartController);

// GET endpoint to retrieve user's cart
cartRouter.get("/get-cart/:userId", isAuthenticated, getCartController);

// DELETE endpoint to remove an item from the cart
cartRouter.delete(
  "/delete-cart-item/:cartItemId",
  isAuthenticated,
  deleteCartItemController
);

// Post endpoint to decrement quantity of an item in the cart
cartRouter.post(
  "/decrement-cart-item",
  isAuthenticated,
  decrementCartItemController
);

module.exports = cartRouter;
