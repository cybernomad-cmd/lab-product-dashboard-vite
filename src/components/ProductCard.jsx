import PropTypes from "prop-types";

function ProductCard({ id, name, price, inStock, onRemove }) {
  return (
    <div className={inStock ? "" : "outOfStockClass"}>
      <h2>{name}</h2>

      <p>${price}</p>

      <p>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProductCard;