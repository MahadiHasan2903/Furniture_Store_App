const Order = require("../models/Order");

// Controller to get all orders of a specific user by userId
const getUsersOrderController = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const userOrders = await Order.find({ userId })
      .populate({
        path: "productId",
        select: "-description -productLocation", // Select fields to include or exclude from populated document
      })
      .exec();

    if (!userOrders || userOrders.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found", orders: [] });
    }

    // Return success response with orders
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      userOrders,
    });
  } catch (error) {
    // Handle errors
    console.error("Error while getting user's orders:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user's orders",
      error: error.message,
    });
  }
};

// Controller to get all orders
const getAllOrdersController = async (req, res) => {
  try {
    const allOrders = await Order.find({})
      .populate({
        path: "productId",
      })
      .exec();

    if (!allOrders || allOrders.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found" });
    }

    // Return success response with all orders
    res.status(200).json({
      success: true,
      message: "All orders retrieved successfully",
      orders: allOrders,
    });
  } catch (error) {
    // Handle errors
    console.error("Error while getting all orders:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve all orders",
      error: error.message,
    });
  }
};

// Controller to get details of a single order by orderId
const getOrderDetailsController = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await Order.findById(orderId)
      .populate({
        path: "productId",
        select: "-description -productLocation", // Exclude description and productLocation fields from Product
      })
      .exec();

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    // Return success response with order details
    res.status(200).json({
      success: true,
      message: "Order details retrieved successfully",
      order,
    });
  } catch (error) {
    // Handle errors
    console.error(`Error while getting order ${orderId} details:`, error);
    res.status(500).json({
      success: false,
      message: `Failed to retrieve order ${orderId} details`,
      error: error.message,
    });
  }
};

module.exports = {
  getUsersOrderController,
  getOrderDetailsController,
  getAllOrdersController,
};
