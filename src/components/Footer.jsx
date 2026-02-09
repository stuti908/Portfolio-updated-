import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>EKTA SAJWAN</h3>
          <p>
            I'm a  web developer skilled in React and frontend technologies , industrial exp in R&D Software developer trainee . 
           
          </p>
        </div>

        <div className="footer-section contact">
          <h4>Contact Info</h4>
          <p><FaEnvelope /> ektasajwan121@gmail.com</p>
          <p><FaPhoneAlt /> +91 9548277638</p>
          <p><FaMapMarkerAlt /> Dehradun, Uttarakhand, India</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/stuti908" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ color: '#333' }} />
            </a>
            <a href="https://www.linkedin.com/in/Ekta-Sajwan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: '#0077b5' }} />
            </a>
            <a href="mailto:ektasajwan121@gmail.com">
              <FaEnvelope style={{ color: '#d44638' }} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 EKTA SAJWAN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
