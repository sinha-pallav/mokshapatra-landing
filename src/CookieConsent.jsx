import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('mokshapatra-cookie-consent');
    if (!cookieChoice) {
      // Small delay to not show immediately on page load
      setTimeout(() => setShowBanner(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('mokshapatra-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('mokshapatra-cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
      <p>
        We use cookies to enhance your experience and analyze site traffic. 
        By continuing to use our site, you consent to our use of cookies. 
        <Link to="/privacy"> Learn more</Link>
      </p>
      <div className="cookie-buttons">
        <button className="cookie-accept" onClick={handleAccept}>
          Accept
        </button>
        <button className="cookie-decline" onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
