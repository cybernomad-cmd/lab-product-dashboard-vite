function ProductCard({ id, name, price, available, onRemove }) {
  return (
    <div className={available ? "" : "outOfStockClass"}>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{available ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
}

export default ProductCard;