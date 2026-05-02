function ProductCard({ name, price, available }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{available ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;