import React, { useState } from "react";
import "../AuthStyles.css";

const LoginPage = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    userType: "public",
    emailOrPhone: "",
    password: "",
    hospitalName: "",
    staffID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginData;
    if (formData.userType === "public") {
      loginData = {
        userType: formData.userType,
        emailOrPhone: formData.emailOrPhone,
        password: formData.password,
      };
    } else if (formData.userType === "staff") {
      loginData = {
        userType: formData.userType,
        hospitalName: formData.hospitalName,
        staffIDOrEmail: formData.emailOrPhone,
        password: formData.password,
      };
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login successful!");
        console.log("User:", result.user);
        localStorage.setItem("authToken", result.token);
      } else {
        alert(result.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container animate-slide-in">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>User Type:</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
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
              />

              <label>Email or Staff ID:</label>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Enter your email or staff ID"
                value={formData.emailOrPhone}
                onChange={handleChange}
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
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-text">
          Forgot your password? <span className="link">Click here</span>
        </p>
        <p className="auth-text">
          New user?{" "}
          <span className="link" onClick={onSwitch}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
