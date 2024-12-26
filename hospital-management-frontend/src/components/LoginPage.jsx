import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AuthStyles.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userType: "public",
    emailOrPhone: "",
    password: "",
    hospitalName: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before submission

    const loginData = {
      email: formData.emailOrPhone,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("authToken", result.token);
        navigate("/dashboard"); // Redirect to Dashboard after login
      } else {
        if (result.message === "User not found") {
          navigate("/signup"); // Redirect to Signup if user not found
        } else {
          setError(result.message || "Login failed.");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container animate-slide-in">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>User Type:</label>
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="public">Public User</option>
            <option value="staff">Hospital Staff</option>
          </select>

          {formData.userType === "public" && (
            <>
              <label>Email or Phone:</label>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Enter your email or phone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
              />
            </>
          )}

          {formData.userType === "staff" && (
            <>
              <label>Hospital Name:</label>
              <input
                type="text"
                name="hospitalName"
                placeholder="Enter your hospital name"
                value={formData.hospitalName}
                onChange={handleChange}
                required
              />

              <label>Email or Staff ID:</label>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Enter your email or staff ID"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error-text">{error}</p>}

        <p className="auth-text">
          Forgot your password? <span className="link">Click here</span>
        </p>
        <p className="auth-text">
          New user?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
