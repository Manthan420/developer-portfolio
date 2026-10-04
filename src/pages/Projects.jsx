
import { Link } from "react-router";

const projects = [
  {
    number: "01",
    title: "TrackMate",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A web application built with React, FastAPI, and PostgreSQL, combining frontend development with backend APIs and database integration.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    path: "/projects/trackmate",
  },
  {
    number: "02",
    title: "Blog App",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A blog website project built with HTML, CSS, and JavaScript to practice web layouts, styling, and interactive features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    path: "/projects/blog",
  },
  {
    number: "03",
    title: "Hearts Game",
    category: "C# PROGRAMMING",
    description:
      "A card game project developed in C#, showcasing programming fundamentals, game logic, and problem-solving.",
    technologies: ["C#"],
    path: "/projects/hearts",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <header className="projects-header">
        <p className="eyebrow">MY WORK</p>
        <h1>Things I've built.</h1>
        <p className="projects-intro">
          A selection of projects exploring web development,
          APIs, databases, and programming.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span className="tech-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <Link className="project-link" to={project.path}>
              View project <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
