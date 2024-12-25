const express = require("express");
const { registerUser, loginUser } = require("../controllers/authControllers");
const User = require("../models/User"); // Import the User model

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

// Test database connection
router.get("/test-db", async (req, res) => {
    try {
        const users = await User.find().limit(1); // Fetch a sample of users
        res.status(200).json({ success: true, message: "Database connected", data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: "Database connection failed", error: err.message });
    }
});

module.exports = router;
