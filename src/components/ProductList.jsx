import ProductCard from "./ProductCard";

function ProductList({ products, onRemove }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          available={product.available}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default ProductList;