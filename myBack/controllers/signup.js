const User = require("../models/User");

exports.signup = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    try {
      const user = new User({
        username: username,
        email: email,
        password: password,
        admin: false,
      });
      await user.save();
      console.log(`User Created! ${username}`);
      res.status(201).json({ message: "User Created!", path: "/" });
    } catch (err) {
      res.status(500).json({ message: `something went wrong ${err}` });
    }
  } else {
    res.status(400).json({ message: "Passwords do not match !" });
  }
};
