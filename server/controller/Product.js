const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;

// Create a new product
const createProductController = async (req, res) => {
  try {
    // const myCloud = await cloudinary.uploader.upload(req.body.image, {
    //   folder: "furniture_images",
    // });

    // req.body.image = {
    //   public_id: myCloud.public_id,
    //   url: myCloud.url,
    // };

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error while creating product",
      error: err.message,
    });
  }
};

// Update a product by ID
const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (req.body.image) {
      await cloudinary.uploader.destroy(product.image.public_id);

      const myCloud = await cloudinary.uploader.upload(req.body.image, {
        folder: "furniture_images",
      });

      req.body.image = {
        public_id: myCloud.public_id,
        url: myCloud.url,
      };
    }

    product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while updating product",
      error: error.message,
    });
  }
};

// Delete a product by ID
const deleteProductController = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await cloudinary.uploader.destroy(product.image.public_id);
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while deleting product",
      error: error.message,
    });
  }
};

// Get a single product by ID
const getSingleProductController = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error while fetching product",
      error: err.message,
    });
  }
};

// Get all products
const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error while fetching products",
      error: err.message,
    });
  }
};

const searchProductController = async (req, res) => {
  try {
    const searchResult = await Product.aggregate([
      {
        $search: {
          index: "default",
          text: {
            query: req.params.key,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Products found",
      searchResult,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error while searching products",
      error: err.message,
    });
  }
};

module.exports = {
  createProductController,
  updateProductController,
  deleteProductController,
  getSingleProductController,
  getAllProductsController,
  searchProductController,
};
