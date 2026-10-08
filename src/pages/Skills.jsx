const technologyGroups = [
  {
    title: "Languages & Frameworks",
    technologies: [
      {
        name: "HTML",
        logo: "/logos/html.png",
      },
      {
        name: "CSS",
        logo: "/logos/css.png",
      },
      {
        name: "JavaScript",
        logo: "/logos/js.png",
      },
      {
        name: "React",
        logo: "/logos/react.png",
      },
      {
        name: "Python",
        logo: "/logos/python.png",
      },
      {
        name: "FastAPI",
        logo: "/logos/fastApi.png",
      },
      {
        name: "C#",
        logo: "/logos/c-sharp.png",
      },
      {
        name: "SQL",
        logo: "/logos/sql.png",
      },
      {
        name: "REST API",
        logo: "/logos/restAPI.jpg",
      },    
      {
        name: "PostgresSQL",
        logo: "/logos/postgres.png",
      },
    ],
  },
  {
    title: "Tools",
    technologies: [
      {
        name: "Git",
        logo: "/logos/git.png",
      },
      {
        name: "GitHub",
        logo: "/logos/github.png",
      },
      {
        name: "VS Code",
        logo: "/logos/vscode.png",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="technologies-page">
      <header className="technologies-header">
        <p className="eyebrow">TECHNOLOGIES</p>

        <h1>Tech stack</h1>

        <p className="technologies-intro">
          Languages, frameworks, and tools I've been using in my
          coursework and projects.
        </p>
      </header>

      {technologyGroups.map((group) => (
        <section className="technology-section" key={group.title}>
          <h2>{group.title}</h2>

          <div className="technology-grid">
            {group.technologies.map((technology) => (
              <article
                className="technology-card"
                key={technology.name}
              >
                <div className="technology-logo">
                  <img
                    src={technology.logo}
                    alt={`${technology.name} logo`}
                  />
                </div>

                <h3>{technology.name}</h3>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

export default Skills;