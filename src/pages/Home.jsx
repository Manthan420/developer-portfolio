
import { Link } from "react-router";

function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <p className="availability">
          <span className="status-dot"></span>
          Open to on-campus work
        </p>

        <p className="eyebrow">SOFTWARE DEVELOPMENT STUDENT</p>

        <h1>
          I build web apps,
          <br />
          APIs, and useful tools.
        </h1>

        <p className="hero-description">
          Student developer at Durham College in Oshawa.
          I build applications, work with APIs and databases,
          and enjoy solving practical problems.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            See my projects
          </Link>

          <a href="/resume.pdf" className="btn-secondary" download>
            Download resume
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Manthan420" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="mailto:YOUR-EMAIL@example.com">
            Email ↗
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <span>YOUR PHOTO</span>
      </div>
    </section>
  );
}

export default Home;
