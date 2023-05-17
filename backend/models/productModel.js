const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter a name"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: "SKU",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please enter a category"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Please enter a quantity"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Please enter a price"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.Model("Product", productSchema);
module.exports = Product;