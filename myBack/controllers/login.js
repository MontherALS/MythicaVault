const User = require("../models/User");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const loginData = await User.findOne({ email: email, password: password });
    if (loginData) {
      res.status(200).json({
        user: loginData,
      });
      console.log("looged inn");
      console.log(loggedIn);
    } else {
      console.log("ther is no account in this data");
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
  }
};
