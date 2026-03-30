import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page">
      <h1 className="page-title">404</h1>
      <p className="page-subtitle">Page not found.</p>

      <Link to="/" className="back-home-btn">
        Go back home
      </Link>
    </section>
  );
}

export default NotFoundPage;