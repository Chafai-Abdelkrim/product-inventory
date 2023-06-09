const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Plese enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: [6, "Password must be at least 6 characters"],
      /* maxLength: [25, "Password can't exceed 25 characters"], */
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://example.com/avatar.jpg",
    },
    phone: {
      type: String,
      default: "+212",
    },
    bio: {
      type: String,
      maxLength: [250, "Password can't exceed 250 characters"],
      default: "bio",
    },
  },
  {
    timestamps: true,
  }
);

//encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
