import React, { useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using React with smooth UI and reusable components.",
    link: "https://github.com/stuti908/portfolio.12",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-featured shopping platform with cart and payment integration.",
    link: "https://github.com/your-username/ecommerce-app",
  },
  {
    title: "College Navigation System",
    description:
      "Campus navigation system for students to locate classes and labs.",
    link: "https://github.com/your-username/college-navigation-system",
  },
  {
    title: "Hardware Communication",
    description:
      "UART / RS485 communication between embedded systems modules.",
    link: "https://github.com/your-username/hardware-communication",
  },
  {
    title: "Offline Chess Game",
    description:
      "Console-based chess game with move validation and two-player mode.",
    link: "https://github.com/stuti908/",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="carousel-wrapper">
        <div className="carousel" ref={scrollRef}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>View Project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
