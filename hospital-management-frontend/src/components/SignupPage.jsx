import React, { useState } from 'react';
import '../AuthStyles.css';

const SignupPage = ({ onSwitch }) => {
  const [userType, setUserType] = useState('public');

  return (
    <div className="auth-container animate-slide-in">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone:</label>
          <input type="text" placeholder="Enter your phone number" />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />

          <label>User Type:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="public">Public User</option>
            <option value="staff">Hospital Staff</option>
          </select>

          {userType === 'staff' && (
            <>
              <label>Hospital Name:</label>
              <input type="text" placeholder="Enter your hospital name" />

              <label>Staff ID:</label>
              <input type="text" placeholder="Enter your staff ID" />

              <label>Role:</label>
              <input type="text" placeholder="Enter your role" />
            </>
          )}

          <button type="submit">Sign Up</button>
        </form>

        <p className="auth-text">
          Are you an old user?{' '}
          <span className="link" onClick={onSwitch}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
