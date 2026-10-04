import { Link } from "react-router";

function NotFound() {
  return (
    <section className="page-section">
      <p className="eyebrow">404</p>

      <h1>Page not found.</h1>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link to="/" className="button">
        Back Home
      </Link>
    </section>
  );
}

export default NotFound;