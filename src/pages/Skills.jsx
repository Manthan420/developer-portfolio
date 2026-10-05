const technologyGroups = [
  {
    title: "Languages & Frameworks",
    technologies: [
      {
        name: "HTML",
        logo: "/logos/html.svg",
      },
      {
        name: "CSS",
        logo: "/logos/css.svg",
      },
      {
        name: "JavaScript",
        logo: "/logos/javascript.svg",
      },
      {
        name: "React",
        logo: "/logos/react.svg",
      },
      {
        name: "Python",
        logo: "/logos/python.svg",
      },
      {
        name: "FastAPI",
        logo: "/logos/fastapi.svg",
      },
      {
        name: "C#",
        logo: "/logos/csharp.svg",
      },
      {
        name: "SQL",
        logo: "/logos/sql.svg",
      },
      {
        name: "PostgreSQL",
        logo: "/logos/postgresql.svg",
      },
    ],
  },
  {
    title: "Tools",
    technologies: [
      {
        name: "Git",
        logo: "/logos/git.svg",
      },
      {
        name: "GitHub",
        logo: "/logos/github.svg",
      },
      {
        name: "VS Code",
        logo: "/logos/vscode.svg",
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