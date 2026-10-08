const projects = [
  {
    number: "01",
    title: "TrackMate",
    description:
      "A full-stack web application built with React, FastAPI, Python, and PostgreSQL, combining frontend development with backend APIs and database integration.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    image: "/projects/trackmate.png",
    liveUrl: null,
    githubUrl: "YOUR_TRACKMATE_GITHUB_URL",
  },
  {
    number: "02",
    title: "Blog App",
    description:
      "A blog website built with HTML, CSS, and JavaScript to practice page layouts, styling, and interactive web features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/blog.png",
    liveUrl: null,
    githubUrl: "YOUR_BLOG_GITHUB_URL",
  },
  {
    number: "03",
    title: "Hearts Game",
    description:
      "A card game project developed in C#, showcasing programming fundamentals, game logic, and problem-solving.",
    technologies: ["C#"],
    image: "/projects/hearts.png",
    liveUrl: null,
    githubUrl: "YOUR_HEARTS_GITHUB_URL",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <header className="projects-header">
        <p className="eyebrow">MY WORK</p>

        <h1>Projects I've built.</h1>

        <p className="projects-intro">
          A selection of projects I've worked on while learning
          software development, web technologies, and programming.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
              />
            </div>

            <div className="project-card-body">
              <div className="project-card-heading">
                <span className="project-number">
                  {project.number}
                </span>

                <h2>{project.title}</h2>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action"
                  >
                    Live Preview
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action"
                  >
                    View Code
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;