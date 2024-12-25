import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import './AuthStyles.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthPage = () => {
    setIsLogin(!isLogin);
  };
  
  return (
  
    <div className="app-container">
      {isLogin ? (
        <div className="auth-page">
          <LoginPage onSwitch={toggleAuthPage} />
        </div>
      ) : (
        <div className="auth-page">
          <SignupPage onSwitch={toggleAuthPage} />
        </div>
      )}
    </div>
    
  );
};

export default App;