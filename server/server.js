const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const path = require("path");
const cloudinary = require("cloudinary");
const productRouter = require("./routes/product.router");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.router");
const cartRouter = require("./routes/cart.route");
const orderRouter = require("./routes/order.router");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "./uploads")));

app.get("/", (req, res) => {
  res.send("Hello world from backend server!");
});

app.use(
  "/api/v1",
  productRouter,
  authRouter,
  userRouter,
  cartRouter,
  orderRouter
);

// Server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan
      .white
  );
});
