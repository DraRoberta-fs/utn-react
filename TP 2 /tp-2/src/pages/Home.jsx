// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data || []);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Productos</h2>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {products.map(product => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#fff"
              }}
            >
              <h3>{product.name}</h3>
              <p><strong>Precio:</strong> ${product.price}</p>
              <Link to={`/product/${product.id}`} style={{ color: "#007bff" }}>
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
