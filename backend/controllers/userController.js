const registerUser = async (req, res) => {
  if (!req.body.email) {
    res.status(400);
    throw new Error("Plaese add an email");
  }
  res.send("Register User");
};

module.exports = {
  registerUser,
};
