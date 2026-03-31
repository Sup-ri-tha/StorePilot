import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BuyListPage from "./pages/BuyListPage";
import ResultsPage from "./pages/ResultsPage";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy-list" element={<BuyListPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;