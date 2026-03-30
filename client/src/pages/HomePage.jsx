import { useEffect, useState } from "react";
import { getProducts, getServerHealth } from "../services/api";

function HomePage() {
  const [serverMessage, setServerMessage] = useState("Checking backend...");
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const healthData = await getServerHealth();
        setServerMessage(healthData.message);
      } catch (error) {
        setServerMessage("Backend connection failed");
      }

      try {
        const productData = await getProducts();
        setProducts(productData.products || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <section className="page">
      <h1 className="page-title">Welcome to StorePilot</h1>
      <p className="page-subtitle">
        This is the starting point for your smart grocery list app.
      </p>

      <div className="status-card">
        <h2>Backend Status</h2>
        <p>{serverMessage}</p>
      </div>

      <div className="status-card">
        <h2>Products</h2>

        {loadingProducts ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found in the database yet.</p>
        ) : (
          <div className="product-list">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <h3>{product.title}</h3>
                <p>Category: {product.category}</p>
                <p>Aisle: {product.aisleNumber}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ₹{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;