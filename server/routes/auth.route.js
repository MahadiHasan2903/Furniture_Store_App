const express = require("express");

const {
  registrationController,
  loginController,
  logoutController,
} = require("../controller/Auth");

const authRouter = express.Router();

authRouter.post("/register", registrationController);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);

module.exports = authRouter;
