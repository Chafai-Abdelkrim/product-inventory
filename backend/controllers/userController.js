const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body;
    //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill in all required fields");
  }
  if (password < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }

  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }
});

module.exports = {
  registerUser,
};
