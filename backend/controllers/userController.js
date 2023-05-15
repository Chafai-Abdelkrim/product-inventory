const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

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

  //Create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  //generate token and send HTTP-only cookie
  const token = generateToken(user._id);
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Plese add email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User not found, please singup");
  }

  //check if password correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //generate token and send HTTP-only cookie
  const token = generateToken(user._id);
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user && passwordIsCorrect) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Successfully Logged Out" });
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json(false);

  //Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) return res.json(true);

  return res.json(false);
});

const updateUser = asyncHandler(async (req, res) => {
  res.send("user updated")
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser
};
