import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

function ProductList({ products, onRemove }) {
  return (
    <>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            onRemove={onRemove}
          />
        ))
      )}
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      inStock: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProductList;