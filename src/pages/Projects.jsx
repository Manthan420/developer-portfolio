
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "TrackMate",
    description:
      "An independently developed, full-stack AI-powered study platform. It generates chapter-based tests, tracks student performance, identifies weak topics, and provides AI coaching and personalized study schedules.",
    technologies: [
      "React 18",
      "JavaScript",
      "Vite",
      "React Router",
      "Axios",
      "Python",
      "FastAPI",
      "Uvicorn",
      "SQLAlchemy",
      "PostgreSQL",
      "Pydantic",
      "OpenAI API",
      "JWT Authentication",
      "bcrypt",
      "APScheduler",
      "HTTPX",
      "REST APIs",
    ],
    screenshots: [
      "/projects/Trackmate.png",
      "/projects/Smart-schedule.png",
      "/projects/AiCoach.png",
      "/projects/TestHistory.png",
      "/projects/GenerateChapterTest.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Manthan420/TrackMate",
  },

  {
    number: "02",
    title: "Blogify",
    description:
      "A full-stack blogging platform where users can create accounts, publish posts with cover images, search for content, and interact through comments. Includes local and Google authentication with PostgreSQL-backed sessions.",
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "EJS",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "node-postgres (pg)",
      "Passport.js",
      "Google OAuth 2.0",
      "Passport Local",
      "bcrypt",
      "Express Session",
      "connect-pg-simple",
      "Multer",
      "dotenv",
      "Postman",
    ],
    screenshots: [
      "/projects/blogify.png",
      "/projects/blogs.png",
      "/projects/signin.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Manthan420/Blogify",
  },

  {
    number: "03",
    title: "Hearts Game",
    description:
      "A team-developed Windows desktop card game built around the classic Hearts rules. Features three computer-controlled opponents, automated card-selection strategies, real-time scoring, game logs, and persistent player statistics.",
    technologies: [
      "C#",
      ".NET 8",
      "WPF",
      "XAML",
      "MVVM",
      "Object-Oriented Programming",
      "PostgreSQL",
      "Npgsql",
      "Visual Studio",
    ],
    screenshots: [
      "/projects/Hearts.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Illu-Minatee/Hearts_Game",
  },

  {
    number: "04",
    title: "Game Library",
    description:
      "An independently developed game collection web application where users can browse, search, filter, and sort games. Authenticated users can add games, delete their own entries, and maintain a personal favorites list.",
    technologies: [
      "React 19",
      "JavaScript",
      "Vite",
      "React Router",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security (RLS)",
      "CSS3",
      "AWS Amplify",
      "ESLint",
    ],
    screenshots: [
      "/projects/game-library.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Manthan420/game-library",
  },
];

function ProjectGallery({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = project.screenshots;

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="project-gallery">
      <div className="project-image">
        <img
          src={screenshots[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
        />

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={previousImage}
              aria-label="Previous screenshot"
            >
              &#10094;
            </button>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={nextImage}
              aria-label="Next screenshot"
            >
              &#10095;
            </button>

            <span className="gallery-counter">
              {currentIndex + 1} / {screenshots.length}
            </span>
          </>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="gallery-dots">
          {screenshots.map((screenshot, index) => (
            <button
              type="button"
              key={screenshot}
              className={`gallery-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View screenshot ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
            <ProjectGallery project={project} />

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
