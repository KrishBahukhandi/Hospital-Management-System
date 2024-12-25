// utils/loginUser.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your User model

const loginUser = async ({ userType, emailOrPhone, password, hospitalName, staffIDOrEmail }) => {
  let user;

  if (userType === "public") {
    user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });
  } else if (userType === "staff") {
    user = await User.findOne({
      $and: [
        { hospital: hospitalName },
        { $or: [{ email: staffIDOrEmail }, { staffID: staffIDOrEmail }] },
      ],
    });
  }

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token, user };
};

module.exports = loginUser;
