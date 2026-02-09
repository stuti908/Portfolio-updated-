import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const words = [" Software", "Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + (prev ? " " : "") + words[index]);
        setIndex(index + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="hero">

      {/* Top Nav */}
      <div className="top-nav">

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* Social Icons */}
        <div className="nav-icons">
          <a href="https://github.com/stuti908" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:ektasajwan121@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/Ekta-Sajwan" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown-menu">
          <p onClick={() => navigate("/Projects")}>Projects</p>
          <p onClick={() => navigate("/Contact")}>Contact</p>
          <p onClick={() => navigate("\public\resume.pdf")}>Resume</p>
          <p onClick={() => navigate("/HireForm")}>web-Designs</p>
        </div>
      )}

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hey Viewer's, <br />
            I am a
            <span className="highlight">{text}</span>
          </h1>

          <p>
            <b>A passionate Developer creating modern digital experiences.</b>
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <button
        className="contact-btn"
        onClick={() => navigate("/Contact")}
      >
        Contact Me →
      </button>

    </section>
  );
};

export default Hero;
