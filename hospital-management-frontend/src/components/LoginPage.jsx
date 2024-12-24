import React, { useState } from 'react';
import '../AuthStyles.css';

const LoginPage = ({ onSwitch }) => {
  const [userType, setUserType] = useState('public');

  return (
    <div className="auth-container animate-slide-in">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <label>User Type:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="public">Public User</option>
            <option value="staff">Hospital Staff</option>
          </select>

          <label>Email/ID/Phone:</label>
          <input type="text" placeholder="Enter your email, ID, or phone" />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>

        <p className="auth-text">
          Did you forget your password? <span className="link">Click here</span>
        </p>
        <p className="auth-text">
          Are you a new user?{' '}
          <span className="link" onClick={onSwitch}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;