import React from 'react';
import './pages-style/CTA.css';



const CTA = () => {
  return (
    <div className="cta-container">
      <h1 className="cta-title"> FREE HOLIDAY CUSTOMIZATION</h1>
      <p className="cta-subtitle">Sign in or create a Da.Florerist account to engrave their gifts – on us.</p>
      <button className="cta-button">GET YOUR FLOWERS</button>
      <p className="cta-disclaimer">
        Offer valid until 01/01/26 11:59 PM CT. Exclusions apply. <a href="#" className="cta-link">See details.</a>
      </p>
    </div>
  );
};

export default CTA;