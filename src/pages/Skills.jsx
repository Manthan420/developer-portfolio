const technologyGroups = [
  {
    title: "Programming Languages",
    technologies: [
      { name: "JavaScript", logo: "/logos/js.png" },
      { name: "Python", logo: "/logos/python.png" },
      { name: "C#", logo: "/logos/c-sharp.png" },
    ],
  },
  {
    title: "Frontend Development",
    technologies: [
      { name: "React", logo: "/logos/react.png" },
      { name: "HTML5", logo: "/logos/html.png" },
      { name: "CSS3", logo: "/logos/css.png" },
    ],
  },
  {
    title: "Backend & APIs",
    technologies: [
      { name: "Node.js", logo: "/logos/node-js.png" },
      { name: "Express.js", logo: "/logos/expressjs.png" },
      { name: "FastAPI", logo: "/logos/fastApi.png" },
      { name: "REST APIs", logo: "/logos/restAPI.jpg" },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", logo: "/logos/postgres.png" },
      { name: "Supabase", logo: "/logos/supabase.png" },
      { name: "SQL", logo: "/logos/sql.png" },
    ],
  },
  {
    title: "Developer Tools",
    technologies: [
      { name: "Git", logo: "/logos/git.png" },
      { name: "GitHub", logo: "/logos/github.png" },
      { name: "VS Code", logo: "/logos/vscode.png" },
      { name: "Postman", logo: "/logos/postman.png" },
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