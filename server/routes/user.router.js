const express = require("express");
const {
  isAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const {
  updateUserController,
  deleteUserController,
  getSingleUserController,
  getAllUsersController,
} = require("../controller/User");

const userRouter = express.Router();

userRouter.put(
  "/update-user/:id",
  isAuthenticated,
  //   authorizeRoles("admin"),

  updateUserController
);
userRouter.delete(
  "/delete-user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteUserController
);
userRouter.get(
  "/get-user/:id",
  isAuthenticated,
  //   authorizeRoles("admin"),
  getSingleUserController
);
userRouter.get(
  "/get-users",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsersController
);

module.exports = userRouter;
