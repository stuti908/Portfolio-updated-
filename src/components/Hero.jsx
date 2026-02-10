import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const words = useMemo(() => ["Software", "Developer"], []);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + (prev ? " " : "") + words[index]);
        setIndex((prev) => prev + 1);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  const scrollToProjects = () => {
    window.scrollTo({ top: 900, behavior: 'smooth' });
  };
   const scrollToContact = () => {
    window.scrollTo({ top: 1200, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Top Nav */}
      <div className="top-nav">
        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FaBars />
        </div>

        <div className="nav-icons">
          <a href="https://github.com/stuti908" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:ektasajwan121@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/Ekta-Sajwan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown-menu">
          <p onClick={scrollToProjects}>Projects</p>

          <p onClick={scrollToContact}>Contact</p>

          <p
            onClick={() => {
              window.open("/EktaSajwanResume.pdf", "_blank");
              setMenuOpen(false);
            }}
          >
            Resume
          </p>

          <p
            onClick={() => {
              window.open(
                "https://www.figma.com/design/W7L73DZ35bQVnbNHfArUS0/Untitled",
                "_blank"
              );
              setMenuOpen(false);
            }}
          >
            Web Designs
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hey Viewers, <br />
            I am a <span className="highlight">{text}</span>
          </h1>

          <p>
            <b>A passionate Developer creating modern digital experiences.</b>
          </p>
        </div>
      </div>

      <button
        className="contact-btn"
        onClick={scrollToContact}
      >
        Contact Me →
      </button>
    </section>
  );
};

export default Hero;
