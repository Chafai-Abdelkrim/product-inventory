const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");

router.post("/", protect, )

module.exports = router;