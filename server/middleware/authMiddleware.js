const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  // Get token from headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Check if token is not present
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (req.user && roles.includes(req.user.role)) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Unauthorized to access this resource" });
    }
  };
};
module.exports = { isAuthenticated, authorizeRoles };
