const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

const userAuthorization = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decoded)
      req.user = await User.findById(decoded._id).select("-password");
    } catch (error) {
      console.error(error);
      res.status(401).send(error)
    }
  }

  if (!token) {
    res.status(401).json({error: "No Token"})
  }

  next();
});

module.exports = userAuthorization;