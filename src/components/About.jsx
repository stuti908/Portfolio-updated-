import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">
          <h2>About Me</h2>

          <p className="about-intro">
            Hi, I'm Ekta Sajwan — a Software Developer passionate about
            building smart and scalable solutions.
          </p>

          <p>
            I specialize in UART-based serial communication (RS485/RS232),
            TCP/UDP protocols and C programming. Alongside low-level systems,
            I also build responsive web applications using React.js, Node.js
            and MongoDB.
          </p>

          <p>
            I enjoy combining embedded systems with modern web technologies
            to create efficient, real-world applications.
          </p>
        </div>

        {/* Right Side Card */}
        <div className="about-card">
          <h3>Core Skills</h3>

          <div className="skill-tags">
            <span>C Programming</span>
            <span>UART / RS485</span>
            <span>TCP / UDP</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>UI/UX Design</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;
