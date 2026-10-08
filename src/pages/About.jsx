function About() {
  return (
    <section className="about-page">
      <header className="about-header">
        <p className="eyebrow">ABOUT ME</p>

        <h1>A little about me.</h1>

        <p className="about-intro">
          I'm a student at Durham College with an interest in software
          development and building practical applications.
        </p>
      </header>

      <div className="about-content">
        <article className="about-section">
          <p className="about-number">01</p>

          <div>
            <h2>Who I am</h2>

            <p>
              My interest in software development started when I was a kid.
              I grew up watching my older brother work as a software developer,
              which gave me an early look into the world of technology. I would
              also spend time playing games on his computer, and over time I
              became curious about how the software behind them actually worked.
              Working in an IT company became a childhood dream, and I'm now
              working toward that goal by studying software development and
              building projects of my own.
            </p>
          </div>
        </article>

        <article className="about-section">
          <p className="about-number">02</p>

          <div>
            <h2>What I'm learning</h2>

            <p>
              My current work includes technologies such as React,
              JavaScript, Python, FastAPI, C#, SQL, and PostgreSQL.
              I'm continuing to improve my problem-solving and development
              skills by working on projects and learning from each one.
            </p>
          </div>
        </article>

        <article className="about-section">
          <p className="about-number">03</p>

          <div>
            <h2>Education</h2>

            <p>
              I completed high school with a focus on Science, with
              Mathematics as a major subject. I am currently continuing
              my studies at Durham College while building my skills in
              software development.
            </p>
          </div>
        </article>

        <article className="about-section">
          <p className="about-number">04</p>

          <div>
            <h2>Work experience</h2>

            <p>
              I currently work as an associate at 7-Eleven, where I have
              developed experience in customer service, communication,
              teamwork, and working responsibly in a fast-paced environment.
            </p>
          </div>
        </article>

        <article className="about-section">
          <p className="about-number">05</p>

          <div>
            <h2>What I'm looking for</h2>

            <p>
              I'm looking for opportunities where I can gain practical
              experience, contribute to a team, and continue growing as
              a developer. A work-study opportunity would be a great way
              for me to apply what I've learned while developing new
              skills.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;