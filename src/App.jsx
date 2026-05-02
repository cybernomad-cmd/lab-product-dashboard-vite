import { useState } from "react";
import ProductList from "./components/ProductList";
import productsData from "../db.json";

function App() {
  const [showAvailable, setShowAvailable] = useState(false);

  const filteredProducts = showAvailable
    ? productsData.products.filter((product) => product.available)
    : productsData.products;

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowAvailable(false)}>
        Show All
      </button>

      <button onClick={() => setShowAvailable(true)}>
        Show Available
      </button>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;