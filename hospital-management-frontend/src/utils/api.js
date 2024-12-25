const BASE_URL = "http://localhost:5000/api/auth"; // Update if your backend runs on a different URL or port

// Function to handle signup
export const signupUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (err) {
    console.error("Signup Error:", err);
    return { error: "An error occurred during signup." };
  }
};

// Function to handle login
// const loginUser = require('./LoginUser');

// const loginController = async (req, res) => {
//   try {
//     const { token, user } = await loginUser(req.body);
//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// module.exports = loginController;

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User'); // Adjust the path to your User model

// const loginController = async (req, res) => {
//   const { userType, emailOrPhone, password, hospitalName, staffIDOrEmail } = req.body;

//   try {
//     let user;
//     if (userType === "public") {
//       user = await User.findOne({
//         $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
//       });
//     } else if (userType === "staff") {
//       user = await User.findOne({
//         $and: [
//           { hospital: hospitalName },
//           { $or: [{ email: staffIDOrEmail }, { staffID: staffIDOrEmail }] },
//         ],
//       });
//     }

//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { loginController };
