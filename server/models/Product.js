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
    price: {
      type: Number,
      required: [true, "Please enter your product price"],
      trim: true,
    },
    image: {
      public_id: {
        type: String,
        required: [false, "Please provide the public ID of the image"],
      },
      url: {
        type: String,
        required: [false, "Please provide the URL of the image"],
      },
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