import { useState } from "react";
import ProductList from "./components/ProductList";
import productsData from "../db.json";

function App() {
  const [products, setProducts] = useState(productsData.products);
  const [showAvailable, setShowAvailable] = useState(false);

  function handleRemove(id) {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  }

  const filteredProducts = showAvailable
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowAvailable(false)}>
        Show All
      </button>

      <button onClick={() => setShowAvailable(true)}>
        Show Available
      </button>

      <ProductList
        products={filteredProducts}
        onRemove={handleRemove}
      />
    </>
  );
}

export default App;