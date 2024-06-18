const express = require("express");

const {
  isAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const {
  getUsersOrderController,
  getOrderDetailsController,
  getAllOrdersController,
} = require("../controller/Order");

const orderRouter = express.Router();

orderRouter.get(
  "/get-order/:orderId",
  isAuthenticated,
  getOrderDetailsController
);

orderRouter.get(
  "/get-user-order/:userId",
  isAuthenticated,
  getUsersOrderController
);
orderRouter.get(
  "/get-orders",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrdersController
);

module.exports = orderRouter;
