const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleWare/errorMiddleware");

const userRoute = require("./routes/userRoute");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes middleware
app.use("/api/users", userRoute);

//routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

//Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
//connect to DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
