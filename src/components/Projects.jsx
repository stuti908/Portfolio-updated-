import React, { useRef, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Site',
    description: 'Personal portfolio using React, npm react-script, and react icons to make more effective.',
    link: 'https://github.com/stuti908/portfolio.12'
  },
  {
    title: 'E-Commerce App',
    description: 'Full-featured online store with cart and payments.',
    link: 'https://github.com/your-username/ecommerce-app'
  },
  {
    title: 'CNS (College Navigation System)',
    description: 'Used to navigate college campus, library, classes, and more.',
    link: 'https://github.com/your-username/college-navigation-system'
  },
  {
    title: 'Hardware Communication',
    description: 'Byte-by-byte communication using RS485-232/UART protocol in provided module.',
    link: 'https://github.com/your-username/hardware-communication'
  },
  {
    title: 'Chess_Game',
    description: 'offline chess game in on system',
    link: 'https://github.com/stuti908/'
  }
];

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const middle = Math.floor(container.scrollWidth / 2 - container.clientWidth / 2);
      container.scrollLeft = middle;
    }
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="carousel-container" ref={scrollRef}>
        {projects.map((proj, i) => (
          <a
            className="carousel-card"
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3><em>{proj.title} :</em></h3>
            <p>{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;


// import React, { useRef, useEffect } from 'react';
// import './Projects.css';

// const projects = [
//   { title: 'Portfolio Site', description: 'Personal portfolio using React, npm react-script, and react icons to make more effective.' },
//   { title: 'E-Commerce App', description: 'Full-featured online store with cart and payments.' },
//   { title: 'CNS (College Navigation System)', description: 'Used to navigate college campus, library, classes, and more.' },
//   { title: 'Hardware Communication', description: 'Byte-by-byte communication using RS485-232/UART protocol in provided module.' },
//   { title: 'Offline Chess Game ', description: 'offline chaess in simmilar system' }
// ];

// const Projects = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       const middle = Math.floor(container.scrollWidth / 2 - container.clientWidth / 2);
//       container.scrollLeft = middle;
//     }
//   }, []);

//   return (
//     <section className="projects">
//       <h2>Projects</h2>
//       <div className="carousel-container" ref={scrollRef}>
//         {projects.map((proj, i) => (
//           <div className="carousel-card" key={i}>
//             <h3><em>{proj.title} :</em></h3>
//             <p>{proj.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
