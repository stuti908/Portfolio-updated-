import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            Software Developer with expertise in C, Python, and frontend
            development, backed by R&D industry experience delivering smart and
            scalable solutions.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:ektasajwan121@gmail.com">
              ektasajwan121@gmail.com
            </a>
          </p>
          <p>
            <FaPhoneAlt />{" "}
            <a href="tel:+919548277638">
              +91 9548277638
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> Dehradun, Uttarakhand, India
          </p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/stuti908"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/Ekta-Sajwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:ektasajwan121@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ekta Sajwan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
