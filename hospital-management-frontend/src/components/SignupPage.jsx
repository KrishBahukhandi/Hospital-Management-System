import React, { useState } from "react";
import "../AuthStyles.css";
import { signupUser } from "../utils/api";

const SignupPage = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    userType: "public",
    hospitalName: "",
    staffID: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signupUser(formData);
    if (response.error) {
      alert(response.error);
    } else {
      alert(response.message || "Signup successful!");
      onSwitch(); // Switch to login page
    }
  };

  return (
    <div className="auth-container animate-slide-in">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />

          <label>Phone:</label>
          <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />

          <label>User Type:</label>
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="public">Public User</option>
            <option value="staff">Hospital Staff</option>
          </select>

          {formData.userType === "staff" && (
            <>
              <label>Hospital Name:</label>
              <input type="text" name="hospitalName" placeholder="Enter your hospital name" onChange={handleChange} />

              <label>Staff ID:</label>
              <input type="text" name="staffID" placeholder="Enter your staff ID" onChange={handleChange} />

              <label>Role:</label>
              <input type="text" name="role" placeholder="Enter your role" onChange={handleChange} />
            </>
          )}

          <button type="submit">Sign Up</button>
        </form>

        <p className="auth-text">
          Are you an old user?{" "}
          <span className="link" onClick={onSwitch}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
