import { NavLink, Link } from "react-router";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="brand">
          <span>Manthan Jayswal</span>
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Technologies
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;