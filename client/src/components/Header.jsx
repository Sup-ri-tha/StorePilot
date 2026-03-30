import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          StorePilot
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;