import { useNavigate } from "react-router-dom";
import "./Pages.css";

function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/buy-list");
  };

  return (
    <section className="page home-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Plan your shopping smarter with StorePilot</h1>
          <p>
            StorePilot helps users create a buy list, check whether products are
            available, view useful product details, and move selected items into
            the cart more easily.
          </p>
          <button className="primary-btn" onClick={handleStart}>
            Make Your Buy List
          </button>
        </div>

        <div className="hero-card">
          <h3>Why StorePilot?</h3>
          <ul>
            <li>Create your shopping list quickly</li>
            <li>Check product availability</li>
            <li>See aisle and quantity details</li>
            <li>Build a smoother shopping experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomePage;