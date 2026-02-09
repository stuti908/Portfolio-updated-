import React from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="animated-intro">
        
        <h1 className="intro-line">
          <span className="line-left" />
          Hi, I'm <span className="highlight"><b>Ekta Sajwan</b></span>
          <span className="line-right" />
        </h1>

        <p className="subtitle">
          Designing the Digital Future with Passion and Precision 🚀
        </p>
        <h3 className="tagline">Welcome to my space</h3>
      </div>
    </div>
  );
};

export default SplashScreen;
