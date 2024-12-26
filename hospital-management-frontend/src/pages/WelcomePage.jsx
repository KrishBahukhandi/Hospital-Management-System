// WelcomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/WelcomePage/WelcomePage.css';

function WelcomePage() {
    const navigate = useNavigate();
  const [quote, setQuote] = useState(
    'It is health that is real wealth and not pieces of gold and silver.'
  );
  const [lastVisit, setLastVisit] = useState('');

  // Handle Quote Change
  const changeQuote = () => {
    const quotes = [
      'Health is the greatest gift.',
      'A healthy mind resides in a healthy body.',
      'Take care of your body, it’s the only place you have to live.',
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  // Handle Last Visit
  useEffect(() => {
    const lastVisitDate = localStorage.getItem('lastVisit');
    if (lastVisitDate) {
      setLastVisit(`Your last visit was on ${lastVisitDate}`);
    }
    const currentDate = new Date().toLocaleString();
    localStorage.setItem('lastVisit', currentDate);
  }, []);

  // Clear Storage
  const clearStorage = () => {
    localStorage.removeItem('lastVisit');
    setLastVisit('');
  };

  return (
    <div>
      {/* Showcase Section */}
      <header id="showcase">
        <h1>Welcome To Our Website</h1>
        <p id="quote">"{quote}"</p>
        <button onClick={() => navigate('/login')} className="button">Log In</button>
        <button onClick={changeQuote} className="button">Change Quote</button>
      </header>

      {/* Dynamic Section */}
      <section id="dynamic-section">
        <h2>Your Recent Visit</h2>
        <p>{lastVisit}</p>
        <button onClick={clearStorage} className="button">Clear Storage</button>
      </section>
    </div>
  );
}

export default WelcomePage;
