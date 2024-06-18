const Product = require("../models/Product");
const Cart = require("../models/Cart");

// Controller to add an item to the cart
const addToCartController = async (req, res) => {
  const { userId, cartItem, quantity } = req.body;

  try {
    // Find the cart for the given userId
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Check if the product already exists in the cart
      const existingProduct = cart.products.find(
        (product) => product.cartItem.toString() === cartItem
      );

      if (existingProduct) {
        // If the product exists, update its quantity
        existingProduct.quantity += quantity;
      } else {
        // If the product does not exist, add it to the cart
        cart.products.push({ cartItem, quantity });
      }

      // Save the updated cart
      await cart.save();
      res
        .status(200)
        .json({ success: true, message: "Product added to cart", cart });
    } else {
      // If no cart exists for the user (that means new user), create a new cart
      const newCart = new Cart({
        userId,
        products: [{ cartItem, quantity }],
      });

      // Save the new cart
      await newCart.save();
      res.status(200).json({
        success: true,
        message: "Product added to cart",
        cart: newCart,
      });
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add product to cart" });
  }
};

// Controller to get user's cart
const getCartController = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the cart for the given userId and populate product details
    const cart = await Cart.findOne({ userId }).populate(
      "products.cartItem",
      "_id title supplier price image"
    );

    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Cart retrieved successfully", cart });
  } catch (error) {
    console.error("Error getting cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve cart" });
  }
};

// Controller to delete an item from the cart
const deleteCartItemController = async (req, res) => {
  const { cartItemId } = req.params;

  try {
    // Find and update the cart by removing the specified product
    const updatedCart = await Cart.findOneAndUpdate(
      { "products._id": cartItemId },
      { $pull: { products: { _id: cartItemId } } },
      { new: true }
    );

    if (!updatedCart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product removed from cart successfully",
      updatedCart,
    });
  } catch (error) {
    console.error("Error deleting item from cart:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete product from cart" });
  }
};

// Controller to decrement quantity of an item in the cart
const decrementCartItemController = async (req, res) => {
  const { userId, cartItem } = req.body;

  try {
    // Find the cart for the given userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    // Find the product in the cart
    const existingProduct = cart.products.find(
      (product) => product.cartItem.toString() === cartItem
    );

    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Decrease the quantity of the product
    if (existingProduct.quantity === 1) {
      // If quantity is 1, remove the product from the cart
      cart.products = cart.products.filter(
        (product) => product.cartItem.toString() !== cartItem
      );
    } else {
      // Otherwise, decrement the quantity
      existingProduct.quantity -= 1;
    }

    // Save the updated cart
    await cart.save();

    res
      .status(200)
      .json({ success: true, message: "Product quantity decremented in cart" });
  } catch (error) {
    console.error("Error decrementing item in cart:", error);
    res.status(500).json({
      success: false,
      message: "Failed to decrement product quantity in cart",
    });
  }
};

module.exports = {
  addToCartController,
  getCartController,
  deleteCartItemController,
  decrementCartItemController,
};
