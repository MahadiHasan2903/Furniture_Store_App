const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter your product title"],
      trim: true,
    },
    supplier: {
      type: String,
      required: [true, "Please enter your product supplier name"],
      trim: true,
    },
    productLocation: {
      type: String,
      required: [true, "Please enter your product location"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please enter your product price"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Please enter your product image"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter your product description"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
