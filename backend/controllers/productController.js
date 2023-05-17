const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//Create a new Product
const createProduct = asyncHandler(async (req, res) => {
  res.send("product created");
});

module.exports = {
  createProduct,
};
